import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
	return (
		<AuthLayout>
			<Typography component={'h1'} sx={{ mb: 1 }} variant='h5'>
				Login to your account
			</Typography>

			<form>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							id='email'
							label='Email'
							type='email'
							fullWidth
							margin='normal'
							variant='outlined'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id='password'
							label='Password'
							type='password'
							fullWidth
							margin='normal'
							variant='outlined'
						/>
					</Grid>
				</Grid>
				<Grid container spacing={2} sx={{ mt: 1, mb: 1 }}>
					<Grid item xs={12} md={6}>
						<Button variant='contained' color='primary' fullWidth>
							Login
						</Button>
					</Grid>
					<Grid item xs={12} md={6}>
						<Button variant='contained' color='primary' fullWidth>
							<Google />
							<Typography sx={{ ml: 1 }}>Google</Typography>
						</Button>
					</Grid>
				</Grid>
				<Grid container direction='row' justifyContent='end'>
					<Link
						color='inherit'
						to='/auth/register'
						component={RouterLink}
					>
						<Typography>Create an account</Typography>
					</Link>
				</Grid>
			</form>
		</AuthLayout>
	);
};
