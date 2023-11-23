const router = require("express").Router();
const {
	getQuestionPaper,
	postRequirement,
	home,
} = require("../controllers/questions.js");
router.get("/", home);

router.post("/requirement", postRequirement);
router.get("/question-paper", getQuestionPaper);

module.exports = router;
