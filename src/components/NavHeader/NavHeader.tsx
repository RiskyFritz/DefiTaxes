import { useDarkMode } from '../../contexts/DarkModeContext';
import { DarkModeButton } from '../DarkModeButton/DarkMode';

const NavHeader = () => {
	const { toggleDarkMode, isDarkMode } = useDarkMode();

	return (
		<div className="bg-zinc-50 dark:bg-zinc-900 pb-4 shadow">
			<div className="flex flex-row pt-4 pl-4 pr-4 justify-between items-center w-full">
				<div className="flex flex-row text-2xl font-bold">
					<h4 className="text-blue-500 dark:text-white text-2xl font-bold cursor-pointer">
						Defi
					</h4>
					<h4 className="dark:text-blue-500 text-2xl font-bold cursor-pointer">
						Taxes
					</h4>
				</div>
				<div className="flex flex-row ml-34 items-center">
					<div className="ml-4">
						<DarkModeButton
							isDarkMode={isDarkMode}
							toggleDarkMode={toggleDarkMode}
							maskKey="dark-mode-nav-mask"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default NavHeader;
