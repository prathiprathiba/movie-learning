import express from "express";

const router = express.Router();





//C - get movies
router.get("/", (req, res) => {

    res.send("get all movies");
});

//R -create 
router.post("/", (req, res) => {
    res.send("create a movie");
});

//U -update 
router.put("/:id", (req, res) => {
    res.send("update a movie");
});

//D -delete
router.delete("  /:id", (req, res) => {
    res.send("delete a movie");
});
export default router;

