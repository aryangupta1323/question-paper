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
	{
		wording: "What is the speed of light",
		subject: "Physics",
		topic: "Waves",
		difficulty: "Easy",
		marks: 13,
	},
	{
		wording: "Find area of a circle",
		subject: "Maths",
		topic: "Geometry",
		difficulty: "Hard",
		marks: 6,
	},
	{
		wording: "What is the speed of light",
		subject: "Physics",
		topic: "Waves",
		difficulty: "Medium",
		marks: 8,
	},
	{
		wording: "Find area of a circle",
		subject: "Maths",
		topic: "Geometry",
		difficulty: "Easy",
		marks: 3,
	},
	{
		wording: "Chemical formula of water",
		subject: "Chemistry",
		topic: "Molecules",
		difficulty: "Medium",
		marks: 7,
	},
	{
		wording: "Solve x^2 + 4 = 0",
		subject: "Maths",
		topic: "Algebra",
		difficulty: "Hard",
		marks: 9,
	},
	{
		wording: "What is the speed of sound",
		subject: "Physics",
		topic: "Waves",
		difficulty: "Easy",
		marks: 4,
	},
	{
		wording: "Balance the equation: H2 + O2 = H2O",
		subject: "Chemistry",
		topic: "Chemical Reactions",
		difficulty: "Medium",
		marks: 10,
	},
	{
		wording: "Solve 2x - 5 = 0",
		subject: "Maths",
		topic: "Algebra",
		difficulty: "Hard",
		marks: 6,
	},
	{
		wording: "Chemical formula of carbon dioxide",
		subject: "Chemistry",
		topic: "Molecules",
		difficulty: "Easy",
		marks: 8,
	},
	{
		wording: "What is the capital of France",
		subject: "Geography",
		topic: "Countries",
		difficulty: "Medium",
		marks: 7,
	},
	{
		wording: "Find the derivative of sin(x)",
		subject: "Maths",
		topic: "Calculus",
		difficulty: "Hard",
		marks: 9,
	},
	{
		wording: "What is the capital of Japan",
		subject: "Geography",
		topic: "Countries",
		difficulty: "Easy",
		marks: 5,
	},
	{
		wording: "Chemical formula of methane",
		subject: "Chemistry",
		topic: "Molecules",
		difficulty: "Medium",
		marks: 8,
	},
	{
		wording: "Solve 3x + 7 = 0",
		subject: "Maths",
		topic: "Algebra",
		difficulty: "Hard",
		marks: 6,
	},
	{
		wording: "What is the capital of Brazil",
		subject: "Geography",
		topic: "Countries",
		difficulty: "Easy",
		marks: 4,
	},
	{
		wording: "Chemical formula of ethanol",
		subject: "Chemistry",
		topic: "Molecules",
		difficulty: "Medium",
		marks: 7,
	},
	{
		wording: "Solve 4x - 3 = 0",
		subject: "Maths",
		topic: "Algebra",
		difficulty: "Hard",
		marks: 9,
	},
	{
		wording: "What is the capital of India",
		subject: "Geography",
		topic: "Countries",
		difficulty: "Easy",
		marks: 5,
	},
	{
		wording: "Chemical formula of sodium chloride",
		subject: "Chemistry",
		topic: "Molecules",
		difficulty: "Medium",
		marks: 8,
	},
	{
		wording: "Solve 5x + 2 = 0",
		subject: "Maths",
		topic: "Algebra",
		difficulty: "Hard",
		marks: 6,
	},
	{
		wording: "What is the capital of China",
		subject: "Geography",
		topic: "Countries",
		difficulty: "Easy",
		marks: 4,
	},
	{
		wording: "Chemical formula of sulfuric acid",
		subject: "Chemistry",
		topic: "Acids",
		difficulty: "Medium",
		marks: 7,
	},
	{
		wording: "Solve 6x - 1 = 0",
		subject: "Maths",
		topic: "Algebra",
		difficulty: "Hard",
		marks: 9,
	},
	{
		wording: "What is the capital of Australia",
		subject: "Geography",
		topic: "Countries",
		difficulty: "Easy",
		marks: 5,
	},
	{
		wording: "Chemical formula of ammonia",
		subject: "Chemistry",
		topic: "Molecules",
		difficulty: "Medium",
		marks: 8,
	},
	{
		wording: "Solve 7x + 4 = 0",
		subject: "Maths",
		topic: "Algebra",
		difficulty: "Hard",
		marks: 6,
	},
	{
		wording: "What is the capital of Russia",
		subject: "Geography",
		topic: "Countries",
		difficulty: "Easy",
		marks: 4,
	},
	{
		wording: "Chemical formula of hydrochloric acid",
		subject: "Chemistry",
		topic: "Acids",
		difficulty: "Medium",
		marks: 7,
	},
	{
		wording: "Solve 8x - 7 = 0",
		subject: "Maths",
		topic: "Algebra",
		difficulty: "Hard",
		marks: 9,
	},
	{
		wording: "What is the capital of Germany",
		subject: "Geography",
		topic: "Countries",
		difficulty: "Easy",
		marks: 5,
	},
	{
		wording: "Chemical formula of potassium permanganate",
		subject: "Chemistry",
		topic: "Chemicals",
		difficulty: "Medium",
		marks: 8,
	},
	{
		wording: "Solve 9x + 2 = 0",
		subject: "Maths",
		topic: "Algebra",
		difficulty: "Hard",
		marks: 6,
	},
	{
		wording: "What is the capital of South Africa",
		subject: "Geography",
		topic: "Countries",
		difficulty: "Easy",
		marks: 4,
	},
	{
		wording: "Chemical formula of carbon monoxide",
		subject: "Chemistry",
		topic: "Molecules",
		difficulty: "Medium",
		marks: 7,
	},
	{
		wording: "Solve 10x - 3 = 0",
		subject: "Maths",
		topic: "Algebra",
		difficulty: "Hard",
		marks: 9,
	},
	{
		wording: "What is the capital of Canada",
		subject: "Geography",
		topic: "Countries",
		difficulty: "Easy",
		marks: 5,
	},
	{
		wording: "Chemical formula of nitric acid",
		subject: "Chemistry",
		topic: "Acids",
		difficulty: "Medium",
		marks: 8,
	},
	{
		wording: "Solve 11x + 4 = 0",
		subject: "Maths",
		topic: "Algebra",
		difficulty: "Hard",
		marks: 6,
	},
	{
		wording: "What is the capital of Mexico",
		subject: "Geography",
		topic: "Countries",
		difficulty: "Easy",
		marks: 4,
	},
	{
		wording: "Chemical formula of sodium hydroxide",
		subject: "Chemistry",
		topic: "Bases",
		difficulty: "Medium",
		marks: 7,
	},
	{
		wording: "Solve 12x - 1 = 0",
		subject: "Maths",
		topic: "Algebra",
		difficulty: "Hard",
		marks: 9,
	},
	{
		wording: "What is the capital of Argentina",
		subject: "Geography",
		topic: "Countries",
		difficulty: "Easy",
		marks: 5,
	},
	{
		wording: "Chemical formula of acetic acid",
		subject: "Chemistry",
		topic: "Acids",
		difficulty: "Medium",
		marks: 8,
	},
	{
		wording: "Solve 13x + 2 = 0",
		subject: "Maths",
		topic: "Algebra",
		difficulty: "Hard",
		marks: 6,
	},
	{
		wording: "What is the capital of Spain",
		subject: "Geography",
		topic: "Countries",
		difficulty: "Easy",
		marks: 4,
	},
	{
		wording: "Chemical formula of calcium carbonate",
		subject: "Chemistry",
		topic: "Compounds",
		difficulty: "Medium",
		marks: 7,
	},
	{
		wording: "Solve 14x - 3 = 0",
		subject: "Maths",
		topic: "Algebra",
		difficulty: "Hard",
		marks: 9,
	},
	{
		wording: "What is the capital of Italy",
		subject: "Geography",
		topic: "Countries",
		difficulty: "Easy",
		marks: 5,
	},
	{
		wording: "Chemical formula of hydrogen peroxide",
		subject: "Chemistry",
		topic: "Compounds",
		difficulty: "Medium",
		marks: 8,
	},
	{
		wording: "Solve 15x + 4 = 0",
		subject: "Maths",
		topic: "Algebra",
		difficulty: "Hard",
		marks: 6,
	},
	{
		wording: "What is the capital of Egypt",
		subject: "Geography",
		topic: "Countries",
		difficulty: "Easy",
		marks: 4,
	},
];

module.exports = questions;