import { Router } from "express";
import validation from "../../middleware/validation.js";
import {
    ComplexPostSchema,
    ComplexPutSchema,
} from "../../validation/validation.js";
import complex from "./complex.js";

const ComplexRoutes = Router();

export default ComplexRoutes.get("/complex", complex.GET)
    .get("/complex/:id", complex.SELECT_COMPLEX)
    .post("/complex", validation(ComplexPostSchema), complex.POST)
    .put("/complex/:id", validation(ComplexPutSchema), complex.PUT)
    .delete("/complex/:id", complex.DELETE);
