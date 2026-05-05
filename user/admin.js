import express from 'express';

function adminlogin(name,email,password){
    try {
        const admin={
            name:"madhav",
            email:"madhavsh31@gmail.com",
            password:"Madhav@2345"
        }
        if(!name || !email || !password){
            console.log('fill all the blanks');
        }
        if(admin){
            console.log("admin login successfully");
        }

    
    } catch (error) {
        console.log("internal server error");
    }

}