import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';

export const getAllPokemon = () => {
  return axios.get('pokemon?limit=898')
    .then(res => {
      return res.data.results
    })
}

export const getPokemon = (name) => {
  return axios.get(`pokemon/${name}`)
    .then(res => {
      return res.data
    })
}