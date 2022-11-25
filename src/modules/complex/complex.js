import { allComplex } from "./model.js";

export default {
    GET: async (_, res, __) => {
        res.json(await allComplex());
    },
};
