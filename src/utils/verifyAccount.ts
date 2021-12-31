import axios from 'axios';

const verifyAccount = async (accountNumber: string): Promise<boolean> => {
	try {
		const { data } = await axios.post<{ result?: string }>(
			'https://rpc.s0.t.hmny.io',
			{
				jsonrpc: '2.0',
				id: 1,
				method: 'hmyv2_getBalance',
				params: [accountNumber],
			},
		);

		if (data?.result) {
			return true;
		}
		throw new Error('Account not found');
	} catch (error) {
		// > request failed return false
		console.error(error);
		return false;
	}
};

export default verifyAccount;
