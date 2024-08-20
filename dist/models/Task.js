"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = exports.UrgentTask = exports.RegularTask = exports.BaseTask = void 0;
class BaseTask {
    constructor(id, title, status) {
        this.id = id;
        this.title = title;
        this.status = status;
    }
}
exports.BaseTask = BaseTask;
class RegularTask extends BaseTask {
    getPriority() {
        return 'Normal';
    }
}
exports.RegularTask = RegularTask;
class UrgentTask extends BaseTask {
    getPriority() {
        return 'High';
    }
}
exports.UrgentTask = UrgentTask;
class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    addTask(title, isUrgent) {
        const task = isUrgent
            ? new UrgentTask(this.nextId++, title, 'to-do')
            : new RegularTask(this.nextId++, title, 'to-do');
        this.tasks.push(task);
        return task;
    }
    getAllTasks() {
        return this.tasks;
    }
    getTaskById(id) {
        return this.tasks.find(task => task.id === id);
    }
    updateTask(id, title, status) {
        const task = this.getTaskById(id);
        if (task) {
            task.title = title;
            task.status = status;
        }
        return task;
    }
    deleteTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    }
}
exports.TaskManager = TaskManager;
