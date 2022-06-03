import React,{useState,useEffect,useRef} from 'react';
import '../styles/PokedexForm.css';

const PokedexForm = ({setPokemonID, setLoading, setError}) => {

	const [options, setOptions] = useState([])
	const [shouldDisplayOptions, setShouldDisplayOptions] = useState(false)
	const [searchText,setSearchText] = useState('')
	const wrapperRef = useRef(null)

	useEffect(()=>{
		const pokemon = [];
		const promises = new Array(386)
		.fill().map((v,i) =>fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`));
		Promise.all(promises).then(pokemonArr => {
			return pokemonArr.map(value => {
				value.json().then(({name ,sprites :{ front_default: sprite}})=>{
					pokemon.push({name, sprite})
				})
			})
		});
		setOptions(pokemon)
	},[])

	useEffect(()=>{
		window.addEventListener('mousedown',handleClickOutside)
		return () =>{
			window.removeEventListener('mousedown', handleClickOutside)
		}
	})

	const handleClickOutside = (e) =>{
		const wrapper = wrapperRef.current
		if(wrapper && !wrapper.contains(eventTarget)){
			setShouldDisplayOptions(false)
		}
	}

	const handleSubmit = e =>{
		e.preventDefault();
		if(searchText !== ''){
			setError(true)
			setLoading(true)
			const pokemonID = window.isNaN(parseInt(searchText)) ? searchText.toLowerCase() : searchText
			setPokemonID(pokemonID)
			setSearchText('')
		}
		setError(false)
	}

	const onChange = (e) =>{
		setSearchText(e.target.value)
	}

	const handleOptionClick = (poke) =>{
		setSearchText(poke)
		setShouldDisplayOptions(false)
	}

	return(
		<div res={wrapperRef}>
			<form className='pokemon-form' onSubmit={handleSubmit}>
				<input 
					type="text"
					placeholder="buscar"
					name="pokemon"
					className='pokemon-input'
					value={searchText}
					onChange={onChange}
					onClick={()=>setShouldDisplayOptions(!shouldDisplayOptions)}
					autoComplete='off'
				/>
				<input type="submit" className='pokemon-btn' value='search'/>	
			</form>
				{shouldDisplayOptions && (
					<div className='pokemon-options'>
						{options.filter(({name})=>name.indexOf(searchText.toLowerCase())> -1).slice(0,4)
						.map((value, i)=>{
							return(
								<div
									onClick={()=>handleOptionClick(value.name)}
									key={i}
									tabIndex="0"
									className='option'
								>
									<span className='span'>{value.name}</span>
									<img 
										src={value.sprite} 
										alt={value.name}
										/>
									</div>
							);
						})}
					</div>	
				)}
		</div>	
	)
}

export default PokedexForm;