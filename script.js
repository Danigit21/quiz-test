/**
 * 
 * 
 */

const buttonButtonEl = document.querySelector('#button-button');
const resetButtonEl = document.querySelector('#reset-button')
const answerButtonEl = document.querySelector('#answer')

answerButtonEl.addEventListener('click', e => {
    console.log('My answer')
});

buttonButtonEl.addEventListener('click', e => {
    console.log('Nothing happened');
});

resetButtonEl.addEventListener('click', e => {
    console.log('You tried to reset the game');
});