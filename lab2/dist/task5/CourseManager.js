"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseManager = void 0;
class CourseManager {
    constructor() {
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
    }
    removeCourse(courseName) {
        this.courses = this.courses.filter(course => course.courseName !== courseName);
    }
    findCourse(courseName) {
        return this.courses.find(course => course.courseName === courseName);
    }
    listCourses() {
        this.courses.forEach(course => {
            console.log(`Course: ${course.courseName}`);
            console.log(`Duration: ${course.durationInHours} hours`);
            console.log(`Registered Students: ${course.students.join(', ')}`);
            console.log('-----------------------');
        });
    }
}
exports.CourseManager = CourseManager;
//# sourceMappingURL=CourseManager.js.map