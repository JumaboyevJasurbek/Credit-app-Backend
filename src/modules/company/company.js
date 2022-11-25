import { allCompany } from "./model.js";

export default {
    GET: async (_, res, __) => {
        res.json(await allCompany());
    },
};
