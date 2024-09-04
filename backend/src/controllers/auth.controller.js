import * as authServices from "../services/auth.services.js"
import jwt from "jsonwebtoken"

export const login = async (req,res)=>{

    try{
        const {username,password}= req.body;

        const user = await authServices.login({username})

        let isMatch = false

        
        if( user.password == password){
            isMatch=true;
        }
    

        if (!isMatch) {
          return res.status(200).send({success:false, message: 'Invalid credentials' });
        }
        const token = jwt.sign({username}, process.env.JWT_SALT, { expiresIn: '1h' });
       return res.status(200).send({success:true, token})




    }
    catch(err){
        res.status(400).send("error occurred while getting data")
    }
}
