import {httpChallenge, httpConnet} from './config'

export default {
	listFullInstallers:() => {
		return httpConnet.get('/api/connet/v1/installer/installers');
	},
	listInstaller:(installer_id) => {
		return httpConnet.get('/api/connet/v1/installer/installers/extern/'+installer_id);
	},
	listInstallers:(plan_id) => {
		return httpChallenge.get('/installers?plan='+ plan_id);
	}

}
