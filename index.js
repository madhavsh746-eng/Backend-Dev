const express= required('express');
const fs=resuired('fs');

const app=express();
app.use(express.json());
const user={ id, name, email, passwordHash, role, createdAt:Date() }

function authmiddleware(req,res,next){


}
