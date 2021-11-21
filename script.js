const quizContainerEl = document.querySelector('#quiz-container');
const highscoreEl = document.querySelector('#highscore');
const questionContainerEl = document.querySelector('#question');
const answerButtonsEl = document.querySelector('#answer-btns');
const startButtonEl = document.querySelector('#start-btn');
const resultButtonEl = document.querySelector('#result-btn');
const resetButtonEl = document.querySelector('#reset-btn')

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
	/*
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
const newStudents = students

let answers = [];
let score = 0;


// Functions

// shuffle newstudents array
const randomizer = () => Math.floor(Math.random() * newStudents.length);
const getRandom = () => newStudents[randomizer()];
const currentQuiz = getRandom(answers)

// push the shuffled array to answers
const shuffling = () => {
	for (let i = 0; i < students.length; i++) {
		answers.push(getRandom(newStudents))
	}
}

const startGame = () => {
	startButtonEl.classList.add('hide')
	quizContainerEl.classList.remove('hide')
	resultButtonEl.classList.remove('hide')
	resetButtonEl.classList.remove('hide')
	shuffling();

	// filter out duplicates from answers array
	const filtering = answers.filter((answer, index) => {
		return answers.indexOf(answer) === index;
	});
	// target all filtered arrays name
	const mapping = filtering.map(answer => answer.name)

	// set innertext to all the buttons
	let answerButtons = document.querySelectorAll('#answer-btns button')
	answerButtons.forEach((btn, i) => {
        btn.innerText = mapping[i]
		questionContainerEl.firstElementChild.setAttribute('src', answers[i].image);
    });

	console.log(mapping)
}

// show results BUT NEEDS TO BE FIXED!!
const showResults = () => {
	highscoreEl.innerHTML = `Score 1/${newStudents.length}`
}


// Event listener
startButtonEl.addEventListener('click', (startGame));
resultButtonEl.addEventListener('click', (showResults));

// restart the game BUT NEEDS TO BE FIXED!!
resetButtonEl.addEventListener('click', () => {
	startGame(currentQuiz);
	console.log('Game has been resetted')
})

// answer by clicking on the buttons, cannot get the correct result AND NEEDS TO BE FIXED!!
answerButtonsEl.addEventListener('click', e => {
	if (e.target.value == answers.name) {
		score++;
        console.log(`Correct!`)

    } else {
		console.log(`WRONG`)
    }
});


/**
 * to do list!
 * 
 * make the shuffle better, correct answer appear at same spot plenty of times
 * 
 * fix the answer button so that you can answer correct and move on to next question
 * 
 * fix the result, so that it updates automatically and make it toogleable
 * 
 * fix the reset, so it resets the game to 0 and shows a new question
 */