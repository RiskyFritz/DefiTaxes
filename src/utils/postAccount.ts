import axios from 'axios';

export const postCredentials = (data: {
	account: string;
	shortAccount: string;
	user: string;
}) => {
	const endpoint = 'http://localhost:3000/users/';
	console.log(data);

	axios.post(endpoint, data).then((res) => {
		console.log(res);
	});
};
