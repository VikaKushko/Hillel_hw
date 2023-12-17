"use strict";

(function () {
  const KEY = {
    todoFormSelector: "#todoForm",
    todoContainerSelector: "#todoItems",
    dataKey: "formData",
  };

  const view = {
    renderElement(data) {
      const template = this.createTemplate(data);
      this.renderTodoItem(template);
    },

    renderTodoItem(elementToRender) {
      const todoContainer = document.querySelector(KEY.todoContainerSelector);
      todoContainer.prepend(elementToRender);
    },

    createTemplate(data) {
      const wrapper = document.createElement("div");
      wrapper.className = "col-4";
      wrapper.setAttribute("data-todo-item", data.id);

      const taskWrapper = document.createElement("div");
      taskWrapper.className = "taskWrapper";
      wrapper.appendChild(taskWrapper);

      const taskHeading = document.createElement("div");
      taskHeading.className = "taskHeading";
      taskHeading.innerHTML = data.title;
      taskWrapper.appendChild(taskHeading);

      const taskDescription = document.createElement("div");
      taskDescription.className = "taskDescription";
      taskDescription.innerHTML = data.description;
      taskWrapper.appendChild(taskDescription);

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "btn btn-sm btn-danger";
      deleteBtn.innerText = "X";
      deleteBtn.setAttribute("data-remove-btn", "");
      taskWrapper.appendChild(deleteBtn);

      return wrapper;
    },

    resetData() {
      document.querySelector(KEY.todoFormSelector).reset();
    },

    removeElement(todoId) {
      document.querySelector(`[data-todo-item="${todoId}"]`).remove();
    },
  };

  const modal = {
    currentId: 0,

    save(data) {
      ++this.currentId;
      const dataCopy = { ...data };
      dataCopy.id = this.currentId;
      const savedData = this.get();
      savedData.push(dataCopy);
      try {
        localStorage.setItem(KEY.dataKey, JSON.stringify(savedData));
        return savedData[savedData.length - 1];
      } catch (e) {
        return false;
      }
    },

    get() {
      const savedData = JSON.parse(localStorage.getItem(KEY.dataKey));
      return savedData ? savedData : [];
    },

    removeElementById(todoId) {
      const savedElements = this.get();
      const index = savedElements.findIndex(({ id }) => {
        return todoId === id;
      });
      const [removedElements] = savedElements.splice(index, 1);

      try {
        localStorage.setItem(KEY.dataKey, JSON.stringify(savedElements));
        return removedElements;
      } catch (e) {
        return false;
      }
    },

    initId() {
      const items = this.get();
      if (!items.length) return;
      this.currentId = +items[items.length - 1].id;
    },
  };

  const controller = {
    formHandler(e) {
      e.preventDefault();
      e.stopPropagation();
      const { target } = e;
      const data = Array.from(
        target.querySelectorAll("input, textarea"),
      ).reduce((acc, item) => {
        acc[item.name] = item.value;
        return acc;
      }, {});

      const savedData = modal.save(data);
      if (savedData) {
        view.renderElement(savedData);
        view.resetData();
      }
    },

    removeTodoItemHandler(e) {
      e.stopPropagation();
      const { target } = e;
      if (!target.hasAttribute("data-remove-btn")) return;
      const todoId = +target
        .closest("[data-todo-item]")
        .getAttribute("data-todo-item");
      const removedElement = !!modal.removeElementById(todoId);

      if (removedElement) {
        view.removeElement(todoId);
      }
    },

    loadedHandler() {
      modal.initId();
      const form = document.querySelector(KEY.todoFormSelector);
      form.addEventListener("submit", controller.formHandler);

      const todoContainer = document.querySelector(KEY.todoContainerSelector);
      todoContainer.addEventListener(
        "click",
        controller.removeTodoItemHandler.bind(controller),
      );
    },

    renderExistingItems() {
      modal.get().forEach((item) => {
        view.renderElement(item);
      });
    },

    init() {
      this.formHandler = this.formHandler.bind(this);
      this.removeTodoItemHandler = this.removeTodoItemHandler.bind(this);
      this.loadedHandler = this.loadedHandler.bind(this);

      document.addEventListener("DOMContentLoaded", () => {
        controller.loadedHandler();
        controller.renderExistingItems();
      });
    },
  };

  controller.init();
})();
