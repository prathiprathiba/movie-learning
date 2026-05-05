import express from "express";
import movieroutes from "./router/movies.route.js";
import db from "./lib/db.js";
const app = express();
const port = 3000;







// CRUD functionality of movies
app.use("/movies", movieroutes);




app.get("/", (req, res) => {
    res.json({ msg: "hello friends!!" });
});
app.listen(port, (req, res) => {
    console.log(`server is running`);

    console.log(`http://localhost:${port}`);
});

