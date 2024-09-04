import mongoose from "mongoose";

export const blogsSchema= new mongoose.Schema({
   text:{type:String}
})

export const Blogs = mongoose.model("blog",blogsSchema)