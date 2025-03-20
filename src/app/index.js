import express from 'express'
import homeRouter from '../routes/home.routes.js'

const app = express()

app.use(homeRouter)

app.use((req, res) => {
  res.sendFile('index.html', { root: 'public/not-found' })
})

export default app
