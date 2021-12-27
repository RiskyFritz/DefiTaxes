/* eslint-disable @typescript-eslint/no-unsafe-call */
import axios from 'axios';

export const verifyAccount = (accountNumber: string): boolean => {
	let success = true;
	// const data = await axios
	// 	.get('https://rpc.s0.t.hmny.io', {
	// 		headers: {
	// 			'content-type': 'application/json',
	// 		},
	// 		data: {
	// 			jsonrpc: '2.0',
	// 			id: 1,
	// 			method: 'hmyv2_getBalance',
	// 			params: [accountNumber],
	// 		},
	// 	})
	// 	.then((response) => {
	// 		console.log(response);
	// 	});
	const data = {
		jsonrpc: '2.0',
		id: 1,
		method: 'hmyv2_getBalance',
		params: [accountNumber],
	};

	const config = {
		method: 'get',
		url: 'https://rpc.s0.t.hmny.io',
		headers: {
			'Content-Type': 'application/json',
		},
		data,
	};

	// const returned = axios(conig)
	// 	.then((response) => {
	// 		console.log(JSON.stringify(response.data));
	// 		console.log('hi2');
	// 	})
	// 	.catch((error) => {
	// 		console.log('hi');
	// 	});

	success = true;

	return success;
};
