const User = require("../models/User")
const bcrypt = require("bcryptjs")
const validateEmail = require("../helpers/emailValidator")
const sendEmail = require("../helpers/sendEmail")   

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" })
    }

    const exist = await User.findOne({ email })
    if (exist) {
      return res.status(400).json({ message: "User already exists" })
    }

    const emailData = await validateEmail(email)
    console.log(emailData)

    if (
      !emailData ||
      !emailData.email_deliverability ||
      !emailData.email_deliverability.is_format_valid
    ) {
      return res.status(400).json({ message: "Invalid email" })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = new User({ name, email, password: hash })
    await user.save()

    console.log("Sending email to:", email)   

    await sendEmail(email, "Welcome", "Signup successful")

    res.status(201).json({ message: "Signup successful" })

  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message })
  }
}

exports.login=async(req,res)=>{
  try{
    const{email,password}=req.body
    if(!email||!password){
      return res.status(400).json({message:"All fields required"})
    }
    const user=await User.findOne({email})
    if(!user){
     return res.status(400).json({message:"Invalid credentials"})
    }
    const match=await bcrypt.compare(password,user.password)
    if(!match){
     return res.status(400).json({message:"Invalid credentials"})
    }
    console.log(" Sending login email to:",email)
    await sendEmail(email,"You have loginn successfully")
    console.log(" Login email sent")
    res.status(200).json({message:"Login successful"})
  }
  catch(err){
    console.log("Login Error:",err.message)
    res.status(500).json({message:"Server Error",error:err.message})
  }
}

