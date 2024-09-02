"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineCourse = void 0;
class OnlineCourse {
    constructor(courseName, durationInHours) {
        this.students = [];
        this.courseName = courseName;
        this.durationInHours = durationInHours;
    }
    registerStudent(student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
        }
        else {
            console.log(`${student} is already registered in ${this.courseName}`);
        }
    }
    isStudentRegistered(student) {
        return this.students.includes(student);
    }
}
exports.OnlineCourse = OnlineCourse;
//# sourceMappingURL=OnlineCourse.js.map