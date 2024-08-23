import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

    const {pokemons, isLoading, page} = useSelector(state => state.pokemons);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons())
    }, [])
    return (
        <>
            <h1>Pokemon App</h1>
            <hr />
            <span>Loading: { isLoading ? 'True' : 'False' }</span>
            <ul>
                {
                    pokemons.map((pokemon, index) => (
                        <li key={pokemon.name}>
                            <h2>{pokemon.name}</h2> 
                            <img src={pokemon.url}/>
                        </li>))
                }
            </ul>

            {/* next */}
            <button 
                disabled={ isLoading }
                onClick={() => dispatch( getPokemons(page))}
            >
                Next
            </button>
        </>
    )
}
