import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { HeadingSmall } from './UI/Text'
import { colorTypes } from '../helpers/colorTypes'
import { getPokemon } from '../services/pokemonFetch'

function Pokemon ({name}) {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const pokemon = await getPokemon(name)
      setData(pokemon)
    }
    fetchData()
  }, []);

  return (
    <Card>
      {data.sprites ? 
        <PokeImage color={data.types[0].type.name}>
          {data.sprites && <img src={data.sprites.other["official-artwork"].front_default} alt={name}/>}
        </PokeImage> : <div></div>
      }
      <Description>
        {data.species && <HeadingSmall>{data.species.name}</HeadingSmall>}
        <TypesList>
          {data.types && data.types.map(type => (
            <Type key={type.type.name} color={type.type.name}>
              {type.type.name}
            </Type>
          ))}
        </TypesList>    
      </Description>
    </Card>
  )
}

export default Pokemon;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 130px;
  max-height: 140px;
`

const PokeImage = styled.div`
  border-radius: 8px 8px 0 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  background: ${props => props.color && colorTypes(props.color)};
  display: flex;
  justify-content: center; 
  align-items: center;

  img {
    height: 90px;
    width: 100%;
    object-fit: contain;
  }
`  

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 5px;
`
const TypesList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`

const Type = styled.div`
  width: 55px;
  height: 12px;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  background: ${props => props.color && colorTypes(props.color)};
`