import {httpChallenge} from './config'

export default {
	listFullInstallers:() => {
		return httpChallenge.get('/installers');
	},
	listInstallers:(plan_id) => {
		return httpChallenge.get('/installers?plan='+ plan_id);
	}

}
