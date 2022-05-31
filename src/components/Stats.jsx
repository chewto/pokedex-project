import React from 'react';
import '../styles/Stats.css';

const Stats = ({item}) =>{
	return(
		<li className='stat-line'>
			<span className='stat-name'><b>{item.stat.name}</b></span>
			<span>{item.base_stat}</span>			
		</li>
	)
}

export default Stats;