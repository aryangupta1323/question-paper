const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const flash = require("connect-flash");
const session = require("express-session");
const questionsRouter = require("./routers/questions.js");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: "Shh, its a secret!" }));
app.use(flash());

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(questionsRouter);

app.listen(3000, () => {
	console.log("App is up and running");
	// console.log(questions);
});
