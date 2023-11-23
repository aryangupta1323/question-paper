# Question Paper Generator

You can add your set of questions and it will generate a unique question paper based on your requirements.

## Libraries Used

- **Express**
- **Ejs** -> Used as a templating engine
- **connect-flash** -> Used for displaying error messages
- **express-session** -> for establishing sessions

## Usage/Examples

- Add your set of questions in questionStore.js file.

```javascript
const questions = [
	{
		wording: "What is the speed of light",
		subject: "Physics",
		topic: "Waves",
		difficulty: "Easy",
		marks: 5,
	},
	{
		wording: "What is the speed of light",
		subject: "Chemistry",
		topic: "Chemicals",
		difficulty: "Medium",
		marks: 10,
	},
];
```

- At the home page you can specify the marks and the number of questions of each type(difficulty) you want.

- After you submit your requirement a question paper is generated.

## Screenshots

- Home Page
  ![Home](https://i.postimg.cc/Qd5gZNHs/home-page.png)
- Question Paper
  ![Question Paper](https://i.postimg.cc/3xymQcPy/question-Paper.png)
