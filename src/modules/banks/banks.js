import { allBanks, createBanks, deleteBanks, updateBanks } from "./model.js";

export default {
    GET: async (_, res, __) => {
        res.json(await allBanks());
    },

    POST: async (req, res, next) => {
        const { name, upto, duration, starting, img } = req.filtered;

        const newBank = await createBanks(
            name,
            upto,
            duration,
            starting,
            img
        ).catch(() => next(new ErrorHandler(), 503));

        res.status(201).json({
            message: "Created",
            status: 201,
            data: newBank,
        });
    },

    PUT: async (req, res, _) => {
        const { id } = req.params;
        const { name, upto, duration, starting, img } = req.filtered;

        const updatedBank = await updateBanks(
            name,
            upto,
            duration,
            starting,
            img,
            id
        );

        res.status(204).json({
            message: "Updated",
            status: 204,
            date: updatedBank,
        });
    },

    DELETE: async (req, res, next) => {
        const { id } = req.params;

        const deletedBank = await deleteBanks(id);

        res.json({
            message: "Deleted",
            status: 204,
            date: deletedBank,
        });
    },
};
