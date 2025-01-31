import { useState } from "react";
import Cards from "./Components/Cards.jsx";
import Scores from './Components/Scores.jsx';
import DifficultySelector from './Components/Difficulty.jsx';
import './styles/App.css'

const getRandomNumber = () => Math.floor(Math.random() * 151);

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generatePokemonList = (difficulty) => {
  let length;
  switch(difficulty){
    case "easy":
      length = 6
      break;
      case "medium":
      length = 9
      break;
      case "hard":
      length = 12
      break;
      default:
      length = 6
  }

  return Array.from({ length }, () => ({ 
    id: getRandomNumber(),
    clicked: false,
  }));
};

function App() {
  const [difficulty, setDifficulty] = useState("easy");
  const [pokemons, setPokemons] = useState(generatePokemonList("easy"));
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
    setPokemons(generatePokemonList(newDifficulty));
  };

  const handleCardClick = (index) => {
    setPokemons((prevPokemons) => {
      const newPokemons = [...prevPokemons];

      if (newPokemons[index].clicked) {
        setBestScore((prevBestScore) => Math.max(prevBestScore, score));
        setScore(0); // Reset score
        return generatePokemonList(difficulty); // Generate new set of Pokémon based on difficulty
      } else {
        newPokemons[index].clicked = true;
        setScore((prevScore) => prevScore + 1);
        return newPokemons;
      }
    });
  };

  const handleShuffle = () => {
    setPokemons((prevPokemons) => shuffleArray([...prevPokemons]));
  };

  return (
    <>
      <Scores score={score} bestScore={bestScore} />
      <DifficultySelector onDifficultyChange={handleDifficultyChange}/>
      <div className="card-container">
        {pokemons.map((pokemon, index) => (
          <Cards
            key={index}
            pokemon={pokemon.id}
            onClick={() => {
              handleCardClick(index);
              handleShuffle();
            }}
          />
        ))}
      </div>
    </>
  );
}

export default App;
