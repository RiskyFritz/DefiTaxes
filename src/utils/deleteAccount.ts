import axios from 'axios';

export const deleteAccount = (id: string) => {
	const endpoint = `http://localhost:3000/account/${id}`;
	// Write delete request here
	return axios.delete(endpoint);
};
