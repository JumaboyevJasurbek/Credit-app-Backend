import {
    allRooms,
    createRoom,
    deleteRoom,
    findRoom,
    selectComplex,
    selectRooms,
    updateRoom,
} from "./model.js";

export default {
    GET: async (req, res, next) => {
        res.json(await allRooms());
    },

    SELECT_ROOM: async (req, res, next) => {
        const { id } = req.params;
        res.json({
            room: await selectRooms(id),
            complex: await selectComplex(id),
        });
    },
    FIND_ROOM: async (req, res, next) => {
        const { id } = req.params;
        res.json(await findRoom(id));
    },
    POST: async (req, res, next) => {
        const { room_count, square_sum, room_meter_square, complex } =
            req.filtered;

        const newRoom = await createRoom(
            room_count,
            square_sum,
            room_meter_square,
            complex
        ).catch(() => next(new ErrorHandler(), 503));

        console.log(newRoom);

        res.status(201).json({
            message: "Created",
            status: 201,
            date: newRoom,
        });
    },

    PUT: async (req, res, _) => {
        const { id } = req.params;
        const { room_count, square_sum, room_meter_square, complex } =
            req.filtered;

        const updatedRoom = await updateRoom(
            room_count,
            square_sum,
            room_meter_square,
            complex,
            id
        );

        res.status(204).json({
            message: "Updated",
            status: 204,
            date: updatedRoom,
        });
    },

    DELETE: async (req, res, next) => {
        const { id } = req.params;

        const deletedRoom = await deleteRoom(id);

        res.status(204).json({
            message: "Deleted",
            status: 204,
            date: deletedRoom,
        });
    },
};
