import { Router } from "express";
import validation from "../../middleware/validation.js";
import { BankPostSchema, BankPutSchema } from "../../validation/validation.js";
import banks from "./banks.js";

const BanksRoutes = Router();

export default BanksRoutes.get("/banks", banks.GET)
    .post("/banks", validation(BankPostSchema), banks.POST)
    .put("/banks/:id", validation(BankPutSchema), banks.PUT)
    .delete("/banks/:id", banks.DELETE);
