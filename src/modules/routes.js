import { Router } from "express";
import usersRoutes from "./users/routes.js";
import CompanyRoutes from "./company/routes.js";
import ComplexRoutes from "./complex/routes.js";
import RoomsRoutes from "./rooms/routes.js";
import BanksRoutes from "./banks/routes.js";

const router = Router();

export default router.use(
    "/",
    usersRoutes,
    CompanyRoutes,
    ComplexRoutes,
    RoomsRoutes,
    BanksRoutes
);
