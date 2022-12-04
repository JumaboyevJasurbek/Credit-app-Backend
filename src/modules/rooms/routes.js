import { Router } from "express";
import validation from "../../middleware/validation.js";
import { RoomPostSchema, RoomPutSchema } from "../../validation/validation.js";
import rooms from "./rooms.js";

const RoomsRoutes = Router();

export default RoomsRoutes.get("/rooms", rooms.GET)
    .get("/rooms/:id", rooms.SELECT_ROOM)
    .get("/findRoom/:id", rooms.FIND_ROOM)
    .post("/rooms", validation(RoomPostSchema), rooms.POST)
    .put("/rooms/:id", validation(RoomPutSchema), rooms.PUT)
    .delete("/rooms/:id", rooms.DELETE);
