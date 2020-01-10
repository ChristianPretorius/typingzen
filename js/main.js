window.addEventListener('load', init);

// localStorage for highscore

// Globals

// Available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
};

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// Dom Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'chivalrous',
  'oil',
  'lewd',
  'sprout',
  'introduce',
  'measure',
  'truthful',
  'synonymous',
  'frightening',
  'toe',
  'odd',
  'auspicious',
  'makeshift',
  'receptive',
  'scribble',
  'obey',
  'wild',
  'dolls',
  'rotten',
  'blood',
  'play',
  'cry',
  'behave',
  'ruin',
  'shock',
  'strip',
  'object',
  'hobbies',
  'amusement',
  'race',
  'friends',
  'correct',
  'poor',
  'humorous',
  'pushy',
  'quill',
  'pies',
  'frightened',
  'obeisant',
  'disagree',
  'stone',
  'miss',
  'incandescent',
  'wash',
  'clam',
  'ludicrous',
  'grotesque',
  'popcorn',
  'tow',
  'stove',
  'decorate',
  'picayune',
  'suppose',
  'melodic',
  'form',
  'deliver',
  'last',
  'right',
  'endurable',
  'care',
  'ball',
  'redundant',
  'kneel',
  'treat',
  'top',
  'overconfident',
  'proud',
  'descriptive',
  'vacuous',
  'stiff',
  'mellow',
  'coast'
];

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;

  // Initialize time on screen to correct value
  time = currentLevel + 1;

  // Load word from array
  showWord(words);

  // Start matching on word input
  wordInput.addEventListener('input', startMatch);

  // Call countdown every second
  setInterval(countdown, 1000);

  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel - Math.min(Math.max(Math.floor(score / 10), 0), 2);
    seconds.innerHTML =
      currentLevel - Math.min(Math.max(Math.floor(score / 10), 0), 2);
    timeDisplay.innerHTML = Math.min(time, 5);
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // If score is negative, display 0, else show score
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
    seconds.innerHTML =
      currentLevel - Math.min(Math.max(Math.floor(score / 10), 0), 2);
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  return wordInput.value === currentWord.innerHTML;
}

// Pick and show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);

  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement Time
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
    currentWord.innerHTML = 'TypingZen';
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    score = -1;
  }
}
