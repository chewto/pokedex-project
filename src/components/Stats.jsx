import React from 'react';
import '../styles/Stats.css';

const StatsList = ({item}) =>{
	return(
		<li className='stat-line'>
			<span className='stat-name'><b>{item.stat.name}</b></span>
			<span>{item.base_stat}</span>			
		</li>
	)
}

export default StatsList;