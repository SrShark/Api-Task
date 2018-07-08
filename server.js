'use strict'
import express from 'express'

const app = express()
const port = process.env.PORT || 3000

let tasks = [
  {
    id: 1,
    description: "hola"
  }
]

app.get('/', (req, res) => {
  res.send('Inicio')
})

//TODO description: 'undefined'
app.post('/api/task', (res, req) => {
  const task = {
    id: tasks.length + 1,
    description: req.body.description
  }

  tasks.push(task)

  res.send(tasks)
})

app.listen(port, () => console.log(`server on localhost:${port}`))
