import express from "express";
import path from "path";
import fs from "fs";

/* JSON */
import connections from "../data/connections.json";
import technologies from "../data/technologies.json";

let tailwind: any = require('../tailwind.config.js');

const app = express()
    .use(express.urlencoded({ extended: true }))
    .set("view engine", "ejs")
    .set("views", path.resolve(process.cwd(), "assets", "views"))
    .use("/assets", express.static(path.resolve(process.cwd(), "assets")))

app.get("/", (req, res) => {
    res.render("index", {
        connections, technologies, tailwind
    });
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});