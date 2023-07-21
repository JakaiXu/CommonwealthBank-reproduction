import React, { useState } from "react";
import { useCreateAccountMutation, useGetClientsQuery } from "../../store";
import {
  Box,
  Typography,
  styled,
  Select,
  MenuItem,
  OutlinedInput,
  Button,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";

const StyledBoxGrow = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  [theme.breakpoints.up("md")]: {
    width: "340px",
    height: "340px",
  },
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    height: "340px",
  },
}));
const CreateAccountCard = () => {
  const [accountName, setAccountName] = useState("");
  const [accountNum, setAccountNum] = useState("");

  const [balance, setBalance] = useState<number>(0);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const { isSuccess, data } = useGetClientsQuery({
    pollingInterval: 3000,
    refetchOnMountOrArgChange: true,
    skip: false,
  });
  const [createAccount] = useCreateAccountMutation();
  const handleFocus = () => {
    setIsInputFocused(true);
  };
  const handleCreateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSuccess && data.length > 3) {
      return;
    } else {
      createAccount({
        data: {
          account: accountName,
          accountNumber: accountNum,
          balance: balance,
          available: balance,
        },
      });
      setAccountName("");
      setAccountNum("");
      setBalance(0);
      setIsInputFocused(false);
    }
  };

  return (
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
        flexDirection="column"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "30px",
          marginBottom: "35px",
        }}
      >
        <form onSubmit={handleCreateSubmit}>
          <Typography sx={{ fontWeight: "bold", marginTop: "20px" }}>
            Create your account
          </Typography>
          <Box sx={{ paddingBottom: "20px" }}>
            {isSuccess && data.length > 3 && isInputFocused ? (
              <Alert
                severity="error"
                sx={{
                  display: "flex",
                  padding: "0",
                  fontSize: "12px",
                  width: "90%",
                }}
              >
                {/* <AlertTitle>Error</AlertTitle> */}
                You can only create 4 accounts-
                <strong>Delete an account first!</strong>
              </Alert>
            ) : (
              <Typography>Account name</Typography>
            )}
            <Select
              onFocus={handleFocus}
            
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              //   defaultValue='Smart Access'
              placeholder="Please Select a type of account"
              sx={{ height: "40px", width: "90%", marginBottom: "10px" }}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="Smart Access">Smart Access</MenuItem>
              <MenuItem value="NetBank Saver">NetBank Saver</MenuItem>
              <MenuItem value="StepPay">StepPay</MenuItem>
              <MenuItem value="Insurance Saver">Insurance Saver</MenuItem>
            </Select>
            <Typography>Account number</Typography>
            <OutlinedInput
            disabled={isSuccess && data.length > 3}
              value={accountNum}
              type="text"
              onChange={(e) => setAccountNum(e.target.value)}
              sx={{ height: "40px", width: "90%" }}
            ></OutlinedInput>
            <Typography>Balance</Typography>
            <OutlinedInput
            disabled={isSuccess && data.length > 3}
              value={balance}
              onChange={(e) => setBalance(+e.target.value)}
              sx={{ height: "40px", width: "90%" }}
            ></OutlinedInput>
          </Box>{" "}
          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "rgb(255,204,0)",
              color: "black",
            }}
          >
            Create
          </Button>
        </form>
      </StyledBoxGrow>
    </motion.div>
  );
};

export default CreateAccountCard;
