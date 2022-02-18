import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { ContentXSmall, HeadingSmall } from './UI/Text'
import { Card } from './UI/Card'
import { colorTypes } from '../helpers/colorTypes'
import { getPokemon } from '../services/pokemonFetch'

export function PokeEntry ({name}) {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const pokemon = await getPokemon(name)
      setData(pokemon)
    }
    fetchData()
  }, []);

  return (
    <DexCard>
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
              <ContentXSmall>{type.type.name}</ContentXSmall>
            </Type>
          ))}
        </TypesList>    
      </Description>
    </DexCard>
  )
}

const DexCard = styled(Card)`
  width: 90px;
  background: rgb(255 255 255 / 75%);

  @media (min-width: 768px) {
    width: 140px;
  }
`

const PokeImage = styled.div`
  border-radius: 8px 8px 0 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  background: ${props => props.color && colorTypes(props.color)};
  display: flex;
  justify-content: center; 
  align-items: center;

  img {
    height: 95%;
    width: 60%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    height: 60px;
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px;
  gap: 3px;

  @media (min-width: 768px) {
    gap: 5px;
    padding: 5px;
  }
`
const TypesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2px;

  @media (min-width: 768px) {
    gap: 10px;
  }
`

const Type = styled.div`
  width: 40px;
  height: 8px;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  background: ${props => props.color && colorTypes(props.color)};

  @media (min-width: 768px) {
    width: 60px;
    height: 12px;
  }
`