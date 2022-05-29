import {httpChallenge} from './config'

export default {
	listFullInstallers:() => {
		return httpChallenge.get('/installers');
	}

}
