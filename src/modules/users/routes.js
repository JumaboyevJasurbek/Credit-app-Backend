import { Router } from "express";
import validation from "../../middleware/validation.js";
import users from "./users.js";
import {
    GroupPostSchema,
    GroupPutSchema,
    LoginPostSchema,
} from "../../validation/validation.js";
import { loginMiddleware } from "../../middleware/login.middleware.js";
// import verify from "../../middleware/verify.js";

const usersRoutes = Router();

export default usersRoutes
    .post("/login", loginMiddleware, validation(LoginPostSchema), users.GET)
    .post("/users/create", validation(GroupPostSchema), users.POST)
    .put("/users/update/:id", validation(GroupPutSchema), users.PUT);
