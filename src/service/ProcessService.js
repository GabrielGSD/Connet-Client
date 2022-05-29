import {httpConnet} from './config'

export default {
	listProcessClient:(client_id) => {
		return httpConnet.get('/api/process/v1/client/'+ client_id);
	}

}
