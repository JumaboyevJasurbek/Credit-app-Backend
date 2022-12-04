import { ErrorHandler } from "../../exceptions/errorHandler.js";
import { sign } from "../../utils/jwt.js";
import { findBank, loginAdmin } from "./model.js";

export default {
    GET: async (req, res, next) => {
        res.json("admin");
    },

    POST: async (req, res, next) => {
        const { username, password } = req.filtered;

        const foundUser = await loginAdmin(username, password).catch(() =>
            next(new ErrorHandler(), 503)
        );

        console.log(req.body);

        console.log(foundUser);

        if (foundUser && foundUser.length) {
            const [user] = foundUser;
            res.status(200).json({
                status: 200,
                message: "User found",
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
    CALCULATOR: async (req, res, next) => {
        const { year, meter, sum } = req.query;
        if ((!year, !meter, !sum)) {
            return next(new ErrorHandler("Bad request", 400));
        }

        const HOME_PRICE = Number(sum.split(" ").join("")) * Number(meter);

        const bankConc = await findBank(HOME_PRICE, year);
        const startingPayment =
            (HOME_PRICE * Number(bankConc.map((e) => e.starting_payment))) /
            100;

        const monthlyPayment = (HOME_PRICE - startingPayment) / (year * 12);

        res.json({
            HOME_PRICE,
            bankConc,
            startingPayment,
            monthlyPayment,
        });
    },
};
