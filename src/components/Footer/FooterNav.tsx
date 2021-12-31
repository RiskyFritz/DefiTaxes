import './FooterNav.css';
import { Link } from 'react-router-dom';

const FooterNav = () => (
	<div className="flex flex-row justify-around items-center m-4 bg-blue-400 shadow-md pl-4 pr-4 pt-2 pb-2 rounded-xl">
		<Link to="/">
			<button
				type="button"
				className="transition-shadow ring-0 focus:ring-2 ring-blue-500 ring-opacity-50"
			>
				<svg
					width="26"
					height="26"
					viewBox="0 0 26 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="text-white dark:text-black w-6"
				>
					<g>
						<path
							d="M9 25C9.35362 25 9.69276 24.8595 9.94281 24.6095C10.1929 24.3594 10.3333 24.0203 10.3333 23.6667V18.3333C10.3333 17.9797 10.4738 17.6406 10.7239 17.3905C10.9739 17.1405 11.313 17 11.6667 17H14.3333C14.687 17 15.0261 17.1405 15.2761 17.3905C15.5262 17.6406 15.6667 17.9797 15.6667 18.3333V23.6667C15.6667 24.0203 15.8071 24.3594 16.0572 24.6095C16.3072 24.8595 16.6464 25 17 25H9ZM17 25H9H17Z"
							fill="currentColor"
						/>
						<path
							d="M1 13L3.66667 10.3333M3.66667 10.3333L13 1L22.3333 10.3333M3.66667 10.3333V23.6667C3.66667 24.0203 3.80714 24.3594 4.05719 24.6095C4.30724 24.8595 4.64638 25 5 25H9M22.3333 10.3333L25 13M22.3333 10.3333V23.6667C22.3333 24.0203 22.1929 24.3594 21.9428 24.6095C21.6928 24.8595 21.3536 25 21 25H17M9 25C9.35362 25 9.69276 24.8595 9.94281 24.6095C10.1929 24.3594 10.3333 24.0203 10.3333 23.6667V18.3333C10.3333 17.9797 10.4738 17.6406 10.7239 17.3905C10.9739 17.1405 11.313 17 11.6667 17H14.3333C14.687 17 15.0261 17.1405 15.2761 17.3905C15.5262 17.6406 15.6667 17.9797 15.6667 18.3333V23.6667C15.6667 24.0203 15.8071 24.3594 16.0572 24.6095C16.3072 24.8595 16.6464 25 17 25M9 25H17"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
				</svg>
			</button>
		</Link>
		<Link to="/itemManager">
			<button
				type="button"
				className="transition-shadow ring-0 focus:ring-2 ring-blue-500 ring-opacity-50"
			>
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="tachometer"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 576 512"
					className="text-white dark:text-black w-6"
				>
					<path
						fill="currentColor"
						d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm102.77 119.59l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36z"
						className=""
					/>
				</svg>
			</button>
		</Link>
	</div>
);
export default FooterNav;
