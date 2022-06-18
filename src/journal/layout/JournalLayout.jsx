import { Box, Toolbar } from '@mui/material';
import { Navbar, Sidebar } from '../components';

export const JournalLayout = ({ children }) => {
	return (
		<Box sx={{ display: 'flex' }}>
			<Navbar />
			<Sidebar />
			<Box component='main' sx={{ flexGrow: 1, padding: 2 }}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};
