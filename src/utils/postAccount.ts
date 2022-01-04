import axios from 'axios';

export const postAccount = async (data: {
	account: string;
	shortAccount: string;
	user: string;
}) => {
	const endpoint = 'http://localhost:3000/accounts/';
	await axios.post(endpoint, data);
};
