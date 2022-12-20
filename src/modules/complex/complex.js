import { ErrorHandler } from "../../exceptions/errorHandler.js";
import {
    allComplex,
    deleteComplex,
    postComplex,
    putComplex,
    selectCompany,
    selectComplex,
} from "./model.js";

export default {
    GET: async (_, res, __) => {
        res.json(await allComplex());
    },

    SELECT_COMPLEX: async (req, res, __) => {
        const { id } = req.params;

        res.json({
            complex: await selectComplex(id),
            company: await selectCompany(id),
        });
    },

    POST: async (req, res, next) => {
        const { name, company } = req.filtered;

        const newComplex = await postComplex(name, company).catch(() =>
            next(new ErrorHandler(), 503)
        );

        console.log(newComplex);

        res.status(201).json({
            message: "Created",
            status: 201,
            date: newComplex,
        });
    },

    PUT: async (req, res, _) => {
        const { id } = req.params;
        const { name, company } = req.filtered;

        const updatedComplex = await putComplex(name, company, id);

        res.status(204).json({
            message: "Updated",
            status: 204,
            date: updatedComplex,
        });
    },

    DELETE: async (req, res, next) => {
        const { id } = req.params;

        const deletedCompany = await deleteComplex(id);

        res.status(204).json({
            message: "Deleted",
            status: 204,
            date: deletedCompany,
        });
    },
};
