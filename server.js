require("dotenv").config()
const express=require("express")
const connectDB=require("./config/db")

console.log("EMAIL_USER:",process.env.EMAIL_USER)
console.log("EMAIL_PASS:",process.env.EMAIL_PASS)

const app=express()

connectDB()

app.use(express.json())

app.use("/api/auth",require("./routes/authRoutes"))

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))