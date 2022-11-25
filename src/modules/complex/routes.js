import { Router } from "express";
import complex from "./complex.js";

const ComplexRoutes = Router();

export default ComplexRoutes.get("/complex", complex.GET);
