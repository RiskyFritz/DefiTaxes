/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/// <reference types="chrome"/>
import { createContext, useEffect, useState, useContext } from 'react';

interface DarkModeContextValues {
	toggleDarkMode: () => void;
	isDarkMode: boolean;
}

// > create context
const DarkModeContext = createContext<DarkModeContextValues>(
	{} as DarkModeContextValues,
);

// > create hook
export const useDarkMode = () => useContext(DarkModeContext);

const DarkModeContextProvider: React.FC = ({ children }) => {
	// --- hooks ---
	const [isDarkMode, setIsDarkMode] = useState(false);
	chrome.storage.sync.get('darkMode', (result) => {
		if (result.darkMode === undefined) {
			chrome.storage.sync.set({ darkMode: false });
		} else {
			chrome.storage.sync.set({ darkMode: result.darkMode });
			setIsDarkMode(result.darkMode);
		}
	});

	// --- lifecycle ---
	// > dark mode side effect
	useEffect(() => {
		// check if dark mode is active
		if (isDarkMode) {
			// set dark mode
			document.body.classList.add('dark');
		} else {
			// remove dark mode
			document.body.classList.remove('dark');
		}
	}, [isDarkMode]);

	// --- functions ---
	// > toggle dark mode
	const toggleDarkMode = () => {
		// set dark mode in chrome to opposite of current chrome dark mode result
		chrome.storage.sync.get('darkMode', (result) => {
			if (result.darkMode) {
				chrome.storage.sync.set({ darkMode: false });
				setIsDarkMode(false);
			} else {
				chrome.storage.sync.set({ darkMode: true });
				setIsDarkMode(true);
			}
		});
	};

	// > dark mode context values
	const value: DarkModeContextValues = {
		toggleDarkMode,
		isDarkMode,
	};

	return (
		<DarkModeContext.Provider value={value}>
			{children}
		</DarkModeContext.Provider>
	);
};

export default DarkModeContextProvider;
