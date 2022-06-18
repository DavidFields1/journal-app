import { Link as RouterLink } from 'react-router-dom';
import { Grid, TextField, Typography, Button, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
	return (
		<AuthLayout>
			<Typography component={'h1'} sx={{ mb: 1 }} variant='h5'>
				Create your account
			</Typography>

			<form>
				<Grid container spacing={0}>
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
					<Grid item xs={12}>
						<TextField
							id='confirmPassword'
							label='Confirm Password'
							type='password'
							fullWidth
							margin='normal'
							variant='outlined'
						/>
					</Grid>
				</Grid>
				<Grid container spacing={2} sx={{ mt: 1, mb: 1 }}>
					<Grid item xs={12}>
						<Button variant='contained' color='primary' fullWidth>
							Sign In
						</Button>
					</Grid>
				</Grid>
				<Grid container direction='row' justifyContent='end'>
					<Link
						color='inherit'
						to='/auth/login'
						component={RouterLink}
					>
						<Typography>Log in into your account</Typography>
					</Link>
				</Grid>
			</form>
		</AuthLayout>
	);
};
