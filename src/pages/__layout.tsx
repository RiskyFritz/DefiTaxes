import { useEffect } from 'react';
import { useHistory } from 'react-router';
import FooterNav from '../components/Footer/FooterNav';
import NavHeader from '../components/NavHeader/NavHeader';

// eslint-disable-next-line @typescript-eslint/naming-convention
const __layout: React.FC = ({ children }) => {
	// ---- hooks ----

	// > router
	const history = useHistory();

	// ---- lifecycle ----
	// onMount
	useEffect(() => {
		// eslint-disable-next-line no-restricted-globals
		if (location.pathname === '/index.html') {
			history.push('/');
		}
	}, [history]);

	return (
		<div>
			<NavHeader />
			{children}
			<FooterNav />
		</div>
	);
};
export default __layout;
