import React, { useState, useEffect, useRef } from 'react';
import { getRandomWord, isValidWord, evalGuess } from '../utils/words';
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
  const guessValues = useRef(Array(7).fill(''))

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
    setShowClue(false);
  };

  const calculateScore = (guess, target) => {
    const values = evalGuess(guess, target);
    guessValues.current[currentGuess] = values;
    const score = values.reduce((acc, val) => acc + val, 0) - hintPositions.length * 2;

    // Multiplier for correct guess
    const multiplier = guess.toLowerCase() === target? 8  - currentGuess : 1;
    const bonus = !showClue ? 5 : 0;
    return score * multiplier + bonus;
  };

  const getLetterStatus = (guessIndex, position) => {
    if (guessValues.current[guessIndex][position] === 2) {
      const status = hintPositions.includes(position) ? 'hint' : 'correct';
      return status
    }
    else if (guessValues.current[guessIndex][position] === 1) {
      return 'present';
    }
    else {
      return 'absent';
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase().replace(/[^a-z]/g, '');
    if (value.length <= 5) {
      setCurrentInput(value);
    }
  };

  const handleSubmitGuess = async () => {
    // Show loading message while validating
    const normalizedInput = currentInput.toLowerCase();
    setMessage('Validating word...');

    const isValid = await isValidWord(normalizedInput);
    if (!isValid) {
      setMessage('Not a valid word');
      return;
    }

    setCurrentWordGuess(normalizedInput);

    const newGuesses = [...guesses];
    newGuesses[currentGuess] = normalizedInput;
    setGuesses(newGuesses);

    const guessScore = calculateScore(normalizedInput, targetWord);
    const newHighScore = Math.max(score, guessScore);
    setScore(newHighScore);

    if (normalizedInput.toLowerCase() === targetWord) {
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
    if (hintsUsed >= 2) {
      setMessage('Hints exhausted');
      return;
    }  
    if (currentInput.length === 5) return;

    // Add hint to text box
    const index = currentInput.length;
    setCurrentInput(prev => prev + targetWord[currentInput.length].toUpperCase());

    if (!hintPositions.includes(index)) {
      setHintsUsed(prev => prev + 1);
      setHintPositions(prev => [...prev, index]);
      setMessage(`Hint ${hintsUsed + 1}/2: Letter ${index + 1} is "${targetWord[index].toUpperCase()}"`);
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
        <div className="menu">
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
              const status = guess ? getLetterStatus(guessIndex, letterIndex) : '';
              const isCurrentRow = guessIndex === currentGuess && gameStatus === 'playing';
              const currentLetter = isCurrentRow ? currentWordGuess[letterIndex] || '' : letter;
              const isHintPosition = isCurrentRow && hintPositions.includes(letterIndex);
              
              return (
                <div
                  key={letterIndex}
                  className={`letter-box ${status} ${isCurrentRow ? 'current' : ''} 
                    ${isHintPosition && currentLetter && currentLetter !== ' ' ? 'hint' : ''}`}
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
            <li><b>Scoring:</b> correct guess scores word score times multiplier (8 - 2 depending on
            the number of guesses used), plus a bonus of 5 points if clue is not revealed. Partial 
            guesses receive the best guess score.
            </li>
          </ul>
        </div>
      )}
      </div>
  );
};

export default WordleGame;
