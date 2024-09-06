const express = require("express")
const {chats} = require("./data/data")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const colors = require("colors")
const userRoutes = require("./routes/userRoutes");
// const chatRoutes = require("./routes/chatRoutes");
// const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config()
connectDB()
const app = express()
app.use(express.json())

app.get("/", (request, response) => {
    response.send("API is running successfully!!!")
})

app.use("/api/user", userRoutes)

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started at PORT ${PORT}`.cyan.bold))
