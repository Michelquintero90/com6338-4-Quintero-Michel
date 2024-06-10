document.addEventListener("DOMContentLoaded", function() {
  var words = [
    'bananas',
    'grapes',
    'carousel',
    'milkshake',
    'javascript',
    'limousine',
    'chocolate',
    'programming',
    'meatloaf',
    'ukulele',
    'mango'
  ];

  let currentWordIndex = 0;
  let currentWord = '';
  let remainingGuesses = 10;
  let wins = 0;
  let losses = 0;

  const wordToGuessElement = document.getElementById('word-to-guess');
  const previousWordElement = document.getElementById('previous-word');
  const incorrectLettersElement = document.getElementById('incorrect-letters');
  const remainingGuessesElement = document.getElementById('remaining-guesses');
  const winsElement = document.getElementById('wins');
  const lossesElement = document.getElementById('losses');

  function initializeGame() {
    currentWord = words[currentWordIndex];
    wordToGuessElement.textContent = '_'.repeat(currentWord.length);
    previousWordElement.textContent = '';
    incorrectLettersElement.textContent = '';
    remainingGuesses = 10;
    remainingGuessesElement.textContent = remainingGuesses;
  }

  function checkLetter(letter) {
    if (!currentWord.includes(letter)) {
      incorrectLettersElement.textContent += letter + ', ';
      remainingGuesses--;
      remainingGuessesElement.textContent = remainingGuesses;
      if (remainingGuesses <= 0) {
        losses++;
        lossesElement.textContent = losses;
        currentWordIndex++;
        initializeGame();
      }
    } else {
      let wordDisplay = '';
      for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === letter) {
          wordDisplay += letter;
        } else {
          wordDisplay += wordToGuessElement.textContent[i];
        }
      }
      wordToGuessElement.textContent = wordDisplay;
      if (!wordDisplay.includes('_')) {
        wins++;
        winsElement.textContent = wins;
        currentWordIndex++;
        initializeGame();
      }
    }
  }

  document.addEventListener('keydown', function(event) {
    const keyCode = event.keyCode;
    if (keyCode >= 65 && keyCode <= 90) {
      const letter = String.fromCharCode(keyCode).toLowerCase();
      checkLetter(letter);
    }
  });

  initializeGame();
});
