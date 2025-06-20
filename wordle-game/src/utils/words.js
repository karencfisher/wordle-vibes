import wordsText from '../words.txt?raw';

// Parse the words from the text file
export const WORDS = wordsText.trim().split('\n').map(word => word.trim().toLowerCase());

// Get a random word from the list
export const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  console.log(WORDS[randomIndex]);
  return WORDS[randomIndex];
};

// Check if a word is valid English word using dictionary API
const checkDictionaryAPI = async (word) => {
  try {
    const response = await fetch(`http://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`);
    return response.status === 200;
  } catch (error) {
    console.error('Dictionary API error:', error);
    return false;
  }
};

// Check if a word is valid (exists in our word list OR is a valid English word)
export const isValidWord = async (word) => {
  const normalizedWord = word.toLowerCase();
  
  // First check: must be exactly 5 letters
  if (normalizedWord.length !== 5) {
    return false;
  }
  
  // Second check: if it's in our word list, it's valid
  if (WORDS.includes(normalizedWord)) {
    return true;
  }
  
  // Third check: check if it's a valid English word via dictionary API
  return await checkDictionaryAPI(normalizedWord);
};
