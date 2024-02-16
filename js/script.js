"use strict";

function fetchPost(postId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Post not found");
        }
        return response.json();
      })
      .then((post) => resolve(post))
      .catch((err) => reject(err));
  });
}

function fetchComments(postId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Comments not found");
        }
        return response.json();
      })
      .then((comments) => resolve(comments))
      .catch((err) => reject(err));
  });
}

function displayPost(post) {
  const postContainer = document.getElementById("postContainer");
  postContainer.innerHTML = `
    <div>
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <button id="commentsButton">Get Comments</button>
    </div>
  `;

  const commentsButton = document.getElementById("commentsButton");
  commentsButton.addEventListener("click", function () {
    fetchComments(post.id)
      .then((comments) => displayComments(comments))
      .catch((error) => alert(error.message));
  });
}

function displayComments(comments) {
  const postContainer = document.getElementById("postContainer");
  const commentsList = document.createElement("ul");
  comments.forEach((comment) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${comment.name}: ${comment.body}`;
    commentsList.appendChild(listItem);
  });
  postContainer.appendChild(commentsList);
}

function searchPost() {
  const postId = document.getElementById("postIdInput").value;
  if (!postId) {
    alert("Please enter a post ID.");
    return;
  }

  fetchPost(postId)
    .then((post) => {
      displayPost(post);
    })
    .catch((error) => alert(error.message));
}
