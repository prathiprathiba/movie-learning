import express from "express";

const app = express();
const port = 6969;

app.get("/", (req, res) => {
    res.json({ msg: "hello friends" });
});
app.listen(port, () => {
    console.log(`server running on the http://localhost:${port}`);

})