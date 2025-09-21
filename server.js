const express = require("express")
const cors = require("cors")
require("dotenv").config()
const taskRoute= require("./routes/taskRoute")

const app= express()
const port= process.env.PORT || 7000
const dbConnect= require("./config/db")

app.use(express.json());
app.use(cors());

app.get("/", (req,res)=> res.send("Hello world!"))
app.use("/task", taskRoute)

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`)
)

// http://localhost:7001/task/createTask
// http://localhost:7001/task/getAllTask
