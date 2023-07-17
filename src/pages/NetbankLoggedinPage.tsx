import { Paper } from "@mui/material";
import LoggedinTopHeader from "../components/LogonGroup/LoggedinTopHeader";
import LoggedIn from "../components/LogonGroup/LoggedIn";

const NetbankLoggedinPage = () => {
  return (
    <Paper elevation={0}>
      <LoggedinTopHeader />
      <LoggedIn />
    </Paper>
  );
};

export default NetbankLoggedinPage;
