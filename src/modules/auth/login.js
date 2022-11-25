import { sign } from "../../utils/jwt";
import { auth } from "./model";

export default {
    LOGIN: (req, res) => {
        try {
            const { id, role } = req;

            const { name, password } = req.body;

            const foundUser = auth(name, password);

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
                    message: "wrong username or  password",
                    token: null,
                });
            }

            next();
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    },
};
