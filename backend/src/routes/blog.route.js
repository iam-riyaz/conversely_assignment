
import express from "express";

import * as blogController from "../controllers/blog.controller.js"

export const blogRoute= express.Router()

blogRoute.get("/blogs", blogController.getBlogs)