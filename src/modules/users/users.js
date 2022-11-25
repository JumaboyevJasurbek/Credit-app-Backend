import { ErrorHandler } from "../../exceptions/ErrorHandler.js";
import { sign } from "../../utils/jwt.js";
import { loginAdmin, createGroup } from "./model.js";

export default {
    GET: async (req, res, next) => {
        const { username, password, role } = req.body;

        // const { id, role } = req;

        const foundUser = await loginAdmin(username, password, role);

        if (foundUser) {
            res.status(200).json({
                status: 200,
                message: "Logged",
                token: sign({ user_id: foundUser.user_id }),
                data: foundUser,
            });
        } else {
            res.status(401).json({
                status: 401,
                message: "wrong username or password",
                token: null,
            });
        }
    },

    POST: async (req, res, next) => {
        const { name } = req.filtered;
        const newGroup = await createGroup(name).catch(() =>
            next(new ErrorHandler(), 503)
        );

        if (newGroup && newGroup.length) {
            res.status(201).json({
                message: "Created",
                status: 201,
                date: newGroup,
            });
        }
    },

    PUT: async (req, res, next) => {
        const { id } = req.params;
        const { name } = req.filtered;
        const updatedGroup = await updateGroup(name, id);

        if (updatedGroup && updatedGroup.length) {
            res.status(200).json({
                message: "Updated",
                status: 200,
                date: updatedGroup,
            });
        }
    },
};
