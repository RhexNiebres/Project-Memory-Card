import { useState } from "react";
import Cards from "./components/Cards";
import Scores from "./components/Scores";
import './styles/App.css'

const getRandomNumber = () => Math.floor(Math.random() * 150);

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generatePokemonList = () => {
  return Array.from({ length: 10 }, () => ({
    id: getRandomNumber(),
    clicked: false,
  }));
};

function App() {
  const [pokemons, setPokemons] = useState(generatePokemonList());
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleCardClick = (index) => {
    setPokemons((prevPokemons) => {
      const newPokemons = [...prevPokemons];
      if (newPokemons[index].clicked) {
        setBestScore((prevBestScore) => Math.max(prevBestScore, score));
        setScore(0); // Reset score
        return generatePokemonList(); // Generate new set of Pokémon
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
