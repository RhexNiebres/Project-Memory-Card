import { useState, useEffect} from 'react'

export default function Cards({ pokemon, onClick }) {
    const [pokemons, setPokemons] = useState([])
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res => res.json())
        .then(data => {
            setPokemons(data)
            setLoading(false)
        })
        .catch(err => {
            setError(err)
            setLoading(false)
            console.log(err)
        })
    })

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <>
            <div className="card-image" onClick={onClick}>
                <img src={pokemons.sprites.front_default} alt={pokemons.name} />
                <h3>{pokemons.name}</h3>
            </div>
        </>
    )
}
