"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Task_1 = require("../models/Task");
const router = express_1.default.Router();
const taskManager = new Task_1.TaskManager();
router.get('/', (req, res) => {
    const tasks = taskManager.getAllTasks();
    res.render('index', { tasks });
});
router.post('/add', (req, res) => {
    const { title, isUrgent } = req.body;
    console.log('sdf', isUrgent);
    taskManager.addTask(title, isUrgent);
    res.redirect('/');
});
router.get('/edit/:id', (req, res) => {
    const task = taskManager.getTaskById(parseInt(req.params.id));
    if (task) {
        res.render('editTask', { task });
    }
    else {
        res.redirect('/');
    }
});
router.post('/update/:id', (req, res) => {
    const { title, status } = req.body;
    taskManager.updateTask(parseInt(req.params.id), title, status);
    res.redirect('/');
});
router.post('/delete/:id', (req, res) => {
    taskManager.deleteTask(parseInt(req.params.id));
    res.redirect('/');
});
exports.default = router;
