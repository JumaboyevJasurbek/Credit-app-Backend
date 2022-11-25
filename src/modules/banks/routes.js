import { Router } from "express";
import company from "./company.js";

const CompanyRoutes = Router();

export default CompanyRoutes.get("/company", company.GET);
