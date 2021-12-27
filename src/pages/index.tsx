/* eslint-disable no-undef */
/// <reference types="chrome"/>
import './index.css';
import { useState, useEffect } from 'react';
import AccountCard from '../components/AccountCard/AccountCard';
import { verifyAccount } from '../utils/verifyAccount';
import convertToOneAddress from '../utils/convertToOneAddress';

const Index = () => {
	// --- hooks ----
	// > dark mode
	const [account, setAccount] = useState('');
	const [accounts, setAllAccounts] = useState([] as string[]);

	const allAccounts = () => {
		chrome.storage.sync.get('Accounts', (result) => {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			setAllAccounts(result.Accounts);
			console.log(result.Accounts);
		});
	};

	const update = (item: string) => {
		allAccounts();
		const array = accounts;
		const newArray = array.filter(() => item !== '');
		if (item !== '') {
			newArray.push(item);
			chrome.storage.sync.set({ Accounts: newArray });
		}
		setAllAccounts(array);
	};

	useEffect(() => {
		const fetchAccounts = () => {
			try {
				const newAccounts = allAccounts();
				console.log(newAccounts);
			} catch (error) {
				console.log(error);
			}
		};
		fetchAccounts();
	}, []);

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
							console.log(convertToOneAddress(account));
							if (verifyAccount(account) === true) {
								update(account);
								// set input to empty
								setAccount('');
							} else {
								alert('Invalid Account Number');
							}
						}
					}}
				>
					Submit
				</button>
			</div>
			{
				// loop through accounts and display them
				accounts.map((item) => (
					<div>
						<AccountCard
							number={item}
							accounts={accounts}
							onClick={() => {
								// allAccounts();
								allAccounts();
							}}
						/>
					</div>
				))
			}
		</div>
	);
};

export default Index;
