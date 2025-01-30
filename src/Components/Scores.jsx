export default function Scores({ score, bestScore }) {
    return (
        <>
            <header>
                <nav>
                    <h1><a href="/">Pokémon Memory Quest</a></h1>
                    <div className="scoreBoard-container">
                        <p>Score: <span>{score}</span></p>
                        <p>Best Score: <span>{bestScore}</span></p>
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
