import React from 'react';
import Stats from './Stats.jsx';
import '../styles/PokedexStats.css';

const PokedexStats = ({pokemon}) => {
	return(
		<div className='pokedex-stats'>
			<div className='pokemon-info'>
				<ul className='pokemon-stats'>
					<h2>Stats</h2>
					{pokemon.stats.map(item=>(
						<Stats key={item.stat.name} item={item}/>
					))}
				</ul>
			</div>
		</div>
	)
}			

export default PokedexStats;