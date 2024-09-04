
import express from "express";

import * as blogController from "../controllers/blog.controller.js"
import { authentication } from "../middlewares/authentication.js";

export const blogRoute= express.Router()

blogRoute.get("/posts", authentication, blogController.getBlogs)

blogRoute.post("/posts",authentication,blogController.createBlog)

blogRoute.get("/posts/:id",authentication, blogController.getSingleBlog)

blogRoute.patch("/posts/:id",authentication, blogController.updateBlog)

blogRoute.delete("/posts/:id",authentication, blogController.deleteBlog)

