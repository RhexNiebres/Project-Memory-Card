import '../styles/Scores.css'
export default function Scores({ score, bestScore }) {
    return (
        <>
            <header>
                <nav>
                    <h1>Pokémon Memory Quest</h1>
                    <div className="scoreBoard-container">
                        <p>Your Score: {score}</p>
                        <p>Best Score: {bestScore}</p>
                    </div>
                </nav>
            </header>
            <section>
                <h2>
                Gotta catch `em all!
                </h2>
                <p>
                Dont click on the same card twice!
                </p>
            </section>
        </>
    )
}
