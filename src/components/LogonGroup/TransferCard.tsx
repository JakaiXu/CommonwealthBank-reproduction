import { useState } from "react";
import {
  Box,
  Typography,
  styled,
  Stack,
  Button,
  FormControl,
  Input,
  Autocomplete,
  TextField,
  FormHelperText,
} from "@mui/material";
import transferIcon from "../../assets/Logon/pictogramTransfer40.99cd368e.svg";
import { motion } from "framer-motion";
import { useGetClientsQuery, useUpdateAccountMutation } from "../../store";

export interface ItemProps {
  id: number;
  attributes: {
    account: string;
    accountNumber: string;
    balance: number;
    available: number;
  };
}
const StyledButton = styled("div")(() => ({
  borderBottom: "4px solid black",
  width: "50%",
  textAlign: "center",
  paddingBottom: "10px",
}));
const TransferCard = () => {
  const [idFrom, setIdFrom] = useState<number | null>(null);
  const [idTo, setIdTo] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [amount, setAmount] = useState<number>(0);
  const [activeL, isActiveL] = useState(true);
  const [activeR, isActiveR] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [resetKey, setResetKey] = useState(0);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const { isSuccess, data } = useGetClientsQuery({
    pollingInterval: 3000,
    refetchOnMountOrArgChange: true,
    skip: false,
  });
  const [updateFnFrom] = useUpdateAccountMutation();
  const [updateFnTo] = useUpdateAccountMutation();
  const handleDeleteFrom = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Delete") {
      setIdFrom(null);
    }
  };
  const handleDeleteTo = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Delete") {
      setIdTo(null);
    }
  };
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };
  const handleTransfer = () => {
    if (idFrom === null || idTo === null || amount === null) {
      setError("ID or amount is null");
    }
    const fromAccount =
      isSuccess && data.find((item: ItemProps) => item.id === idFrom);
    const toAccount =
      isSuccess && data.find((item: ItemProps) => item.id === idTo);
    if (!fromAccount || !toAccount) {
      setError("Account not found");
    } else if (fromAccount == toAccount) {
      setError("Can't transfer money from the same account");
    } else if (fromAccount.attributes.balance < amount) {
      setError("Not enough balance");
    } else
      try {
        updateFnFrom({
          id: idFrom,
          attributes: {
            balance: fromAccount.attributes.balance - amount,
            available: fromAccount.attributes.balance - amount,
          },
        });
        updateFnTo({
          id: idTo,
          attributes: {
            balance: toAccount.attributes.balance + amount,
            available: toAccount.attributes.balance + amount,
          },
        });
      } catch (error) {
        console.error("API call failed", error);
      }
    setAmount(0);
    setInputValue("");
    setResetKey((prevKey) => prevKey + 1);
    setIsInputFocused(false);
  };

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
        key={resetKey}
        sx={{
          bgcolor: "white",
          marginBottom: "35px",
          height: {
            lg: "480px",
            md: "380px",
            sm: "380px",
            xs: "480px",
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
          <Autocomplete
            onFocus={handleInputFocus}
            id="account"
            options={data || []}
            autoHighlight
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onChange={(_, value) => value && setIdFrom(value.id)}
            getOptionLabel={(option: ItemProps) =>
              option.attributes.accountNumber
            }
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{
                  border: { sm: "1px solid black", xs: "none" },
                  paddingY: "0",
                  marginY: "0",
                }}
                {...props}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: { sm: "150px", xs: "40px" },
                    paddingY: { sm: "20px", xs: "0" },
                    display: {
                      sm: "block",
                      xs: "flex",
                    },
                    alignItems: { sm: "normal", xs: "center" },
                    justifyContent: { sm: "normal", xs: "space-between" },
                  }}
                >
                  <Typography fontWeight="bold">
                    {option.attributes.account}
                  </Typography>
                  <Typography
                    sx={{
                      marginBottom: { sm: "20px", xs: "0" },
                      marginTop: { sm: "10px", xs: "0" },
                    }}
                  >
                    {option.attributes.accountNumber}
                  </Typography>
                  <Box
                    sx={{
                      display: { sm: "flex", xs: "block" },
                      justifyContent: { sm: "space-between", xs: "normal" },
                    }}
                  >
                    <Typography
                      sx={{
                        display: {
                          sm: "block",
                          xs: "none",
                        },
                      }}
                    >
                      Avaiable
                    </Typography>
                    <Typography fontWeight="bold">
                      ${option.attributes.available}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                // onKeyDown={handleDeleteFrom}
                {...params}
                label="Choose an account"
                inputProps={{
                  ...params.inputProps,
                  onKeyDown: handleDeleteFrom,
                }}
              />
            )}
          />
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
          <Autocomplete
          onFocus={handleInputFocus}
            id="account"
            options={data || []}
            autoHighlight
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onChange={(_, value) => value && setIdTo(value.id)}
            getOptionLabel={(option: ItemProps) =>
              option.attributes.accountNumber
            }
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{
                  border: { sm: "1px solid black", xs: "none" },
                  paddingY: "0",
                  marginY: "0",
                }}
                {...props}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: { sm: "150px", xs: "40px" },
                    paddingY: { sm: "20px", xs: "0" },
                    display: {
                      sm: "block",
                      xs: "flex",
                    },
                    alignItems: { sm: "normal", xs: "center" },
                    justifyContent: { sm: "normal", xs: "space-between" },
                  }}
                >
                  <Typography fontWeight="bold">
                    {option.attributes.account}
                  </Typography>
                  <Typography
                    sx={{
                      marginBottom: { sm: "20px", xs: "0" },
                      marginTop: { sm: "10px", xs: "0" },
                    }}
                  >
                    {option.attributes.accountNumber}
                  </Typography>
                  <Box
                    sx={{
                      display: { sm: "flex", xs: "block" },
                      justifyContent: { sm: "space-between", xs: "normal" },
                    }}
                  >
                    <Typography
                      sx={{
                        display: {
                          sm: "block",
                          xs: "none",
                        },
                      }}
                    >
                      Avaiable
                    </Typography>
                    <Typography fontWeight="bold">
                      ${option.attributes.available}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose an account"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                inputProps={{
                  ...params.inputProps,
                  onKeyDown: handleDeleteTo,
                }}
              />
            )}
          />
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
            value={amount}
            onFocus={handleInputFocus}
            onChange={(e) => setAmount(+e.target.value)}
            startAdornment="$"
            disableUnderline={true}
            sx={{ border: "1px solid black", paddingX: "10px" }}
          />
        </FormControl>
        <Button
          onClick={handleTransfer}
          type="submit"
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
        <FormHelperText sx={{ color: "red" }}>
          {!isInputFocused && error}
        </FormHelperText>
      </Box>
    </motion.div>
  );
};

export default TransferCard;
