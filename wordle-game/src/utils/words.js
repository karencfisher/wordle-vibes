import wordsClues from './word_clues.js';

// Get a random word from the list
export const getRandomWord = (test = '') => {
  if (test) return {'word': test, 'clue': '\"You know what to do.\"'}
  const randomIndex = Math.floor(Math.random() * wordsClues.length);
  console.log(wordsClues[randomIndex]);
  return wordsClues[randomIndex];
};

// Check if a word is valid English word using dictionary API
const checkDictionaryAPI = async (word) => {
  try {
    const response = await fetch(`http://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    return response.status === 200;
  } catch (error) {
    console.error('Dictionary API error:', error);
    return false;
  }
};

// Check if a word is valid (exists in our word list OR is a valid English word)
export const isValidWord = async (word) => {
  // First check: must be exactly 5 letters
  if (word.length !== 5) {
    return false;
  }
  
  // Second check: if it's in our word list, it's valid
  wordsClues.forEach((item) => {
    if (item.word.toLowerCase() === word) {
      return true;
    }
  });
  
  // Third check: check if it's a valid English word via dictionary API
  return await checkDictionaryAPI(word);
};

// Get letter frequency in a word
export const getLetterFrequency = (word) => { 
  const frequency = {};
  for (const letter of word) {
    frequency[letter] = (frequency[letter] || 0) + 1;
  }
  return frequency;
}

// Score a guess against the target word
export const evalGuess = (guess, target) => {
  const targetArray = target.toLowerCase().split('');
  const guessFrequency = getLetterFrequency(target);
  const letterValues = [0, 0, 0, 0, 0];
  
  // find letters in place
  for (let i = 0; i < guess.length; i++) {
    if (guessFrequency[guess[i]] > 0 && guess[i] === targetArray[i]) {
      letterValues[i] = 2;
      guessFrequency[guess[i]] -= 1;
    }
  }

  // find letters not in place
  for (let i = 0; i < guess.length; i++) {
    if (guessFrequency[guess[i]] > 0 && targetArray.includes(guess[i])) {
      letterValues[i] = !letterValues[i] ? 1 : 2;
      guessFrequency[guess[i]] -= 1;
    }
  }

  return letterValues;
};
