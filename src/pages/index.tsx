/* eslint-disable no-undef */
/// <reference types="chrome"/>
import './index.css';
import { useState, useEffect } from 'react';
import verifyAccount from '../utils/verifyAccount';
import AccountCard from '../components/AccountCard/AccountCard';
import { AccountsInterface } from '../utils/accountsInterface';

const Index = () => {
	// --- hooks ----
	// > dark mode
	const [account, setAccount] = useState('');
	const [accounts, setAccounts] = useState<AccountsInterface[]>([]);

	// > lifecycle
	useEffect(() => {
		const fetchAccounts = async () => {
			try {
				const newAccounts = await renderAccounts(
					'http://localhost:3000/accounts',
				);
				console.log(newAccounts);
				setAccounts(newAccounts);
			} catch (error) {
				console.log(error);
			}
		};
		fetchAccounts();
	}, []);

	const onVerifyAccount = async () => {
		try {
			const verifiedAccount = await verifyAccount(account);
			if (!verifiedAccount) {
				throw new Error('Account not verified');
			} else {
				// post account logic
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="m-4">
			<div className="flex flex-row items-center shadow-sm">
				<input
					className="p-4 h-10 text-md outline-none rounded-l-lg dark:bg-gray-900"
					placeholder="Account Number"
					value={account}
					onChange={(e) => setAccount(e.target.value)}
				/>
				<button
					type="button"
					className="h-10 px-2 bg-blue-400 rounded-r-lg"
					onClick={() => {
						if (account !== '') {
							onVerifyAccount();
						}
					}}
				>
					Submit
				</button>
			</div>
			{isAccounts &&
				accounts.map((item, index) => (
					<div key={index}>
						<AccountCard
							number={item}
							accounts={accounts}
							onClick={() => {
								allAccounts();
								// allAccounts();
								// console.log(item);
							}}
						/>
					</div>
				))}
		</div>
	);
};

export default Index;
function renderAccounts(arg0: string) {
	throw new Error('Function not implemented.');
}

