# Wordle Vibes

A React-based Wordle game built with Vite, featuring a complete implementation of the popular word-guessing game. Built experimentally using "vibe coding" and human tweaked to taste. Includes features such as hints, word clues, and a scoring system. 

**Update**: With closer examination, a lot of the AI written code was muddled and buggy, as well as having built an unattractive UI. I have maybe revised 2/3 of the code now, so this is a human/AI collaboration. 

## Features

- **7 Guesses**: Players have 7 attempts to guess the correct 5-letter word
- **Color-coded Feedback**: 
  - 🟦 Blue: Letter hint in correct position (0 points)
  - 🟩 Green: Correct letter in correct position (2 points)
  - 🟨 Yellow: Correct letter in wrong position (1 point)
  - ⬜ Gray: Letter not in the word (0 points)
- **Scoring System**: Maximum 10 points per word (2 points × 5 letters)
- **Hint System**: Get hints that reveal correct letters
- **Word Clue**: Option to reveal a terse, wordcross style, clue (5 point bonus if one resist
- **Word Validation**: Only accepts valid 5-letter words from the dictionary
- **New Game**: Start fresh with a new random word
- **Responsive Design**: Works on desktop and mobile devices

## Game Rules

1. Guess the 5-letter word in 7 tries or fewer
2. Each guess must be a valid 5-letter word
3. After each guess, letters are color-coded to show:
   - Blue: Letter is a hint in the correct position
   - Green: Letter is in the word and in the correct position
   - Yellow: Letter is in the word but in the wrong position
   - Gray: Letter is not in the word at all
4. Use the hint button to reveal one correct letter
5. Can reveal a word clue
6. Score points based on correct letters and positions

## Installation & Setup

1. **Clone or download the project**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **Open your browser** and navigate to `http://localhost:5173/`

## Project Structure

```
wordle-game/
├── src/
│   ├── components/
│   │   ├── WordleGame.jsx      # Main game component
│   │   └── WordleGame.css      # Game styling
│   ├── utils/
│   │   └── words.js            # Word utilities and dictionary
│   ├── App.jsx                 # Root component
│   ├── App.css                 # Global styles
│   ├── main.jsx               # Entry point
│   └── words.txt              # Dictionary of 2000+ words
├── public/
├── package.json
└── README.md
```

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **CSS3**: Custom styling with animations and responsive design
- **JavaScript ES6+**: Modern JavaScript features

## Game Components

### WordleGame.jsx
The main game component that handles:
- Game state management
- Word validation and scoring
- User input handling
- Game logic (win/lose conditions)
- Hint functionality

### WordleGame.css
Comprehensive styling including:
- Game board layout
- Color-coded letter boxes
- Responsive design for mobile
- Animations and transitions
- Button and input styling

### words.js
Utility functions for:
- Loading the word dictionary
- Getting random words
- Validating user input

## How to Play

1. **Start**: The game begins with a random 5-letter word selected from over 2000 words
2. **Guess**: Type your 5-letter word guess in the input field
3. **Submit**: Press Enter or click "Submit Guess"
4. **Feedback**: Letters will be colored based on their correctness
5. **Continue**: Use the feedback to make better guesses
6. **Hint**: Click "Get Hint" if you need help (reveals one correct letter)
7. **Win/Lose**: Win by guessing correctly or lose after 7 incorrect guesses
8. **New Game**: Click "New Game" to start over with a new word
9. **Word Clue**: Get a wordcross type sentence word clue

## Scoring System

- **Correct Position (Green)**: 2 points per letter
- **Correct Letter, Wrong Position (Yellow)**: 1 point per letter
- **Letter Hints**: 0 points per letter
- **Incorrect Letter (Gray)**: 0 points
- **Multiplier**: Score is multiplied if the word is guessed succesfully. The multiplier depends
on the number of guesses used, with 8 being guessed in one try, and decreasing
progressively to 2 if guessed in the last try.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Customization

You can easily customize the game by:
- Modifying the word list in `src/words.txt`
- Adjusting colors and styling in `WordleGame.css`
- Changing game rules (number of guesses, scoring) in `WordleGame.jsx`
- Adding new features like statistics, themes, etc.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is open source and available under the MIT License.
