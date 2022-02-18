import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';

export const getAllPokemon = () => {
  return axios.get('pokemon?limit=898')
    .then(res => {
      return res.data.results
    })
}

export const getPokemon = (id) => {
  return axios.get(`pokemon/${id}`)
    .then(res => {
      return res.data
    })
}