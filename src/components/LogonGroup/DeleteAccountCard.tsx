import { useState } from "react";
import { motion } from "framer-motion";
import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useDeleteAccountMutation, useGetClientsQuery } from "../../store";
import { ItemProps } from "./TransferCard";
const StyledBoxDelete = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  [theme.breakpoints.up("md")]: {
    width: "340px",
    height: "180px",
  },
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    height: "180px",
  },
}));
const DeleteAccountCard = () => {
  const [id, setId] = useState<number | null>(null);
  const [resetKey, setResetKey] = useState(0);

  const { data } = useGetClientsQuery({
    pollingInterval: 3000,
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  const [deleteAccount] = useDeleteAccountMutation();

  const handleDelete = () => {
    deleteAccount(id);
    setId(null);
    setResetKey((prevKey) => prevKey + 1);
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
      <StyledBoxDelete
        key={resetKey}
        sx={{ marginBottom: "35px", paddingLeft: "30px", paddingTop: "15px" }}
      >
        <Typography sx={{ fontWeight: "bold", marginY: "10px" }}>
          Delete an account
        </Typography>
        <Box sx={{ paddingBottom: "10px" }}>
          <Autocomplete
            isOptionEqualToValue={(option, value) => option.id === value.id}
            id="account"
            options={data || []}
            autoHighlight
            onChange={(_, value) => value && setId(value.id)}
            getOptionLabel={(option: ItemProps) =>
              option.attributes.accountNumber
            }
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{
                  border: { sm: "1px solid ", xs: "none" },
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
                sx={{ width: "90%" }}
                {...params}
                label="Choose an account"
                inputProps={{
                  ...params.inputProps,
                }}
              />
            )}
          />
        </Box>
        <Button
          onClick={handleDelete}
          variant="contained"
          sx={{
            bgcolor: "rgb(255,204,0)",
            color: "black",
          }}
        >
          Delete
        </Button>
      </StyledBoxDelete>
    </motion.div>
  );
};

export default DeleteAccountCard;
