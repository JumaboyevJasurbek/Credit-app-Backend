import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./modules/routes.js";
import errorhandler from "./middleware/errorhandler.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.use(errorhandler);
app.all("/*", (req, res) => {
    res.status(404).json({
        message: req.url + "not found",
    });
});

app.listen(7000, console.log(7000));
