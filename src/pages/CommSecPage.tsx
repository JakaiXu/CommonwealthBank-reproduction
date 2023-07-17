import { Paper } from "@mui/material";
import CommSec from "../components/LogonGroup/CommSec";

const CommSecPage = () => {
  return (
    <Paper
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <CommSec />
    </Paper>
  );
};

export default CommSecPage;
