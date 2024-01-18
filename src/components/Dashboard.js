import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Paper, Grid, Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Link as RouterLink } from 'react-router-dom';

const Dashboard = () => {

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
           GPT For Slack 
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
            <RouterLink to="/">Back</RouterLink>
          </nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Paper style={{ padding: '20px', marginTop: '20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">User Dashboard</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">User:</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">Team ID:</Typography>
            </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">Subscription Status: </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">Subscription Creator: </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">Subscription Start Date:</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">Subscription End Date:</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">Subscription Status: </Typography>
                </Grid>
          </Grid>
        </Paper>
        <Paper style={{ padding: '20px', marginTop: '20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Button variant="contained" color="primary"> 
                Manage Your Subscription
                </Button>
                <Button variant="contained" color="primary">
                    Add To Slack
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;
