import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
const drawerWidth = 240;
const navItems = [
  { path: "Features", route: "/" },
  { path: "Enterprise", route: "/" },
  { path: "Support", route: "/" },
];
const DashboardNavBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const closeNav = () => {
    setMobileOpen(false);
  };
  const navigate = useNavigate();

  const drawer = (
    <Box
      // onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        position: "relative",
      }}
    >
      <IconButton
        color="inherit"
        aria-label="close drawer"
        onClick={closeNav}
        sx={{
          position: "absolute",
          top: "5px",
          right: "5px",
        }}
      >
        <AiOutlineClose />
      </IconButton>
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                // primary={item.path}
                sx={{ textTransform: "capitalize" }}
              >
                <Link style={{ fontWeight: "500" }} to={item.route}>
                  {item.path}
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}

        <Link to={"/"} className="nav-link">
          Logout
        </Link>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          maxWidth: "1600px",
          margin: "auto",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h2"
            component="div"
            sx={{
              flexGrow: 1,

              color: "#26425a",
            }}
          >
            <Link
              to={"/"}
              className="nav-logo-main"
              style={{ display: "flex", alignItems: "center", gap: "1px" }}
            >
              <img src={Logo} alt="logo" className="nav-logo" />
              <h3 className="nav-logo-text">Insight Bot</h3>
            </Link>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end" // Move the hamburger icon to the right
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                sx={{
                  color: "#000",
                  textTransform: "capitalize",
                  fontWeight: "500",
                }}
              >
                <Link to={item.route}>{item.path}</Link>
              </Button>
            ))}

            <Link to={"/"} className="nav-link" style={{ marginLeft: "12px" }}>
              Logout
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          anchor="right"
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

DashboardNavBar.propTypes = {
  window: PropTypes.func,
};

export default DashboardNavBar;
