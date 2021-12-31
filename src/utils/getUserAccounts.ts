import { getAccounts } from './getAccounts';

export const renderAccounts = async (endpoint: string) => {
	try {
		const data = await getAccounts(endpoint);
		console.log('something went right');
		return data;
	} catch (error) {
		console.log('something went wrong');
		console.error(error);
		return [];
	}
};
