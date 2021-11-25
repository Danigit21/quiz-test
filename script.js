/**
 * Quiz Game's to do list!
 * 
 * fix the show result in the end
 * 
 * fix the design
 * 
 * dont show the same picture/quiz more than once
 * 
 * 
 */


// dom targets
const quizContainerEl = document.querySelector('#quiz-container');
const highscoreEl = document.querySelector('#highscore');
const questionContainerEl = document.querySelector('#question');
const answerButtonsEl = document.querySelector('#answer-btns');
const answerButtons = document.querySelectorAll('#answer-btns button')
const startButtonEl = document.querySelector('#start-btn');
const resultButtonEl = document.querySelector('#result-btn');
const resetButtonEl = document.querySelector('#reset-btn')
const resultsEl = document.querySelector('#results-container')

// the quiz/questions
const students = [
	{
		"name" : "Adi Dzocaj",
		"image": "images/adi-dzocaj.jpg",
	},
	{
		"name" : "Alexander Bergquist",
		"image": "images/alexander-bergquist.jpg",
	},
	{
		"name" : "Alexander Kocman",
		"image": "images/alexander-kocman.jpg",
	},
	{
		"name" : "Benjamin Benson",
		"image": "images/benjamin-benson.jpg",
	},
	/*
	{
		"name" : "Benjamin Tsubarah",
		"image": "images/benjamin-tsubarah.jpg",
	},
	{
		"name" : "Calle Nilsson",
		"image": "images/calle-nilsson.jpg",
	},
	{
		"name" : "Chikage Takahashi Molander",
		"image": "images/chikage-takahashi-molander.jpg",
	},
	{
		"name" : "Daniel Be",
		"image": "images/daniel-be.jpg",
	},
	{
		"name" : "Daniel Carlsson",
		"image": "images/daniel-carlsson.jpg",
	},
	{
		"name" : "Elin Ahlgren",
		"image": "images/elin-ahlgren.jpg",
	},
	{
		"name" : "Emma Käck",
		"image": "images/emma-kack.jpg",
	},
	{
		"name" : "Eric Ståhl",
		"image": "images/eric-stahl.jpg",
	},
	{
		"name" : "Frans Gustavson Påsse",
		"image": "images/frans-gustavson-passe.jpg",
	},
	{
		"name" : "Glafira Veretennikova",
		"image": "images/glafira-veretennikova.jpg",
	},
	{
		"name" : "Gustaf Grönlund",
		"image": "images/gustaf-gronlund.jpg",
	},
	{
		"name" : "Hanna Håkanson",
		"image": "images/hanna-hakanson.jpg",
	},
	{
		"name" : "Heidi Sjöberg",
		"image": "images/heidi-sjoberg.jpg",
	},
	{
		"name" : "Hugo Carzborn",
		"image": "images/hugo-carzborn.jpg",
	},
	{
		"name" : "Jesper Kling",
		"image": "images/jesper-kling.jpg",
	},
	{
		"name" : "Johan Ranestam",
		"image": "images/johan-ranestam.jpg",
	},
	{
		"name" : "Johanna Bäckström",
		"image": "images/johanna-backstrom.jpg",
	},
	{
		"name" : "Johanna Jönsson",
		"image": "images/johanna-jonsson.jpg",
	},
	{
		"name" : "Jona Torsson",
		"image": "images/jona-torsson.jpg",
	},
	{
		"name" : "Josefine Ahlstedt",
		"image": "images/josefine-ahlstedt.jpg",
	},
	{
		"name" : "Julia Jespersdotter Högman",
		"image": "images/julia-jespersdotter-hogman.jpg",
	},
	{
		"name" : "Julia Nemell",
		"image": "images/julia-nemell.jpg",
	},
	{
		"name" : "Linus Lindberg",
		"image": "images/linus-lindberg.jpg",
	},
	{
		"name" : "Malin Olsson",
		"image": "images/malin-olsson.jpg",
	},
	{
		"name" : "Maria Haara-Lundhammar",
		"image": "images/maria-haara-lundhammar.jpg",
	},
	{
		"name" : "Maria Lövgren",
		"image": "images/maria-lovgren.jpg",
	},
	{
		"name" : "Nikola Dimitrijoski",
		"image": "images/nikola-dimitrijoski.jpg",
	},
	{
		"name" : "Paulina Kiendys",
		"image": "images/paulina-kiendys.jpg",
	},
	{
		"name" : "Raymond Lam",
		"image": "images/raymond-lam.jpg",
	},
	{
		"name" : "Robin Karlsson",
		"image": "images/robin-karlsson.jpg",
	},
	{
		"name" : "Sara Almqvist",
		"image": "images/sara-almqvist.jpg",
	},
	{
		"name" : "Tim Nilsson",
		"image": "images/tim-nilsson.jpg",
	},
	{
		"name" : "Tirapat Sukjit",
		"image": "images/tirapat-sukjit.jpg",
	},
	{
		"name" : "Tobias Silfverberg",
		"image": "images/tobias-silfverberg.jpg",
	},
	{
		"name" : "Wiktoria Dobrzewinska",
		"image": "images/wiktoria-dobrzewinska.jpg",
	},
	*/
];
const quiz = students

// randomize/shuffle variable
let randomizer;

// correct answer variable
let answer;

// correct answers and guesses variables
let score = 0;
let guesses = 0;

// used questions pushed to usedQuiz
let usedQuiz = [];

// shuffle function
const shuffling = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// adds/removes class hide
const hide = () => {
	startButtonEl.classList.add('hide')
	quizContainerEl.classList.remove('hide')
	resultButtonEl.classList.remove('hide')
	resetButtonEl.classList.remove('hide')
}
const show = () => {
	startButtonEl.classList.remove('hide')
	quizContainerEl.classList.add('hide')
	resultButtonEl.classList.add('hide')
	resetButtonEl.classList.add('hide')
}

// score and guesses resetter
const resetScore = () => {
	score = 0;
	guesses = 0;
}

// start the game (show the quiz)
const startGame = () => {
	hide();

	for (let i = 0; i <= quiz.length; i++) {
		
	}
	// shuffle newStudents
	shuffling(quiz);

	// set innertext to all the buttons and set up quiz image
	answerButtons.forEach((btn, i) => {
		btn.innerText = quiz[i].name;
		randomizer = Math.floor(Math.random() * 3);
		questionContainerEl.firstElementChild.setAttribute('src', quiz[randomizer].image);
		answer = quiz[randomizer]
    });

	answerButtons.forEach( (e) => {
		e.classList.remove('correct')
		e.classList.remove('wrong')
	})
}
startButtonEl.addEventListener('click', (startGame));


// answer buttons to check if button is correct or not
answerButtonsEl.addEventListener('click', e => {
	// check if target is a button
	if (e.target.tagName === 'BUTTON') {
		guesses++;

		// check if button is correct answer
		if (e.target.innerText == answer.name) {
			score++;
			e.target.classList.add('correct');
			console.log(`Correct!`);

			// filter and push away used quiz
			usedQuiz.push(answer);
			quiz.filter( (e) => {
				e !== answer
			});

			// makes the game run until no questions left
			if (usedQuiz.length <= students.length) {
				startGame();

				// show final result window + play again button after all questions
				if (usedQuiz.length === students.length) {
					resetScore()
					usedQuiz = [];
					show();
					startButtonEl.innerText = 'Play again'
					resultsEl.classList.remove('hide')
				}
			}

			// if wrong answer
		} else {
			e.target.classList.add('wrong');
			console.log(`WRONG`);
		}

		// if target is not a button
	} else {
		console.log("NOT A BUTTON");
	}
});


// reset/restart the game event
resetButtonEl.addEventListener('click', () => {
	resetScore()
	usedQuiz = [];
	show();
	startButtonEl.innerText = 'Start'
	alert('Game has been resetted!');
});

// show results (make the game end and show result container!)
const showResults = () => {
	highscoreEl.innerHTML = `Score ${score}/${quiz.length} and ${guesses} tries`
}
resultButtonEl.addEventListener('click', (showResults));
