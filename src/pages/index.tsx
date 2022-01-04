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
	const [isInvalidAccount, setIsInvalidAccount] = useState(false);
	const [userAccount, setUserAccount] = useState('');
	const [errorDisplay, setErrorDisplay] = useState('');

	// > lifecycle
	useEffect(() => {
		const getAccount = () => {
			// delete chrome storage
			try {
				// generate userAccount random string
				let generatedUserAccount = '';
				for (let i = 0; i < 36; i += 1) {
					generatedUserAccount += Math.floor(
						Math.random() * 100,
					).toString(36);
				}
				chrome.storage.sync.get('userAccount', (result) => {
					if (result.userAccount === undefined) {
						chrome.storage.sync.set({
							userAccount: generatedUserAccount,
						});
						setUserAccount(generatedUserAccount);
					} else {
						// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
						setUserAccount(result.userAccount);
						console.log(result.userAccount);
					}
				});
			} catch (error) {
				console.log(error);
			}
		};
		getAccount();
	}, []);

	useEffect(() => {
		const fetchAccounts = async () => {
			try {
				const newAccounts = await renderAccounts(
					'http://localhost:3000/accounts',
					userAccount,
				);
				console.log(newAccounts);
				setAccounts(newAccounts);
			} catch (error) {
				console.log(error);
			}
		};
		fetchAccounts();
	}, [userAccount]);

	const onVerifyAccount = async () => {
		try {
			const verifiedAccount = await verifyAccount(account);
			if (!verifiedAccount) {
				setIsInvalidAccount(true);
				setErrorDisplay('Invalid Account');
				throw new Error('Account not verified');
			} else if (accounts.length >= 5) {
				setErrorDisplay(
					'You have reached the maximum number of accounts',
				);
			} else {
				// post account logic
				const accountToPost = {
					account,
					shortAccount: shortenAccount(account),
					user: userAccount,
				};
				setIsInvalidAccount(false);
				await postAccount(accountToPost);
				const newAccounts = await renderAccounts(
					'http://localhost:3000/accounts',
					userAccount,
				);
				console.log({ newAccounts });
				setAccounts(newAccounts);
				setAccount('');
				setErrorDisplay('');
			}
		} catch (error) {
			const verifiedAccount = await verifyAccount(account);
			if (verifiedAccount) {
				setErrorDisplay('Account already exists');
			}
			console.log(error);
		}
	};

	return (
		<div className="m-4">
			<div className="sticky top-20">
				<form
					onSubmit={(e) => e.preventDefault()}
					className="flex flex-row items-center shadow-sm sticky top-20"
				>
					<input
						className={`${
							isInvalidAccount
								? 'ring-2 ring-red-500 ring-inset ring-opacity-50 '
								: ''
						}" p-4 h-10 text-md outline-none rounded-l-lg dark:bg-zinc-900 "`}
						placeholder="Account Number"
						value={account}
						onChange={(e) => {
							setAccount(e.target.value);
							setErrorDisplay('');
							setIsInvalidAccount(false);
						}}
					/>
					<button
						type="submit"
						className=" h-10 px-2 bg-blue-400 rounded-r-lg hover:bg-blue-500"
						onClick={() => {
							if (account !== '') {
								onVerifyAccount();
							}
						}}
					>
						Submit
					</button>
				</form>
				{errorDisplay.length > 0 && (
					<div className="text-red-500 text-xs text-center">
						{errorDisplay}
					</div>
				)}
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
			</div>
			<div className="max-h-60 overflow-y-hidden">
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
								setSelectedAccount('');
								setIsButtonDisabled(true);
								deleteAccount(item.id);
							}}
						/>
					</div>
				))}
			</div>
			<button
				type="button"
				className="w-full text-center mt-4 bg-blue-400 shadow-md pt-2 pb-2 rounded-xl font-semibold sticky bottom-4 disabled:opacity-50"
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
