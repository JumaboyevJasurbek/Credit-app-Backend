import { loginAdmin } from "../modules/users/model.js";

export const loginMiddleware = (err, req, res, next) => {
    const { username, password } = req.body;

    const foundUser = loginAdmin(username, password);

    if (!foundUser) {
        return res.json({
            message: "user or password not found",
            status: 401,
        });
    }

    req.role = foundUser.role;

    console.log(req.role);
    req.id = foundUser.id;
    next();
};
