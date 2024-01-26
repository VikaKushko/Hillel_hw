"use strict";

function insertWordInto(word) {
  const words = word.split(" ");

  function insert(wordTwo) {
    if (!wordTwo || typeof wordTwo !== "string") {
      throw new Error("Параметр повинен бути непорожнім рядком");
    }

    const randomIndex = Math.floor(Math.random() * (words.length + 1));
    words.splice(randomIndex, 0, wordTwo);

    const resultString = words.join(" ");

    return resultString;
  }

  return insert;
}

const insert = insertWordInto("hello world");

const result = insert("Odesa");
console.log(result);

const secondResult = insert("Odesa");
console.log(secondResult);

const thirdResult = insert("Odesa");
console.log(thirdResult);
