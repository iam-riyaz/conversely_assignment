
import * as blogsService from "../services/blogs.services.js"

export const getBlogs = async (req,res)=>{
    try{

        const blogs = await blogsService.getBlogs()

        res.status(200).send({
            success:true,
            data:{blogs}
        })

    }
    catch(err){
        res.status(400).send("error occurred while getting data")
    }
}

export const createBlog= async(req,res)=>{
    try{

        const {text}= req.body

        const blog= await blogsService.createBlog({text})
        res.status(200).send({
            success:true,
            data:{blog}
        })

    }
    catch(err){
        res.status(400).send("error occurred while getting data")
    }
}


export const getSingleBlog = async (req,res)=>{
    try{

        const {id}= req.params

        const blog= await blogsService.getSingleBlog({id})
        res.status(200).send({
            success:true,
            data:{blog}
        })

    }
    catch(err){
        res.status(400).send("error occurred while getting data")
    }
}


export const updateBlog = async (req,res)=>{
    try{

        const {id}= req.params
        const {text}= req.body

        const blog= await blogsService.updateBlog({id,text})
        res.status(200).send({
            success:true,
            data:{blog}
        })

    }
    catch(err){
        res.status(400).send("error occurred while getting data")
    }
}


export const deleteBlog = async (req,res)=>{
    try{

        const {id}= req.params

        const blog= await blogsService.deleteBlog({id})
        res.status(200).send({
            success:true,
            data:{blog}
        })

    }
    catch(err){
        res.status(400).send("error occurred while getting data")
    }
}


