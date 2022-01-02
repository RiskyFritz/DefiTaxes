import axios from 'axios';

const getTransactionCount = async (accountNumber: string): Promise<number> => {
	try {
		const { data } = await axios.post<{ result?: number }>(
			'https://rpc.s0.t.hmny.io',
			{
				jsonrpc: '2.0',
				id: 2,
				method: 'hmyv2_getTransactionsCount',
				params: [accountNumber, 'all'],
			},
		);

		if (data?.result) {
			return data.result;
		}
		throw new Error('No transactions found for account');
	} catch (error) {
		// > request failed return false
		console.error(error);
		return 0;
	}
};

export default getTransactionCount;
