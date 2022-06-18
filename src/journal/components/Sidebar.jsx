import {
	Box,
	Divider,
	Drawer,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';

export const Sidebar = () => {
	return (
		<Box component='nav' sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } }}>
			<Drawer
				open
				variant='permanent'
				sx={{
					display: { xs: 'block' },
					'& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						width: 240,
					},
				}}
			>
				<Toolbar>
					<Typography variant='h6' color='inherit'>
						Journal App
					</Typography>
				</Toolbar>
				<Divider />

				<List>
					{['Dashboard', 'Entries', 'Tags', 'Settings'].map(
						(text, index) => (
							<ListItem disablePadding key={index}>
								<ListItemButton>
									<ListItemIcon>
										<TurnedInNot />
									</ListItemIcon>
									<Grid container>
										<ListItemText primary={text} />
										<ListItemText
											secondary={'Lorem ipsum sir dolor'}
										/>
									</Grid>
								</ListItemButton>
							</ListItem>
						)
					)}
				</List>
			</Drawer>
		</Box>
	);
};
