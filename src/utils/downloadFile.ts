import axios from 'axios';

export const downloadFile = async (
	account: string,
	year: number,
	currency: string,
) => {
	// const { data } = await axios.get(endpoint);
	// const items = data;
	// let csvContent = 'data:text/csv;charset=utf-8,';
	// items.forEach((item) => {
	// 	csvContent += `${item.name},${item.folder},${item.url},${item.username},${item.password},${item.notes}\n`;
	// });
	// const encodedUri = encodeURI(csvContent);
	// const link = document.createElement('a');
	// link.setAttribute('href', encodedUri);
	// link.setAttribute('download', 'data.csv');
	// document.body.appendChild(link); // Required for FF
	// link.click();
};
