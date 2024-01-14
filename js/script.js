"use strict";

class Student {
  constructor(name, surname, birth, lessonCount = 3) {
    this.gradeSetting = {
      min: 0,
      max: 100,
    };

    this.name = name;
    this.surname = surname;
    this.birth = birth;
    this.grades = new Array(lessonCount);
    this.attendance = new Array(lessonCount);
    this.currentLesson = 0;
  }

  getAge() {
    if (typeof this.birth !== "number") {
      throw new Error("Birth should be a number");
    }
    return new Date().getFullYear() - this.birth;
  }

  checkAttendance(lessonVisited) {
    if (this.currentLesson >= this.attendance.length) {
      throw new Error("Can't add more than 25 lessons");
    }
    this.attendance[this.currentLesson] = lessonVisited;
    this.currentLesson++;
  }

  setGrade(grade) {
    if (typeof grade !== "number") throw new Error("Grade should be a number");
    if (grade > this.gradeSetting.max || grade < this.gradeSetting.min)
      throw new Error("Can't add grade");
    const currentLessonIndex = this.currentLesson - 1;

    if (!this.attendance[currentLessonIndex])
      throw new Error("Can't set grade, student has not attended the lesson");
    this.grades[currentLessonIndex] = grade;
  }

  summary() {
    const sumMark = this.grades.reduce((sum, grade) => sum + grade, 0);
    const averageMark = sumMark / this.grades.length;
    const totalAttendance = this.attendance.reduce(
      (sum, isAttended) => sum + (isAttended ? 1 : 0),
      0,
    );

    const averageAttendance = totalAttendance / this.attendance.length;

    if (averageMark >= 90 && averageAttendance > 0.9) {
      return "Молодець!";
    } else if (averageMark < 90 && averageAttendance < 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

const student = new Student("Vika", "Kus", 2005);
const studentTwo = new Student("Vlad", "dog", 1999);

student.checkAttendance(true);
student.setGrade(100);
student.checkAttendance(true);
student.setGrade(90);
student.checkAttendance(true);
student.setGrade(90);

studentTwo.checkAttendance(true);
studentTwo.setGrade(100);
studentTwo.checkAttendance(false);
studentTwo.checkAttendance(true);
studentTwo.setGrade(100);

console.log(student);
console.log(student.getAge());
console.log(student.summary());

console.log(studentTwo);
console.log(studentTwo.getAge());
console.log(studentTwo.summary());
