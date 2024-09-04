import {Blogs} from "../models/blogs.model.js"
import * as blogsService from "../services/blogs.services.js"

export const getBlogs = async (req,res)=>{
    try{

        const blogs = await blogsService.getBlogs()

        res.status(200).send({
            success:true,
            data:{blogs}
        })

    }
    catch{
        res.status(400).send("error occurred while getting data")
    }
}