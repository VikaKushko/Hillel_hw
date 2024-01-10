"use strict";

function getStudentConstructor() {
  const gradeSetting = {
    min: 0,
    max: 100,
  };

  function checkAttendance(lessonVisited, currentLesson, lessonCount) {
    if (currentLesson >= lessonCount) {
      throw new Error("Can't add more than 25 lessons");
    }
    this.attendance[currentLesson] = lessonVisited;
  }

  function getAge() {
    if (typeof this.birth !== "number") {
      throw new Error("Birth should be a number");
    }
    return new Date().getFullYear() - this.birth;
  }

  function setGrade(grade, currentLesson) {
    if (typeof grade !== "number") throw new Error("Grade should be number");
    if (grade > gradeSetting.max || grade < gradeSetting.min)
      throw new Error("Cant add grade");
    const currentLessonIndex = currentLesson - 1;

    if (!this.attendance[currentLessonIndex])
      throw new Error("Cant set grade, student has not attended the lesson ");
    this.grades[currentLesson - 1] = grade;
  }

  function summary() {
    const sumMark = this.grades.reduce(function (sum, grade) {
      return sum + grade;
    }, 0);
    const averageMark = sumMark / this.grades.length;
    const totalAttendance = this.attendance.reduce(function (sum, isAttended) {
      return sum + (isAttended ? 1 : 0);
    }, 0);

    const averageAttendance = totalAttendance / this.attendance.length;

    if (averageMark >= 90 && averageAttendance > 0.9) {
      return "Молодець!";
    } else if (averageMark < 90 && averageAttendance < 0.9) {
      return "Добре, але можна краще ";
    } else {
      return "Редиска!";
    }
  }

  return function StudentS(name, surname, birth, lessonCount = 3) {
    let currentLesson = 0;
    return {
      name,
      surname,
      birth,
      grades: new Array(lessonCount),
      attendance: new Array(lessonCount),
      getAge() {
        return getAge.call(this);
      },
      present() {
        checkAttendance.call(this, true, currentLesson, lessonCount);
        ++currentLesson;
      },
      absent() {
        checkAttendance.call(this, false, currentLesson, lessonCount);
        ++currentLesson;
      },
      setGrade(grade) {
        return setGrade.call(this, grade, currentLesson);
      },
      summary() {
        return summary.call(this);
      },
    };
  };
}

const Student = getStudentConstructor();
const student = new Student("Vika", "Kus", 2005);
const studentTwo = new Student("Vlad", "dog", 1999);
student.present();
student.setGrade(100);
student.present();
student.setGrade(90);
student.present();
student.setGrade(90);
studentTwo.present();
studentTwo.setGrade(100);
studentTwo.absent();
studentTwo.present();
studentTwo.setGrade(100);
console.log(student);
console.log(student.getAge());
console.log(student.summary());
console.log(studentTwo);
console.log(studentTwo.getAge());
console.log(studentTwo.summary());
