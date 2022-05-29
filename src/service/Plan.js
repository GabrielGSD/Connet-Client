import {httpChallenge} from './config'

export default {
	listPlanUf:(state) => {
		return httpChallenge.get('/plans?state='+ state);
	}
}
