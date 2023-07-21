import React, { useState } from "react";
import {
  Box,
  Card,
  Grid,
  IconButton,
  Link,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  FormHelperText,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import comonseclogo from "../../assets/Logon/commsec-dark.eed42743e834df112d3e2b0d799f406f.svg";
import { CiShare1 } from "react-icons/ci";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const CommSec = () => {
  const [clientId, setClientId] = useState<number | null>(null);
  const [password, setPassword] = useState<string | number | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLoggedin = () => {
    password && clientId && navigate("netbank/home");
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ margin: "auto" }}>
        <Card
          elevation={5}
          sx={{
            width: { sm: "460px", xs: "390px" },
            height: "600px",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={comonseclogo}
            sx={{
              width: "40%",
              marginLeft: "30px",
              marginTop: "40px",
            }}
          ></Box>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              fontWeight: "bold",
              marginLeft: "7%",
              marginBottom: "10px",
              marginTop: "30px",
            }}
          >
            Login
          </Typography>
          <Box sx={{ width: { sm: "460px", xs: "390px" } }}>
            <FormControl
              sx={{ marginX: "7%", width: "86%", marginBottom: "20px" }}
              variant="outlined"
            >
              <InputLabel>Client ID</InputLabel>
              <OutlinedInput
                value={clientId === 0 ? "" : clientId}
                onChange={(e) => setClientId(+e.target.value)}
                // color="primary"
                type="number"
                label="Client ID"
                // error={!clientId}
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "gray",
                  },
                  "&:hover > .MuiOutlinedInput-notchedOutline": {
                    borderColor: "orange",
                  },
                  "&:focus": {
                    border: clientId ? "1px solid orange" : "1px solid gray",
                  },
                }}
              />
            </FormControl>
            <FormControl
              sx={{ marginX: "7%", width: "86%", marginBottom: "20px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                // color="success"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                // error={!password}
                endAdornment={
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                }
                label="Password"
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "gray",
                  },
                  "&:hover > .MuiOutlinedInput-notchedOutline": {
                    borderColor: "orange",
                  },
                  "&:focus": {
                    border: clientId ? "1px solid orange" : "1px solid gray",
                  },
                }}
              />
            </FormControl>
            <FormHelperText sx={{ marginLeft: "30px", color: "red" }}>
              {!clientId || !password
                ? "ClientId and Password can't be empty."
                : ""}
            </FormHelperText>
            <Button
              variant="text"
              aria-label="join now"
              sx={{
                textTransform: "none",
                marginRight: "5px",
                marginLeft: { sm: "280px", xs: "20px" },
              }}
            >
              Join Now
            </Button>
            <Button
              onClick={handleLoggedin}
              variant="contained"
              sx={{
                textTransform: "none",
                bgcolor: "rgb(255,189,0)",
                color: "black",
              }}
            >
              Login
            </Button>
            <Typography sx={{ marginTop: "50px", marginLeft: "40px" }}>
              Forgot or <Link>Client ID </Link> or <Link>Password</Link>?
            </Typography>
          </Box>
          <Grid
            sx={{
              position: "absolute",
              bottom: "0",
              height: "70px",
              width: "100%",
              bgcolor: "rgb(230,240,247)",
            }}
          >
            <Box sx={{ marginY: "10px", marginX: "20px" }}>
              <ErrorOutlineIcon
                sx={{
                  fontSize: "18px",
                  color: "blue",
                }}
              />
              <Typography
                sx={{ paddingLeft: "5px", display: "inline", fontSize: "14px" }}
              >
                If you're a CommBank customer, you can access CommSec from
                Netbank.
              </Typography>
              <Link
                sx={{
                  display: "inline",
                  position: "reletive",
                  marginRight: "5px",
                  fontSize: "14px",
                }}
                component="a"
              >
                Learn more
              </Link>
              <Link
                display="inline"
                component="i"
                sx={{ position: "absolute" }}
              >
                <CiShare1 />
              </Link>
            </Box>
          </Grid>
        </Card>
        <Box marginX="auto">
          <Typography
            component="p"
            sx={{
              fontSize: "12px",
              textAlign: "center",
              marginBottom: "10px",
              marginTop: "25px",
            }}
          >
            © Commonwealth Securities Limited ABN 60 067 254 399 AFSL 238814
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            marginX="auto"
            sx={{ width: { sm: "460px", xs: "390px" } }}
          >
            <Box display="flex" component="div" alignItems="center">
              <Link sx={{ fontSize: "12px" }}>Important information</Link>
              <Link component="i">
                <CiShare1 />
              </Link>
            </Box>
            <Box display="flex" component="div" alignItems="center">
              <Link sx={{ fontSize: "12px" }}>Financial services guide </Link>
              <Link component="i">
                <CiShare1 />
              </Link>
            </Box>
            <Box display="flex" component="div" alignItems="center">
              <Link sx={{ fontSize: "12px" }}>Privacy statement </Link>
              <Link component="i">
                <CiShare1 />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        onClick={() => navigate("/")}
        sx={{
          border: "1px solid orange",
          width: "80px",
          height: "80px",
          position: "fixed",
          bottom: "10px",
          right: "10px",
          backgroundColor: "rgb(255,189,0)",
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <HomeIcon />
        Home
      </Box>
    </Card>
  );
};

export default CommSec;
