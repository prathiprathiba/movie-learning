import express from "express";
import movieroutes from "./router/movies.route.js";
const app = express();
const port = 6969;


// CRUD functionality of movies
app.use("/movies", movieroutes);



// app.get("/", (req, res) => {
//     res.json({ msg: "hello friends" });
// });
app.listen(port, (req, res) => {
    console.log(`http://localhost:${port}`);
});

