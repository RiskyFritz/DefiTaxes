import axios from 'axios';

export const postAccount = (data: {
	account: string;
	shortAccount: string;
	user: string;
}) => {
	const endpoint = 'http://localhost:3000/accounts/';
	console.log(data);

	axios.post(endpoint, data).then((res) => {
		console.log(res);
	});
};
