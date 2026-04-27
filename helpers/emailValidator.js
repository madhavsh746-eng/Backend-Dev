const axios=require("axios")

const validateEmail=async(email)=>{
try{
const res=await axios.get(`https://emailreputation.abstractapi.com/v1/?api_key=933f4bcea2514ffda7a8256e2de14496&email=${email}`)
return res.data
}catch(err){
console.log(err.response?.data||err.message)
return null
}
}

module.exports=validateEmail