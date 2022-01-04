import axios from 'axios';

export interface AccountsInterface {
	id: string;
	account: string;
	shortAccount: string;
	brechAccount: string;
	status: string;
	user: string;
}

export const getAccounts = async (
	endpoint: string,
	user: string,
): Promise<AccountsInterface[]> => {
	const { data } = await axios.get<AccountsInterface[]>(endpoint, {
		params: { user },
	});
	return data;
};
