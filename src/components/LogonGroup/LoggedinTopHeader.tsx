import {
  Stack,
  InputBase,
  Typography,
  Box,
  Badge,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  badgeClasses,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material";
import { Print, Help, Lock, Menu, Mail } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logoNav from "../../assets/Logon/logoNav.svg";
import { useState } from "react";
import MenuDrawer from "./MenuDrawer";
const LoggedinTopHeader = () => {
  const [isShowDrawer, setIsShowDrawer] = useState(false);
  const navigate = useNavigate();
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.85),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.75),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "330px",
      height: "35px",
    },
    [theme.breakpoints.down("lg")]: {
      backgroundColor: alpha(theme.palette.common.white, 1),
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
    color: "black",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "350px",
      },
    },
  }));
  const IconWrapper = styled("i")(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: "100%",
    display: "flex",
    alignItems: "center",
  }));
  const StyledTypography = styled(Typography)(({ theme }) => ({
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  }));
  const StyledTypographySmall = styled(Typography)(({ theme }) => ({
    fontSize: "12px",

    [theme.breakpoints.only("md")]: {
      display: "flex",
    },
    [theme.breakpoints.not("md")]: {
      display: "none",
    },
  }));
  const IconWrapperSmall = styled("div")(({ theme }) => ({
    height: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    [theme.breakpoints.down("lg")]: {
      display: "flex",
    },
  }));
  const StyledBox = styled(Box)(({ theme }) => ({
    borderLeft: "1px solid rgb(200,200,200)",
    
    [theme.breakpoints.only("md")]: {
      height: "60px",
      width: "60px",
    },
    [theme.breakpoints.down("md")]: {
      height: "45px",
      width: "45px",
    },

    alignItems: "center",
    justifyContent: "center",
  }));

  return (
    <Stack>
      <Stack
        direction="row"
        sx={{
          justifyContent: "center",
          backgroundColor: {
            lg: "black",
            md: "rgb(235,235,235)",
            sm: "rgb(235,235,235)",
            xs: "rgb(235,235,235)",
          },
          color: {
            lg: "white",
            md: "black",
          },
          height: {
            lg: "40px",
            md: "60px",
            sm: "45px",
          },
          width: "100%",
        }}
      >
        {isShowDrawer && (
          <MenuDrawer
            isShowDrawer={isShowDrawer}
            setIsShowDrawer={setIsShowDrawer}
          />
        )}
        <Stack direction="row" width="1140px" alignItems="center">
          <StyledTypography alignItems="center">
            <IconWrapper>
              <Print />
            </IconWrapper>
            Print
          </StyledTypography>
          <StyledTypography
            sx={{
              marginRight: "350px",
              bgcolor: "rgb(255,204,0)",
              color: "black",
              height: "100%",
              paddingX: 2,
            }}
          >
            NetBank
          </StyledTypography>
          <Search
            sx={{
              display: {
                lg: "flex",
                md: "none",
                sm: "none",
                xs: "none",
              },
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search NetBank"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <StyledTypography>
            <IconWrapper>
              <Help />
            </IconWrapper>
            Help
          </StyledTypography>
          <StyledTypography
            onClick={() => navigate("/commsec-logon")}
            sx={{
              bgcolor: "rgb(255,204,0)",
              color: "black",
              height: "100%",
              paddingX: 2,
            }}
          >
            <IconWrapper>
              <Lock />
            </IconWrapper>
            Log off
          </StyledTypography>

          <Stack
            sx={{
              display: {
                lg: "none",
                md: "flex",
              },
            }}
            direction="row"
            width="100%"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" width="100%">
              <IconWrapperSmall
                onClick={() => setIsShowDrawer(!isShowDrawer)}
                sx={{ marginLeft: 2 }}
              >
                <Menu />
                <StyledTypographySmall>Menu</StyledTypographySmall>
              </IconWrapperSmall>
              <Box
                component="img"
                src={logoNav}
                sx={{
                  marginLeft: {
                    md: "20px",
                  },
                  marginX: {
                    sm: "auto",
                    xs: "auto",
                  },
                  height: { md: "40px", sm: "30px", xs: "30px" },
                }}
              />
            </Stack>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Search
                sx={{
                  marginTop: "3px",
                  display: {
                    lg: "none",
                    md: "flex",
                    sm: "none",
                    xs: "none",
                  },
                }}
              >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search NetBank"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <StyledBox
                sx={{
                  display: {
                    md: "none",
                    sm: "flex",
                    xs: "flex",
                  },
                }}
              >
                <IconWrapperSmall>
                  <SearchIcon />
                </IconWrapperSmall>
              </StyledBox>
              <StyledBox>
                <IconWrapperSmall>
                  <Badge sx={{ witdh: "5px" }} variant="dot" color="primary">
                    <Mail />
                  </Badge>
                  <StyledTypographySmall>Inbox</StyledTypographySmall>
                </IconWrapperSmall>
              </StyledBox>
              <StyledBox sx={{borderRight:'1px solid rgb(200,200,200)'}}>
                <IconWrapperSmall>
                  <Lock />
                  <StyledTypographySmall>Log off</StyledTypographySmall>
                </IconWrapperSmall>
              </StyledBox>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          height: "80px",
          bgcolor: "rgb(235,235,235)",
          display: { lg: "flex", md: "none", sm: "none", xs: "none" },
        }}
      >
        <Stack
          direction="row"
          width="1100px"
          sx={{
            marginX: "auto",
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box component="img" src={logoNav} sx={{ height: "75%" }}></Box>
          <Box sx={{ display: "flex" }}>
            <List sx={{ display: "flex" }}>
              {[
                "My home",
                "View accounts",
                "Transfer & BPAY",
                "Offers & apply",
                "Settings",
                //   "Inbox",
              ].map((text) => (
                <ListItem
                onClick={() => navigate('/')}
                  disablePadding
                  key={text}
                  sx={{
                    width: "max-content",
                    height: "80px",
                    borderLeft: "1px solid rgb(200,200,200)",
                  }}
                >
                  <ListItemButton>
                    <Typography fontSize="16px">{text}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <List
              sx={{
                paddingX: 0,
              }}
            >
              <ListItem
                disablePadding
                sx={{
                  width: "max-content",
                  height: "80px",
                  borderRight: "1px solid rgb(200,200,200)",
                  borderLeft: "1px solid rgb(200,200,200)",
                }}
              >
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                      alignItems: "center",
                      color: "black",
                    }}
                  >
                    <Badge
                      variant="dot"
                      color="primary"
                      sx={{
                        [`& .${badgeClasses.dot}`]: {
                          width: 18,
                          height: 18,
                          border: "2px solid white",
                          position: "absolute",
                          right: 2,
                          top: 3,
                          borderRadius: "50%",
                        },
                      }}
                    >
                      <Mail />
                    </Badge>
                    <Typography fontSize="12px">Inbox</Typography>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LoggedinTopHeader;
