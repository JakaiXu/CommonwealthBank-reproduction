import { Lock } from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
type OpenState = {
  isShowDrawer: boolean;
  setIsShowDrawer: (value: boolean) => void;
};
const MenuDrawer = ({ isShowDrawer, setIsShowDrawer }: OpenState) => {
  const navigate = useNavigate();
  return (
    <Drawer
      sx={{ border: "1px solid red" }}
      open={isShowDrawer}
      onKeyDown={() => setIsShowDrawer(false)}
      onClose={() => setIsShowDrawer(false)}
    >
      <Box
        sx={{
          height: "100vh",
          width: 350,
          border: "1px solid rgb(200,200,200)",
          bgcolor: "rgb(56,56,59)",
          display: {
            lg: "none",
            md: "block",
          },
        }}
        role="presentation"
      >
        <List sx={{ paddingY: "0", bgcolor: "white" }}>
          {[
            "My home",
            "View accounts",
            "Transfer & BPAY",
            "Offers & apply",
            "Settings",
            "Inbox",
          ].map((text) => (
            <ListItem
              key={text}
              disablePadding
              sx={{ border: "1px solid rgb(200,200,200)" }}
            >
              <ListItemButton>
                <Typography fontSize="14px"> {text}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List sx={{ paddingY: "0" }}>
          <ListItem
            disablePadding
            sx={{
              border: "1px solid rgb(200,200,200)",
              bgcolor: "black",
              color: "white",
            }}
          >
            <ListItem>
              <Typography fontSize="14px">NetBank</Typography>
            </ListItem>
          </ListItem>
        </List>
        <List sx={{ paddingY: "0" }}>
          <ListItem
            disablePadding
            sx={{
              border: "1px solid rgb(200,200,200)",
              bgcolor: "black",
              color: "white",
            }}
          >
            <ListItemButton>
              <ListItemIcon
                sx={{ color: "white", marginX: 0 }}
                onClick={() => navigate("/commsec-logon")}
              >
                <Lock fontSize="small" />
                <Typography fontSize="14px">Log off</Typography>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default MenuDrawer;
