
import { Blogs } from "../models/blogs.model.js"

export const getBlogs=async ()=>{

    const result= await Blogs.find({})
    return result
}

export const createBlog = async ({text})=>{
    const blog = await Blogs.create({text})
    return blog
}

export const getSingleBlog= async({id})=>{
    const blog= await Blogs.findById(id)
    return blog
}

export const  updateBlog=async({id,text})=>{

    const blog= await Blogs.findByIdAndUpdate(id,{text},{new:true})
    return blog
    

}

export const deleteBlog= async ({id})=>{

    const blog= await Blogs.findByIdAndDelete(id)
    return blog

}