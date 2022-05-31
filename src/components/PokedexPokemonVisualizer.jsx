import React from 'react';
import ErrorIMG from '../img/error.gif';
import '../styles/PokedexPokemonVisualizer.css';

const PokedexPokemonVisualizer = ({pokemon,loading,error}) =>{
	if(error){
		return(
			<div className='pokedex-pokemon-container'>
				<img
					src={ErrorIMG}
					alt="Error searching your pokemon"
					className='visualizer-img'
				/>
			</div>
		)
	}
	return(
		<div className='pokedex-pokemon-container'>
			{! pokemon || loading ?
				<div className='loader'></div>:
				<div className='pokemon'>
					<h2>{pokemon.name}</h2>
					<img 
						src={pokemon.sprites.front_default}
						alt={pokemon.name}
						className='visualizer-img'
					/>
				</div>
			}
		</div>
	)
}

export default PokedexPokemonVisualizer;