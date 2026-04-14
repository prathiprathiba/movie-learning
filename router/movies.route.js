import express from "express";

const router = express.Router();





//C - get movies
router.get("/", (req, res) => {

    res.json("get all movies");
});

//R -create 
router.post("/movies", (req, res) => {
    res.send("create a movie");
});

//U -update 
router.put("/movies/:id", (req, res) => {
    res.send("update a movie");
});

//D -delete
router.delete("/movies/:id", (req, res) => {
    res.send("delete a movie");
});
export default router;

