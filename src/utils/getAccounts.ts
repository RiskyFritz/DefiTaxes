import { AccountsInterface } from './accountsInterface';

export const getAccounts = async (
	endpoint: string,
): Promise<AccountsInterface[]> => {
	const response = fetch(endpoint);
	const data = (await response).json() as Promise<AccountsInterface[]>;
	return data;
};
