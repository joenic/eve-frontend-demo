import axios from 'axios'

export const getPeople = () => axios.get('https://eveapicap.netlify.app').then(res => res.data)