import path from "path";
import express from "express";
import htmlTemplate from "./../htmlTemplate";
const app = express();
//////////////////////////////////////////////////////////////////
////comment the 2 lines below when going to run in production ////
import devBundle from "../build-utils/devBundle";
import config from "../config/config";

devBundle.compile(app);
///////////////////////////////////////////////////////////////

const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

app.get("/", (req, res) => {
  res.status(200).send(htmlTemplate());
});

app.listen(config.port);
console.log("Server is listening on PORT:", config.port);
