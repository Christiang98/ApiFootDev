const express = require("express")
const People = require("./models/peopleModel")
const Player = require("./models/playerModel")
const peopleRouter = require("./routes/peopleRouter")(People)
const playerRouter = require("./routes/playerRoutes")(Player)
const authRouter = require("./routes/authRouter")(People)
const errorHandler = require("./middleware/errorHandler")
dotEnv = require("dotenv").config()
const { expressjwt } = require("express-jwt")
const cors = require("cors")

const app = express()

require("./database/db")
app.use (cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.all(
    "/*",
    expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] }).unless({
        path: ["/auth/login", "/auth/register"]
    })
)

app.use((err, _, res, next) => {
    if (err.name === "UnauthorizedError") {
        res.status(401).json({
            error: err.name,
            cause: "Unauthorized.Missing or invalid token previded"
        })
    } else {
        next(err)
    }
}
)

app.use("/api", peopleRouter, playerRouter)
app.use("/", authRouter)
app.use(errorHandler)

app.listen(5000, () => {
    console.log("Server is running!")
})