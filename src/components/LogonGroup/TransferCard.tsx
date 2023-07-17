import { useState } from "react";
import {
  Box,
  Typography,
  styled,
  Stack,
  Button,
  FormControl,
  Select,
  MenuItem,
  Input,
} from "@mui/material";
import transferIcon from "../../assets/Logon/pictogramTransfer40.99cd368e.svg";
import { motion } from "framer-motion";
const TransferCard = () => {
  const [activeL, isActiveL] = useState(true);
  const [activeR, isActiveR] = useState(false);
  const StyledButton = styled("div")(() => ({
    borderBottom: "4px solid black",
    width: "50%",
    textAlign: "center",
    paddingBottom: "10px",
  }));
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, transformOrigin: "200px 400px" }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 20,
        duration: 0.8,
        delay: 0.5,
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          marginBottom: "35px",
          height: {
            lg: "450px",
            md: "370px",
            sm: "370px",
            xs: "450px",
          },
          paddingX: "30px",
          paddingTop: "20px",
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <Typography fontWeight="bold">Quick pay</Typography>
          <Box component="img" src={transferIcon} sx={{ width: "40px" }}></Box>
        </Stack>
        <Stack direction="row">
          <StyledButton
            onClick={() => {
              isActiveR(!activeR), isActiveL(!activeL);
            }}
            sx={{
              color: activeL ? "black" : "gray",
              borderBottom: activeL ? "4px solid black" : "1px solid gray",
            }}
          >
            Transfer
          </StyledButton>
          <StyledButton
            onClick={() => {
              isActiveL(!activeL), isActiveR(!activeR);
            }}
            sx={{
              color: activeR ? "black" : "gray",
              borderBottom: activeR ? "4px solid black" : "1px solid gray",
            }}
          >
            BPAY
          </StyledButton>
        </Stack>
        <FormControl
          sx={{
            marginTop: "15px",
            width: { lg: "100%", md: "48%", sm: "48%", xs: "100%" },
            marginRight: {
              lg: "0",
              md: "10px",
              sm: "10px",
              xs: 0,
            },
          }}
        >
          <Typography sx={{ marginBottom: "10px", fontWeight: "bold" }}>
            From
          </Typography>
          <Select
            sx={{
              height: "40px",
              borderRadius: "0",
              border: "1px solid black",
            }}
            //   value={}
            //   onChange={}

            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="Bone">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{
            marginTop: "15px",
            width: { lg: "100%", md: "47%", sm: "47%", xs: "100%" },
            marginLeft: {
              lg: "0",
              md: "10px",
              sm: "10px",
              xs: 0,
            },
          }}
        >
          <Typography sx={{ marginBottom: "10px", fontWeight: "bold" }}>
            To
          </Typography>
          <Select
            sx={{
              height: "40px",
              borderRadius: "0",
              border: "1px solid black",
            }}
            //   value={}
            //   onChange={}

            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="Bone">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{
            marginTop: "15px",
            width: { lg: "100%", md: "47%", sm: "47%", xs: "100%" },
            marginRight: {
              lg: "0",
              md: "45%",
              sm: "45%",
              xs: 0,
            },
          }}
        >
          <Typography sx={{ marginBottom: "10px", fontWeight: "bold" }}>
            Amount
          </Typography>
          <Input
            startAdornment="$"
            disableUnderline={true}
            sx={{ border: "1px solid black", paddingX: "10px" }}
          />
        </FormControl>
        <Button
          variant="outlined"
          sx={{
            border: "1px solid black",
            color: "black",
            borderRadius: "50px",
            width: "150px",
            textTransform: "none",
            marginTop: "20px",
          }}
        >
          Next
        </Button>
      </Box>
    </motion.div>
  );
};

export default TransferCard;
