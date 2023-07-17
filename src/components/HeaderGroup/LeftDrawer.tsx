import { NavLink } from "react-router-dom";
import {
  Box,
  Stack,
  Button,
  MenuList,
  MenuItem,
  Drawer,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
export interface ShowStateType {
    isShowDrawer:boolean, 
    setIsShowDrawer:(value:boolean)=>void
}

const LeftDrawer = ({isShowDrawer, setIsShowDrawer}:ShowStateType) => {
  return (
    <Stack>
      <Drawer
        anchor="left"
        open={isShowDrawer}
        onClose={() => setIsShowDrawer(false)}
      >
        <Box
          sx={{
            minWidth: "100vw",
            minHeight: "100vh",
            position: "relative",
            bgcolor: "rgb(35, 31, 32)",
            fontFamily: "arial,sans-serif",
          }}
        >
          <Button
            onClick={() => setIsShowDrawer(false)}
            variant="text"
            sx={{
              position: "absolute",
              top: "10px",
              right: 0,
              zIndex: "100",
            }}
          >
            <CloseIcon
              sx={{
                color: "white",
                fontSize: "26px",
              }}
            />
          </Button>
          <MenuList
            sx={{ color: "white", paddingTop: "50px", paddingX: "15px" }}
          >
            <MenuItem
              sx={{
                paddingY: "20px",
                color: "white",
                textDecoration: "none",
              }}
            >
              <NavLink to="banking">Banking</NavLink>
            </MenuItem>
            <MenuItem sx={{ paddingY: "20px" }}>
              <NavLink to="home-loan">Home loans</NavLink>
            </MenuItem>
            <MenuItem sx={{ paddingY: "20px" }}>
              <NavLink to="insurance">Insurance</NavLink>
            </MenuItem>
            <MenuItem sx={{ paddingY: "20px" }}>
              <NavLink to="investing-and-supper">Investing & super</NavLink>
            </MenuItem>
            <MenuItem sx={{ paddingY: "20px" }}>
              <NavLink to="business">Business</NavLink>
            </MenuItem>
            <MenuItem sx={{ paddingY: "20px" }}>
              <NavLink to="institutional">Institutional</NavLink>
            </MenuItem>
            <Divider sx={{ borderColor: "white" }} />
            <MenuItem sx={{ paddingY: "20px" }}>
              <NavLink to="locate-us">Locate us</NavLink>
            </MenuItem>
            <MenuItem sx={{ paddingY: "20px" }}>
              <NavLink to="help-and-support">Help & support</NavLink>
            </MenuItem>
          </MenuList>
        </Box>
      </Drawer>
    </Stack>
  );
};

export default LeftDrawer;
