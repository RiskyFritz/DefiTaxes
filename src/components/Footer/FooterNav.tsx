import { downloadFile } from '../../utils/downloadFile';

const FooterNav = (
	accountNumber?: string,
	year?: number,
	currency?: string,
) => (
	<button
		type="button"
		className="flex flex-row justify-around items-center m-4 w-72 bg-blue-400 shadow-md pl-4 pr-4 pt-2 pb-2 rounded-xl font-semibold"
		// onClick generate csv for account number
		onClick={() => {
			if (accountNumber && year && currency) {
				// download selected account's file
				downloadFile(accountNumber, year, currency);
			}
		}}
	>
		Generate CSV File
	</button>
);
export default FooterNav;
