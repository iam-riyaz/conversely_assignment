
import express from "express";

import * as blogController from "../controllers/blog.controller.js"

export const blogRoute= express.Router()

blogRoute.get("/posts", blogController.getBlogs)

blogRoute.post("/posts",blogController.createBlog)

blogRoute.get("/posts/:id", blogController.getSingleBlog)

blogRoute.patch("/posts/:id", blogController.updateBlog)

blogRoute.delete("/posts/:id", blogController.deleteBlog)
