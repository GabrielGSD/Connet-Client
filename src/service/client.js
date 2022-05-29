import {httpConnet} from './config'

export default {
	listClients:(client_id) => {
		return httpConnet.get('/api/connet/v1/client/clients/'+ client_id);
	}

}
