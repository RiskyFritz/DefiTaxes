const shortenAccount = (account: string): string => {
	const shortened = `${account.substring(0, 5)}...${account.substring(
		account.length - 4,
	)}`;
	return shortened;
};

export default shortenAccount;
