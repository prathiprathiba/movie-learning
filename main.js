import express from "express";

const app = express();
const port = 6969;

app.get("/", (req, res) => {
    res.json({ msg: "hello friends" });
});
// CRUD functionality of movies
//C - create
app.get("/movies", () => {

})

//R -Read 
app.post("/movies", (req, res) => {

})

//U -update 
app.put("/movies/:id", (req, res) => {

})

//D -delete
app.delete("/movies/:id", (req, res) => {

})




app.listen(port, () => {
    console.log(`server running on the http://localhost:${port}`);

})