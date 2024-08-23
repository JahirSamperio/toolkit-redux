import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"


 // Aqui lo que permite es que puedas usar la funcion dispatch de cualquiera de las dos funciones
 //Sin esto seria como dispatch( dispatch( isLoading )) => Simplificado: dispatch( page )
export const getPokemons = (page = 0) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );
        
        //TODO: realizar peticion http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        // const data  = await resp.json();
        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`)
        console.log(data)
        dispatch( setPokemons({pokemons: data.results, page: page + 1}) )
    }
}