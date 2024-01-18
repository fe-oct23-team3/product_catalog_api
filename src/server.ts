import express from 'express'

const app = express()

const PORT = 3005

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(PORT, () => {
  console.log(`API is ready on http://localhost:${PORT}`)
})
