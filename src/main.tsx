import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes } from './routes';
import DarkModeContextProvider from './contexts/DarkModeContext';

const queryClient = new QueryClient();

ReactDOM.render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<DarkModeContextProvider>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</DarkModeContextProvider>
		</QueryClientProvider>
	</StrictMode>,
	document.getElementById('root'),
);
