import { Router } from "express";
import validation from "../../middleware/validation.js";
import users from "./users.js";
import { LoginPostSchema } from "../../validation/validation.js";

const usersRoutes = Router();

export default usersRoutes
    .get("/login", users.GET)
    .get("/calculator", users.CALCULATOR)
    .post("/login", validation(LoginPostSchema), users.POST);
