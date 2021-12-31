import { getAccounts } from './getAccounts';

export const renderAccounts = async (endpoint: string, user: string) => {
	try {
		const data = await getAccounts(endpoint, user);
		console.log('something went right');
		return data;
	} catch (error) {
		console.log('something went wrong');
		console.error(error);
		return [];
	}
};
