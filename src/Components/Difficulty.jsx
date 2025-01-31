import { useState } from "react";
import '../styles/Difficulty.css'
export default function DifficultySelector({ onDifficultyChange}){
    const [selectedDifficulty, setSelectedDifficulty] = useState("easy");

    const handleDifficultyChange = (event) =>{
        const difficulty = event.target.value;
        setSelectedDifficulty(difficulty);
        onDifficultyChange(difficulty);
    };
    return(
        <div className="difficulty">
            <h3>Select difficulty</h3>
            <select value={selectedDifficulty} onChange={handleDifficultyChange}>
            <option value="easy"> Easy (6 Pokémon)</option>
            <option value="medium"> Medium (9 Pokémon)</option>
            <option value="hard"> Hard (12 Pokémon)</option>
            </select>
        </div>
    );
}