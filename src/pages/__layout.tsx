import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router'
import NavHeader from '../components/NavHeader/NavHeader';
import FooterNav from '../components/Footer/FooterNav';

// eslint-disable-next-line @typescript-eslint/naming-convention
const __layout: React.FC = ({ children }) => {
	// ---- hooks ----
	// > state
	const [count, setCount] = useState(0);
	// > router
	const history = useHistory();

	// ---- lifecycle ----
	// onMount
	useEffect(() => {
		if (location.pathname === '/index.html') {
			history.push('/');
		}
	},[])

	return (
		<div>
			<NavHeader />
			{children}
		</div>
	);
};
export default __layout;
