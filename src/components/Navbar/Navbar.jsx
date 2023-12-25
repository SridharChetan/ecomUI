import React from "react";
import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import SearchComponent from "../../common/Searchbar";

const Navbar = ({ token, setToken, userRole }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    setToken();
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <ShoppingCart sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            upGrad E-Shop
          </Typography>
          {token ? (
            <>
              <SearchComponent />
              <div>
                <Link className="headerLinks" to="/" color="inherit">
                  Home
                </Link>
                {userRole === "ADMIN" && (
                  <Link className="headerLinks" to="/update" color="inherit">
                    Add Product
                  </Link>
                )}
                <Button
                  variant="contained"
                  onClick={logoutHandler}
                  color="secondary"
                >
                  LOGOUT
                </Button>
              </div>
            </>
          ) : (
            <>
              <div>
                <Link className="headerLinks" to="/login" color="inherit">
                  Login
                </Link>
                <Link className="headerLinks" to="/signup" color="inherit">
                  Sign Up
                </Link>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
