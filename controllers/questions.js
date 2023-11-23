const questions = require("../questionStore.js");
let fa = [];
exports.home = (req, res, next) => {
	fa = [];
	let errTotal = req.flash("total");
	let errEasy = req.flash("easy");
	let errMedium = req.flash("medium");
	let errHard = req.flash("hard");
	let messages = [];
	if (errTotal.length > 0) messages.push(errTotal);
	if (errEasy.length > 0) messages.push(errEasy);
	if (errMedium.length > 0) messages.push(errMedium);
	if (errHard.length > 0) messages.push(errHard);
	res.render("req", { error: messages });
};
exports.postRequirement = (req, res, next) => {
	console.log(req.body);
	const { easy: e, medium: m, hard: h, marks: marks } = req.body;
	if (parseInt(e) + parseInt(m) + parseInt(h) !== 100) {
		req.flash("total", "Percentage Sum must be 100%");
		res.redirect("/");
		return;
	}
	let easy = (e * marks) / 100;
	let medium = (m * marks) / 100;
	let hard = (h * marks) / 100;
	console.log(easy, medium, hard);
	let easyQuestions = questions.filter((question) => {
		return question.difficulty == "Easy";
	});
	let mediumQuestions = questions.filter((question) => {
		return question.difficulty == "Medium";
	});
	let hardQuestions = questions.filter((question) => {
		return question.difficulty == "Hard";
	});
	let totalMarksEasy = 0;
	let totalMarksMedium = 0;
	let totalMarksHard = 0;
	for (let i = 0; i < easyQuestions.length; i++)
		totalMarksEasy += easyQuestions[i].marks;
	for (let i = 0; i < mediumQuestions.length; i++)
		totalMarksMedium += mediumQuestions[i].marks;
	for (let i = 0; i < hardQuestions.length; i++)
		totalMarksHard += hardQuestions[i].marks;
	if (totalMarksEasy < easy) {
		req.flash("easy", "These number of easy questions doesn't exit");
		res.redirect("/");
		return;
	} else if (totalMarksMedium < medium) {
		req.flash("medium", "These number of medium questions doesn't exit");
		res.redirect("/");
		return;
	} else if (totalMarksHard < hard) {
		req.flash("hard", "These number of hard questions doesn't exit");
		res.redirect("/");
		return;
	}
	while (easyQuestions.length > 0 && easy > 0) {
		let randomIndex = Math.floor(Math.random() * easyQuestions.length);
		let randomElement = easyQuestions.splice(randomIndex, 1)[0];
		easy = easy - randomElement.marks;
		fa.push(randomElement);
	}
	while (mediumQuestions.length > 0 && medium > 0) {
		let randomIndex = Math.floor(Math.random() * mediumQuestions.length);
		let randomElement = mediumQuestions.splice(randomIndex, 1)[0];
		medium = medium - randomElement.marks;
		fa.push(randomElement);
	}
	while (hardQuestions.length > 0 && hard > 0) {
		let randomIndex = Math.floor(Math.random() * hardQuestions.length);
		let randomElement = hardQuestions.splice(randomIndex, 1)[0];
		hard = hard - randomElement.marks;
		fa.push(randomElement);
	}
	res.redirect("/question-paper");
};

exports.getQuestionPaper = (req, res, next) => {
	console.log(fa.length);
	res.render("questions", {
		qArray: fa,
	});
};
