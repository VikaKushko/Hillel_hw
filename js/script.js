"use strict";

function analyzeText(line) {
  const word = line.toLowerCase().split(" ");
  const uniqueWords = new Set(word);
  const uniqueWordsCount = uniqueWords.size;

  return uniqueWordsCount;
}

const text = "Привет привет меня зовут Вика меня";
const analysisResult = analyzeText(text);
console.log(text);
console.log("Number of unique words:", analysisResult);
console.log("Unique words:", analysisResult);
