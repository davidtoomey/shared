import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography, Paper, Grid, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Link as RouterLink } from "react-router-dom";
import DashboardNavBar from "./DashboardNavBar/DashboardNavBar";
const Dashboard = () => {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      <DashboardNavBar />
      <Container>
        <Paper
          style={{
            padding: "20px",
            marginTop: "20px",
            border: "3px solid #576b73",
            borderRadius: "25px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#052843" }}
              >
                User Dashboard
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: "#052843" }}
              >
                User:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: "#052843" }}
              >
                Team ID:
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: "#052843" }}
              >
                Subscription Start Date:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: "#052843" }}
              >
                Subscription Renewal:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: "#052843" }}
              >
                Subscription Status:
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          style={{
            padding: "20px",
            marginTop: "20px",

            border: "3px solid #576b73",
            borderRadius: "25px",
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <div
                style={{
                  display: "flex",
                  // justifyContent: "center",
                  gap: "7px",
                  flexWrap: "wrap",
                }}
              >
                <button className="btn">Manage Your Subscription</button>
                <button className="btn">Add to Slack</button>
                <a href="mailto:info@peznetsolutions.com" className="nav-btn">
                  Email Support
                </a>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;
