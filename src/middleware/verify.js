import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { ErrorHandler } from "../exceptions/errorHandler.js";

dotenv.config();

export default (req, _, next) => {
    const { token_status } = req.cookies;

    console.log(req);

    if (token_status != true) {
        return next(new ErrorHandler("Provide access token", 401));
    }

    jwt.verify(token_status, process.env.SECRET_KEY, (err, decode) => {
        if (err instanceof jwt.JsonWebTokenError) {
            return next(new ErrorHandler("Invalid token", 401));
        }

        req.id = decode.id;
        next();
    });
};
