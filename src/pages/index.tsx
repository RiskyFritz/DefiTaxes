/* eslint-disable no-undef */
/// <reference types="chrome"/>
import './index.css';
import { useState, useEffect } from 'react';
import verifyAccount from '../utils/verifyAccount';
import AccountCard from '../components/AccountCard/AccountCard';
import { AccountsInterface } from '../utils/getAccounts';
import { renderAccounts } from '../utils/getUserAccounts';
import { deleteAccount } from '../utils/deleteAccount';
import { postAccount } from '../utils/postAccount';
import shortenAccount from '../utils/shortAccount';
import { downloadFile } from '../utils/downloadFile';

const Index = () => {
	// --- hooks ----
	// > dark mode
	const [account, setAccount] = useState('');
	const [accounts, setAccounts] = useState<AccountsInterface[]>([]);
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const [selectedAccount, setSelectedAccount] = useState('');
	const [selectedYear, setSelectedYear] = useState('2021');
	const [selectedCurrency, setSelectedCurrency] = useState('USD');

	// > lifecycle

	// > lifecycle
	useEffect(() => {
		const fetchAccounts = async () => {
			try {
				const newAccounts = await renderAccounts(
					'http://localhost:3000/accounts',
					'zdennis27',
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
				const accountToPost = {
					account,
					shortAccount: shortenAccount(account),
					user: 'zdennis27',
				};
				postAccount(accountToPost);
				const newAccounts = await renderAccounts(
					'http://localhost:3000/accounts',
					'zdennis27',
				);
				console.log(newAccounts);
				setAccounts(newAccounts);
				setAccount('');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="m-4">
			<div className="flex flex-row items-center shadow-sm">
				<input
					className="p-4 h-10 text-md outline-none rounded-l-lg dark:bg-zinc-900"
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
			<div className="flex flex-row justify-end">
				<select
					className="p-1 w-16 outline-none my-2 mr-2 rounded-md text-sm dark:bg-zinc-900"
					value={selectedCurrency}
					onChange={(e) => setSelectedCurrency(e.target.value)}
				>
					<option value="USD">USD</option>
					<option value="EUR">EUR</option>
					<option value="CAD">CAD</option>
					<option value="GBP">GBP</option>
					<option value="JPY">JPY</option>
					<option value="AUD">AUD</option>
				</select>
				<select
					className="p-1 w-16 outline-none my-2 rounded-md text-sm dark:bg-zinc-900"
					value={selectedYear}
					onChange={(e) => setSelectedYear(e.target.value)}
				>
					<option value="2021">2021</option>
					<option value="2022">2022</option>
				</select>
			</div>
			{accounts.map((item, index) => (
				<div key={index}>
					<AccountCard
						number={item.shortAccount}
						longNumber={item.account}
						id={item.id}
						active={selectedAccount === item.account}
						onSelect={() => {
							setSelectedAccount(item.account);
							setIsButtonDisabled(false);
						}}
						onDelete={() => {
							const newAccounts = accounts.filter(
								(card) => card.id !== item.id,
							);
							setAccounts(newAccounts);
							deleteAccount(item.id);
						}}
					/>
				</div>
			))}
			<button
				type="button"
				className="w-full text-center mt-2 bg-blue-400 shadow-md pt-2 pb-2 rounded-xl font-semibold disabled:opacity-50"
				disabled={isButtonDisabled}
				// onClick generate csv for account number
				onClick={() => {
					if (account.length) {
						// download selected account's file
						downloadFile(
							selectedAccount,
							parseInt(selectedYear),
							selectedCurrency,
						);
					}
				}}
			>
				Generate CSV File
			</button>
		</div>
	);
};

export default Index;
