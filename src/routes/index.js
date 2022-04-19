import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
	res.render("index", { face: "ಠωಠ", title: "Node Express Boilerplate" });
});

export default router;
