import React, { useState, useEffect, useRef } from 'react';
import { getRandomWord, isValidWord } from '../utils/words';
import './WordleGame.css';

const WordleGame = () => {
  const [targetWord, setTargetWord] = useState('');
  const [wordClue, setWordClue] = useState('');
  const [showClue, setShowClue] = useState(false);
  const [guesses, setGuesses] = useState(Array(7).fill(''));
  const [currentGuess, setCurrentGuess] = useState(0);
  const [currentInput, setCurrentInput] = useState('');
  const [currentWordGuess, setCurrentWordGuess] = useState('');
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'
  const [score, setScore] = useState(0);
  const [sessionScore, setSessionScore] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [hintPositions, setHintPositions] = useState([]);
  const [message, setMessage] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [infoStatus, setInfoStatus] = useState('Show');

  const inputRef = useRef(null);

  // Initialize game
  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const newWord = getRandomWord();
    setTargetWord(newWord.word);
    setWordClue(newWord.clue);
    setGuesses(Array(7).fill(''));
    setCurrentGuess(0);
    setCurrentInput('');
    setCurrentWordGuess('');
    setGameStatus('playing');
    setScore(0);
    setHintsUsed(0);
    setHintPositions([]);
    setMessage('');
  };

  const calculateScore = (guess, target) => {
    let score = 0;
    const targetArray = target.split('');
    const guessArray = guess.split('');
    
    // Track which letters in target have been matched
    const targetUsed = Array(5).fill(false);
    const guessUsed = Array(5).fill(false);
    
    // First pass: exact matches (green)
    for (let i = 0; i < 5; i++) {
      if (guessArray[i] === targetArray[i]) {
        // hints don't count!
        score += hintPositions.includes(i) ? 0: 2;
        targetUsed[i] = true;
        guessUsed[i] = true;
      }
    }
    
    // Second pass: letter exists but wrong position (yellow)
    for (let i = 0; i < 5; i++) {
      if (!guessUsed[i]) {
        for (let j = 0; j < 5; j++) {
          if (!targetUsed[j] && guessArray[i] === targetArray[j]) {
            score += 1;
            targetUsed[j] = true;
            break;
          }
        }
      }
    }

    // Multiplier for correct guess
    const multiplier = guess === target? 8  - currentGuess : 1;
    
    return score * multiplier;
  };

  const getLetterStatus = (guess, target, position) => {
    if (guess[position] === target[position]) {
      const status = hintPositions.includes(position) ? 'hint' : 'correct';
      return status
    }
    
    // Check if letter exists elsewhere in target
    const targetArray = target.split('');
    const guessArray = guess.split('');
    
    // Count occurrences and matches
    let targetCount = 0;
    let correctMatches = 0;
    let yellowMatches = 0;
    
    // Count total occurrences of this letter in target
    for (let i = 0; i < 5; i++) {
      if (targetArray[i] === guess[position]) {
        targetCount++;
      }
    }
    
    // Count correct matches (green) of this letter before current position
    for (let i = 0; i < position; i++) {
      if (guessArray[i] === guess[position] && guessArray[i] === targetArray[i]) {
        correctMatches++;
      }
    }
    
    // Count yellow matches of this letter before current position
    for (let i = 0; i < position; i++) {
      if (guessArray[i] === guess[position] && guessArray[i] !== targetArray[i] && targetArray.includes(guessArray[i])) {
        yellowMatches++;
      }
    }
    
    // If we haven't exceeded the count, it's yellow
    if (correctMatches + yellowMatches < targetCount && targetArray.includes(guess[position])) {
      return 'present'; // Yellow
    }
    
    return 'absent'; // Gray
  };

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase().replace(/[^a-z]/g, '');
    if (value.length <= 5) {
      setCurrentInput(value);
    }
  };

  const handleSubmitGuess = async () => {
    if (currentInput.length !== 5) {
      setMessage('Please enter a 5-letter word');
      return;
    }

    // Show loading message while validating
    setMessage('Validating word...');

    const isValid = await isValidWord(currentInput);
    if (!isValid) {
      setMessage('Not a valid word');
      return;
    }

    setCurrentWordGuess(currentInput);

    const newGuesses = [...guesses];
    newGuesses[currentGuess] = currentInput;
    setGuesses(newGuesses);

    const guessScore = calculateScore(currentInput, targetWord);
    const newHighScore = Math.max(score, guessScore);
    setScore(newHighScore);

    if (currentInput === targetWord) {
      setGameStatus('won');
      setSessionScore(prevSession => prevSession + newHighScore);
      setMessage(`Congratulations! You won with a score of ${newHighScore}!`);
    } else if (currentGuess === 6) {
      setGameStatus('lost');
      setSessionScore(prevSession => prevSession + newHighScore);
      setMessage(`Game over! The word was "${targetWord.toUpperCase()}". Final score: ${newHighScore}`);
    } else {
      setCurrentGuess(currentGuess + 1);

      let hints = '';
      for (let i = 0; i < 5; i++) {
        hints += hintPositions.includes(i) ? targetWord[i] : ' ';
      }
      setCurrentWordGuess(hints);
      setCurrentInput('');
      setMessage('');
    }
  };

  const handleHint = () => {
    if (gameStatus !== 'playing' || hintsUsed >= 2) return;
    
    const targetArray = targetWord.split('');
    
    // Find a position that hasn't been hinted yet and isn't already correct
    for (let i = 0; i < 5; i++) {
      if (!hintPositions.includes(i) && (!currentInput[i] || currentInput[i] !== targetArray[i])) {
        let prefix = '';
        if (i > 0) {
          prefix = !currentWordGuess.substring(0, i) ? ' '.repeat(i): currentWordGuess.substring(0, i) ;
        }
        const newInput = prefix + targetArray[i] + currentWordGuess.substring(i + 1);
        setCurrentWordGuess(newInput.padEnd(5, '').substring(0, 5));
        setHintsUsed(prev => prev + 1);
        setHintPositions(prev => [...prev, i]);
        setMessage(`Hint ${hintsUsed + 1}/2: Letter ${i + 1} is "${targetArray[i].toUpperCase()}"`);
        return;
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmitGuess();
    }
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  useEffect(() => {
    const newStatus = showInfo ? "Hide" : "Show";
    setInfoStatus(newStatus);
  }, [showInfo]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentInput, currentWordGuess]);

    useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setMessage('');
      }, 3000);
  
      return () => clearTimeout(timeout); // Cleanup the timeout
    }
  }, [message]);

  return (
    <div className="wordle-game">
      <header>
        <div>
          Wordle Vibes
        </div>
        <div class="menu">
          <button onClick={toggleInfo}>{infoStatus} Info</button>
          <button onClick={startNewGame}>New Game</button>
        </div>
      </header>
      <div className="game-info">
        <div className="score">Word Score: {score}</div>
        <div className="session-score">Session Score: {sessionScore}</div>
        <div className="guess-count">Guess: {currentGuess + 1}/7</div>
        <div className="hints-remaining">Hints: {2 - hintsUsed}/2</div>
      </div>

      <div className="game-board">
        {guesses.map((guess, guessIndex) => (
          <div key={guessIndex} className="guess-row">
            {Array(5).fill('').map((_, letterIndex) => {
              const letter = guess[letterIndex] || '';
              const status = guess ? getLetterStatus(guess, targetWord, letterIndex) : '';
              const isCurrentRow = guessIndex === currentGuess && gameStatus === 'playing';
              const currentLetter = isCurrentRow ? currentWordGuess[letterIndex] || '' : letter;
              const isHintPosition = isCurrentRow && hintPositions.includes(letterIndex);
              
              return (
                <div
                  key={letterIndex}
                  className={`letter-box ${status} ${isCurrentRow ? 'current' : ''} ${isHintPosition && currentLetter ? 'hint' : ''}`}
                >
                  {currentLetter.toUpperCase()}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      
      <div className={`game-controls ${gameStatus !== 'playing' ? 'disabled' : ''}`}>
        <div className="clue" onClick={() => setShowClue(true)}>
          {showClue ? wordClue : 'Click To Reveal Clue' }
        </div>
        <input
          type="text"
          ref={inputRef}
          value={currentInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter your guess..."
          maxLength={5}
          className="guess-input"
        />
        <div className="button-group">
          <button onClick={handleSubmitGuess} disabled={currentInput.length !== 5}>
            Submit Guess
          </button>
          <button onClick={handleHint} disabled={hintsUsed >= 2}>
            Get Hint ({2 - hintsUsed} left)
          </button>
        </div>
      </div>

      {message && <div className="message">{message}</div>}

      {showInfo && (
        <div className="game-rules">
          <h3>How to Play:</h3>
          <ul>
            <li>Guess the 5-letter word in 7 tries. You can get up to two hints.</li>
            <li><span className="hint-demo">Blue</span> = Letter hint in correct position (0 points)</li>
            <li><span className="correct-demo">Green</span> = Correct letter in correct position (2 points)</li>
            <li><span className="present-demo">Yellow</span> = Correct letter in wrong position (1 point)</li>
            <li><span className="absent-demo">Gray</span> = Letter not in word (0 points)</li>
            <li><b>Scoring:</b> correct guess scores word score times multiplier (higher the fewer
              guesses). Partial guess receives the best guessed word score.
            </li>
          </ul>
        </div>
      )}
      </div>
  );
};

export default WordleGame;
