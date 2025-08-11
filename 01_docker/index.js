import express from "express"

const app = express()
const port = 8000


app.get("/", (req, res) => {
  return res.json({
    message: "Docker is fun!🚀"
  })
})

app.listen(port, () => {
  console.log(`Server is listening at ${port}`)
})

// node v22
// npm v11