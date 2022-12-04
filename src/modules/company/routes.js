import { Router } from "express";
import validation from "../../middleware/validation.js";
import {
    CompanyPostSchema,
    CompanyPutSchema,
} from "../../validation/validation.js";
import company from "./company.js";

const CompanyRoutes = Router();

export default CompanyRoutes.get("/company", company.GET)
    .get("/company/:id", company.FIND_GET)
    .post("/company", validation(CompanyPostSchema), company.POST)
    .put("/company/:id", validation(CompanyPutSchema), company.PUT)
    .delete("/company/:id", company.DELETE);
