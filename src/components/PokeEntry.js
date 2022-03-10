import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ContentXSmall, HeadingSmall } from './UI/Text'
import { Card } from './UI/Card'
import { colorTypes } from '../helpers/colorTypes'
import { getPokemon } from '../services/pokemonFetch'
import { PlusIcon } from './UI/Icons'
import { IconButton } from './UI/Button'
import { setPokemonSelected } from '../redux/actions/pokemonActions'

export function PokeEntry ({name, addToTeam }) {
  const dispatch = useDispatch()
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const pokemon = await getPokemon(name)
      setData(pokemon)
    }
    fetchData()
  }, [name]);

  function handleAddToTeam() {
    addToTeam(data)
  }

  return (
    <DexCard
      onClick={() => dispatch(setPokemonSelected(data))}
    >
      {data.sprites ? 
        <PokeImage color={data.types[0].type.name}>
          {data.sprites && <img src={data.sprites.other["official-artwork"].front_default} alt={name}/>}
        </PokeImage> : <div></div>
      }
      <Description>
        {data.types && 
        <AddToTeamButton 
          color={data.types[0].type.name}
          onClick={handleAddToTeam}
        >
          <PlusIcon/>
        </AddToTeamButton>
        }
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

  @media (min-width: 600px) {
    width: 140px;
  }

  :hover {
    cursor: pointer;
    background: rgb(255 255 255 / 100%);
    box-shadow: 0 80px 100px 0 rgba(0, 0, 0, 0.5), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }
`

export const PokeImage = styled.div`
  border-radius: 8px 8px 0 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  background: ${props => props.color && colorTypes(props.color)};
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 60px;

  img {
    height: 95%;
    width: 60%;
    object-fit: contain;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px;
  gap: 3px;
  position: relative;

  @media (min-width: 600px) {
    gap: 5px;
    padding: 5px;
  }
`
export const TypesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2px;

  @media (min-width: 600px) {
    gap: 10px;
  }
`

export const Type = styled.div`
  width: 40px;
  height: 8px;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  background: ${props => props.color && colorTypes(props.color)};

  @media (min-width: 600px) {
    width: 60px;
    height: 12px;
  }
`

const AddToTeamButton = styled(IconButton)`
  background: ${props => props.color && colorTypes(props.color)};
  position: absolute;
  right: 0;
  top: -20px;

  @media (max-width: 600px) {
    height: 20px;
    width: 20px;
    right: 3px;
    top: -12px;
  }

  :hover {
    color: ${props => props.color && colorTypes(props.color)};
  }
`;