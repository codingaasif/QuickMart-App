/* eslint-disable react/prop-types */
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import debounce from "lodash.debounce";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import ShoppingCart from "./ShoppingCart";
import { Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "25ch",
      "&:focus": {
        width: "35ch",
      },
    },
  },
}));

export default function NavBar({ setSearchParams, }) {
  const navigate = useNavigate();

  const cartData = useSelector((state) => state?.quickMart?.cartData)
  console.log(cartData, "cartData");

  const handleCart = () => {
    if (cartData.length > 0) {
      navigate("/shopping-cart")
    }
  };

  const handleQuickMart = () => {
    navigate("/");
  };

  const handleMoreVertIcon = () => {
    navigate("/log-out-page")
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar sx={{ gap: "10px" }}>
            <Typography
              onClick={handleQuickMart}
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, cursor: "pointer" }}
            >
              QuickMart
            </Typography>

            {/* Centered Search Box */}
            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "center", }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  onChange={debounce((e) => {
                    setSearchParams((prev) => {
                      prev.set("q", e.target.value);
                      prev.set("skip", 0);
                      prev.delete("category");
                      return prev;
                    });
                  }, 1000)}
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>

            {/* Right Side Icons */}
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                onClick={handleCart}
                sx={{ display: "flex", gap: "5px", cursor: "pointer" }}
              >
                <Badge badgeContent={cartData?.length} color="secondary">
                  <ShoppingCartIcon sx={{ fontSize: "30px" }} />
                </Badge>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                  Cart
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "5px", cursor: "pointer" }}>
                <AccountCircleIcon sx={{ fontSize: "30px" }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                  Account
                </Typography>
              </Box>
              <Box onClick={handleMoreVertIcon} sx={{ cursor: "pointer" }}>
                <MoreVertIcon />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {/* {cart ? <ShoppingCart /> : null} */}
    </>
  );
}
