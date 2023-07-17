import { Box, Typography, styled, Link } from "@mui/material";
import calenderIcon from "../../assets/Logon/pictogramCalendar40.1882d62f.svg";

import { motion } from "framer-motion";
import TransferCard from "./TransferCard";
const GrowCardRightThree = () => {
  const StyledBoxGrow = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    [theme.breakpoints.up("md")]: {
      width: "340px",
      height: "140px",
    },
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      height: "140px",
    },
  }));

  return (
    <Box position="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, transformOrigin: "200px 100px" }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 20,
          duration: 0.8,
          delay: 0.5,
        }}
      >
        <StyledBoxGrow
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "30px",
            marginBottom: "35px",
          }}
        >
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                lineHeight: "400%",
              }}
            >
              Bills & upcoming payments
            </Typography>
            <Typography
              variant="body2"
              sx={{
                lineHeight: "100%",
              }}
            >
              No payments due in the next 7 days
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: "400%" }}>
              <Link>View all</Link>
            </Typography>
          </Box>
          <Box
            component="img"
            src={calenderIcon}
            sx={{
              width: "40px",
              position: "absolute",
              top: "30px",
              right: "30px",
            }}
          ></Box>
        </StyledBoxGrow>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, transformOrigin: "200px 100px" }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 20,
          duration: 0.8,
          delay: 0.5,
        }}
      >
        <StyledBoxGrow
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "30px",
            marginBottom: "35px",
          }}
        >
          <Box>
            <Typography
              variant="body2"
              sx={{
                marginTop: "30px",
              }}
            >
              Visiting London, Paris or somewhere else? Travel smart with a
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: "400%" }}>
              <Link>Travel Money Card</Link>
            </Typography>
          </Box>
        </StyledBoxGrow>
      </motion.div>
      <TransferCard />
    </Box>
  );
};

export default GrowCardRightThree;
