import { User } from "../models/auth.model.js"


export const login= async ({username})=>{

    const result= await User.findOne({username})
    return result
}