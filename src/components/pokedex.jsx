import PokedexStats from './PokedexStats.jsx';
import PokedexForm from './PokedexForm.jsx';
import PokedexPokemonVisualizer from './PokedexPokemonVisualizer.jsx';
import '../styles/pokedex.css';
import React,{useState,useEffect} from 'react';

const Pokedex = () => {
	const [error,setError] = useState(false)
	const [loading,setLoading] = useState(true)
	const [pokemon,setPokemon] = useState(null)
	const randomID = Math.floor(Math.random() * 806 + 1)
	const [pokemonID,setPokemonID] = useState(randomID)

	useEffect(()=>{
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
			.then(res => res.json())
			.then(data => {
				setPokemon(data)
				setLoading(false)
				setError(false)
				console.log(data)
				console.log('fetch exitoso')
			}).catch(err =>{
				setLoading(false)
				setError(true)
			})
		}
	,[pokemonID])

	return(
		<div className='pokedex'>
			<header className='pokedex-header'>
				<div className='poke-ball'>
					<div className='poke-ball-up'></div>
					<div className='poke-ball-center'>
						<div className='poke-ball-button'>
							<div className='poke-ball-button-intern'></div>
						</div>
					</div>
					<div className='poke-ball-down'></div>
				</div>
				<div className='title'>
					<h1><b>Pokedex</b> by Jesus Lozada</h1>
				</div>
			</header>
			<div className='pokedex-container'>
				<div className='pokedex-container-left'>
					<PokedexPokemonVisualizer
						pokemon={pokemon}
						loading={loading}
						error={error}
					/>
					<div className='pokedex-form-container'>
						<PokedexForm
							setPokemonID={setPokemonID}
							setError={setError}
							setLoading={setLoading}
						/>
					</div>
				</div>
				<div className='pokedex-container-right'>
					<PokedexStats
						pokemon={pokemon}
						loading={loading}
						error={error}
					/>
				</div>
			</div>
		</div>
	)
}

export default Pokedex;