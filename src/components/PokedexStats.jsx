import React from 'react';
import StatsList from './Stats.jsx';
import '../styles/PokedexStats.css';
import ErrorIMG from '../img/error.gif';

const PokedexStats = ({pokemon,loading,error}) => {
	if(error){
		return(
			<img 
				src={ErrorIMG} 
				alt="error"
				className='visualizer-img'
			/>
		)
	}

	return(
		<div className='pokedex-stats'>
			{ !pokemon || loading ?
				<div className='loader'></div>
			:<div className='pokemon-info'>
				<ul className='pokemon-stats'>
					<h2>Stats</h2>
					{pokemon.stats.map(item=>(
						<StatsList
							key={item.stat.name}
							item={item}
						/>
					))}
				</ul>
			</div>
		}
		</div>
	)
}			

export default PokedexStats;