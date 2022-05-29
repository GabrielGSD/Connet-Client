import axios from 'axios';

export const http = axios.create({
	baseURL: 'https://connet-app.herokuapp.com/connet-app/'
})
