import express from 'express'
import { TaskManager, BaseTask } from '../models/Task'

const router = express.Router()
const taskManager = new TaskManager();

router.get('/', (req, res) => {
  const tasks = taskManager.getAllTasks()
  res.render('index', {tasks})
})

router.post('/add', (req, res) => {
  const {title, isUrgent} = req.body
  console.log('sdf',isUrgent);
  
  taskManager.addTask(title, isUrgent)
  res.redirect('/')
})

router.get('/edit/:id', (req, res) => {
  const task = taskManager.getTaskById(parseInt(req.params.id))
  if (task) {
    res.render('editTask', {task})
  } else {
    res.redirect('/')
  }
})

router.post('/update/:id', (req, res) => {
  const {title, status} = req.body
  taskManager.updateTask(parseInt(req.params.id), title, status)
  res.redirect('/')
})

router.post('/delete/:id', (req, res) => {
  taskManager.deleteTask(parseInt(req.params.id))
  res.redirect('/')
})

export default router