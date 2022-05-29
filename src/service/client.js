import {http} from './config'

export default {
	listClients:(client_id) => {
		window.console.log(http.get('/api/connet/v1/client/clients/', client_id))
		return http.get('/api/connet/v1/client/clients/', client_id)
	}

}
