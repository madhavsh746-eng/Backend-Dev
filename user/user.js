import fs from 'fs';
import express from 'express';

function createuser(name,email,password,role){
    try {
        const obj={ id, name, email, password, role, createdAt:Date() }
        if(fs.exist(user)){
            console.log("user allready exist");
        }
        obj.push();
        next();
        
    } catch (error) {
        console.log("error");
        
    }
}

function userlogin(email,password){
    try {
        if(!email || !password){
            console.log("fill all the blancks");
        }
    } catch (error) {
        console.log('error in login');
        
    }
}