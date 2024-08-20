import express from "express";
import path from "path";
import taskRoutes from './routes/taskRoutes'

const app = express()
const port = 8921

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../views'))

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../public')))

app.use('/', taskRoutes)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})