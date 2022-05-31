import React,{useState} from 'react';
import '../styles/PokedexForm.css';

const PokedexForm = ({setPokemonID, setLoading, setError}) => {
	const [pokemon,setPokemon] = useState('')
	const handleSubmit = e =>{
		e.preventDefault();
		if(pokemon !== ''){
			setError(true)
			setLoading(true)
			const pokemonID = window.isNaN(parseInt(pokemon)) ? pokemon.toLowerCase() : pokemon
			setPokemonID(pokemonID)
			setPokemon('')
		}
		setError(false)
	}
	return(
		<form className='pokemon-form' onSubmit={handleSubmit}>
			<input 
				type="text"
				placeholder="buscar"
				name="pokemon"
				className='pokemon-input'
				value={pokemon}
				onChange= {e => setPokemon(e.target.value)}
				autoComplete='off'
			/>
			<input type="submit" className='pokemon-btn' value='search'/>	
		</form>
	)
}

export default PokedexForm;