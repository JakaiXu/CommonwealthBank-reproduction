import {
  Stack,
  Box,
  Typography,
  Drawer,
  Button,
  Divider,
  MenuList,
  MenuItem,
} from "@mui/material";
import { ShowStateType } from "./LeftDrawer";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
const RightDrawer = ({ isShowDrawer, setIsShowDrawer }: ShowStateType) => {
  return (
    <Stack>
      <Drawer
        anchor="right"
        open={isShowDrawer}
        onClose={() => setIsShowDrawer(false)}
      >
        <Box
          sx={{
            width: {
              xs: "100vw",
              md: "400px",
            },
            height: "100%",
            position: "relative",
            backgroundColor: "transparent",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "20%",
              heighgt: "100%",
            }}
          >
            <Button
              sx={{
                width: "100%",
                height: "80px",
                borderRadius: "0",
              }}
              onClick={() => setIsShowDrawer(false)}
            >
              <CloseIcon sx={{ color: "rgb(79,76,77)", fontSize: "26px" }} />
            </Button>
          </Box>
          <MenuList
            sx={{
              position: "absolute",
              right: 0,
              width: "80%",
              height: "100%",
              backgroundColor: "transparent",
            }}
          >
            <Link to="commsec-logon">
              <MenuItem
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "bold", lineHeight: "50px" }}>
                  NetBank log on
                </Typography>
                <ChevronRightIcon fontSize="large" />
              </MenuItem>
            </Link>
            <Divider />
            <Link  to="commsec-logon">
              <MenuItem
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "bold", lineHeight: "50px" }}>
                  CommBiz log on
                </Typography>
                <ChevronRightIcon fontSize="large" />
              </MenuItem>
            </Link>
            <Divider />
            <Link to="commsec-logon">
              <MenuItem
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "bold", lineHeight: "50px" }}>
                  CommSec log on
                </Typography>
                <ChevronRightIcon fontSize="large" />
              </MenuItem>
            </Link>
            <Divider />
          </MenuList>
        </Box>
      </Drawer>
    </Stack>
  );
};

export default RightDrawer;
