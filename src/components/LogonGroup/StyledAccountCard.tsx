import { Box, IconButton, Typography, styled } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import steppay from '../../assets/Logon/steppay.svg'
export  interface AccountProps {
  account: {
    account: string;
    accountNumber: string;
    balance: number;
    available: number;
 
  };
}

const StyledAccountCard = ({ account }: AccountProps) => {
  const StyledAccountBox = styled(Box)(({ theme }) => ({
    justifyContent: "space-between",
    borderBottom: "1px solid rgb(200,200,200)",

    paddingLeft: 20,
    paddingRight: 10,
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      height: "90px",
      alignItems: "center",
    },
    [theme.breakpoints.only("xs")]: {
      display: "block",
      height: "138px",
    },
  }));
  const ColoredTypography = styled(Typography)(() => ({
    color: "rgb(111,109,110)",
  }));
  return (
    <StyledAccountBox
      sx={{
        paddingTop: {
          sm: "0",
          xs: "10px",
        },
      }}
    >
      <Box
        flex={3}
        display="flex"
        sx={{
          alignItems: "center",
          justifyContent: {
            sm: "flex-start",
            xs: "space-between",
          },
          flexDirection: {
            sm: "row",
            xs: "row-reverse",
          },
        }}
      >
        <Box component="img" alt="everydayaccount" sx={{marginRight:'5px'}} src={steppay}></Box>
        <Box >
          <Typography fontWeight="bold">{account.account}</Typography>
          <ColoredTypography>{account.accountNumber}</ColoredTypography>
        </Box>
      </Box>

      <Box
        flex={2}
        sx={{
          display: {
            md: "block",
            sm: "flex",
            xs: "flex",
          },
          justifyContent: {
            sm: "space-between",
            xs: "space-between",
          },
        }}
      >
        <Box
          sx={{
            display: { md: "flex", sm: "block", xs: "block" },
            justifyContent: {
              md: "space-between",
            },
          }}
        >
          <ColoredTypography>Balance</ColoredTypography>
          <ColoredTypography>Available</ColoredTypography>
        </Box>
        <Box
          sx={{
            display: { md: "flex", sm: "block" },
            justifyContent: {
              md: "space-between",
            },
          }}
        >
          <ColoredTypography>${account.balance}</ColoredTypography>
          <Typography fontWeight="bold">${account.available}</Typography>
        </Box>
      </Box>

      <IconButton
        sx={{
          display: {
            sm: "block",
            xs: "none",
          },
        }}
      >
        <MoreHorizIcon />
      </IconButton>
    </StyledAccountBox>
  );
};

export default StyledAccountCard;
