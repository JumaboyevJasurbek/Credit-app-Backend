import { ErrorHandler } from "../../exceptions/errorHandler.js";
import {
    allCompany,
    createCompany,
    deleteCompany,
    findCompany,
    updateCompany,
} from "./model.js";

export default {
    GET: async (_, res, __) => {
        res.json(await allCompany());
    },

    FIND_GET: async (req, res, __) => {
        const { id } = req.params;
        res.json(await findCompany(id));
    },

    POST: async (req, res, next) => {
        const { name, img } = req.filtered;

        const newCompany = await createCompany(name, img).catch(() =>
            next(new ErrorHandler(), 503)
        );

        console.log(newCompany);

        res.status(201).json({
            message: "Created",
            status: 201,
            data: newCompany,
        });
    },

    PUT: async (req, res, _) => {
        const { id } = req.params;
        const { name, img } = req.filtered;

        const updatedCompany = await updateCompany(name, img, id);

        res.status(204).json({
            message: "Updated",
            status: 204,
            date: updatedCompany,
        });
    },

    DELETE: async (req, res, next) => {
        const { id } = req.params;

        const deletedCompany = await deleteCompany(id);

        res.status(204).json({
            message: "Deleted",
            status: 204,
            date: deletedCompany,
        });
    },
};
