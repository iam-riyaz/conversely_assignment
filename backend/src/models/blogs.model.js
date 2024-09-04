import mongoose from "mongoose";

export const blogsSchema= new mongoose.Schema({
   data:{type:String}
})

export const Blogs = mongoose.model("blog",blogsSchema)