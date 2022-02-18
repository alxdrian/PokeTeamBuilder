import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { HeadingSmall } from './UI/Text'
import { colorTypes } from '../helpers/colorTypes'
import { getAllPokemon } from '../services/pokemonFetch'

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 130px;
`

const PokeImage = styled.div`
  height: 90px;
  width: 100%;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
  background: ${props => props.color && colorTypes(props.color)};
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
  color: #fff;
  background: ${props => props.type && colorTypes(props.type)};
`

function Pokemon ({name, types}) {
  return (
    <Card>
      <PokeImage color={types[0]}/>
      <Description>
        <HeadingSmall>{name}</HeadingSmall>
        <TypesList>
          {types && types.map(type => 
            <Type key={`${name}${type}`} type={type}>{type}</Type>
          )}
        </TypesList>    
      </Description>
    </Card>
  )
}

export default Pokemon;