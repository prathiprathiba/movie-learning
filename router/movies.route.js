import express from "express";

const router = express.Router();
import { movieindex, moviecreate, movieupdate, moviedelete } from "../controller/movies.controller.js";





//C - get movies
router.get("/", movieindex);
//R -create 
router.post("/", moviecreate);

//U -update 
router.put("/:id", movieupdate);

//D -delete
router.delete("/:id", moviedelete);
export default router;

