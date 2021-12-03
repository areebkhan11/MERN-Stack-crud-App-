import { request } from "express";
import User from "../model/user-schema.js"

export const getusers = async (request, response) =>{
        try{
                let user = await User.find();    
                response.json(user);                
  
         }catch(error){
                 response.json({message: error.message})
         }
 
}


export const adduser = async (request , response) => {
        const user = request.body;
        const newUser = new User(user)

        try{
               await newUser.save();    
               response.json(newUser);                // save mecthod is the method of mongodb uou can save data in mongo db with it
 
        }catch(error){
                response.json({message: error.message})
        }

}

export const getuserById = async (request , response)=>{
        const id = request.params.id;
        try{
        const user = await User.findById(id);
        response.json(user);
        } catch(error) {
                response.json({message : error.message})
        }        

}

export const editUser = async (request, response) =>{
        const user = response.body;
        const edituser 
}