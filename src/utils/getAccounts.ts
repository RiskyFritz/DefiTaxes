export interface AccountsInterface {
	id: string;
	account: string;
	shortAccount: string;
	brechAccount: string;
}

export const getAccounts = async (
	endpoint: string,
): Promise<AccountsInterface[]> => {
	const response = fetch(endpoint);
	const data = (await response).json() as Promise<AccountsInterface[]>;
	return data;
};
