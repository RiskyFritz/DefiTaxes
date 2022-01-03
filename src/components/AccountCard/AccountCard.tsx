import shortenAccount from '../../utils/shortAccount';

interface AccountCardProps {
	number: string;
	id: string;
	longNumber: string;
	active: boolean;
	onDelete: () => void;
	onSelect: () => void;
}

const AccountCard: React.FC<AccountCardProps> = ({
	number,
	id,
	longNumber,
	active,
	onDelete,
	onSelect,
	children,
}) => (
	<div
		className={`${
			active ? 'opacity-100 ' : ''
		}flex flex-row justify-between my-2 p-2 bg-white rounded-lg shadow-lg dark:bg-zinc-900 items-center opacity-50`}
	>
		<button
			className="flex-grow text-base font-bold text-left mx-2"
			onClick={onSelect}
			type="button"
		>
			{shortenAccount(number)}
		</button>
		<div className="w-4 mx-2">
			<button type="button" onClick={onDelete}>
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fal"
					data-icon="trash-alt"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					className="w-4"
				>
					<path
						fill="currentColor"
						d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"
						className=""
					/>
				</svg>
			</button>

			{children}
		</div>
	</div>
);
export default AccountCard;
