import axios from 'axios';

export const httpConnet = axios.create({
	baseURL: 'https://connet-app.herokuapp.com/connet-app'
})

export const httpChallenge = axios.create({
	baseURL: 'https://app-challenge-api.herokuapp.com'
})
