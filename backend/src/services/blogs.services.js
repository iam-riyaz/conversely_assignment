
import { Blogs } from "../models/blogs.model.js"

export const getBlogs=async ()=>{

    const result= await Blogs.find({})
    return result
}