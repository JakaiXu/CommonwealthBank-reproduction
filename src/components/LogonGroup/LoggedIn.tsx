import {
  Box,
 
  Link,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import everydayaccounts from "../../assets/transaction_accounts.svg";
import international_payments from "../../assets/international_payments.svg";
import steppay from "../../assets/Logon/steppay.svg";
import StyledAccountCard from "./StyledAccountCard";
import GrowCardLeftOne from "./GrowCardLeftOne";
import GrowCardRightThree from "./GrowCardRightThree";
import BottomCard from "./BottomCard";
const accountDATA = [
  {
    account: "Smart Access",
    accountNumber: "000-000 1234-4321",
    balance: 1000,
    available: 1000,
    img: everydayaccounts,
  },
  {
    account: "NetBank Saver",
    accountNumber: "000-000 6789-9876",
    balance: 10000,
    available: 10000,
    img: international_payments,
  },
  {
    account: "Smart Saver",
    accountNumber: "000-111 1234-5678",
    balance: 8000,
    available: 8000,
    img: everydayaccounts,
  },
  {
    account: "StepPay",
    accountNumber: "5555 7777-4321-1234",
    balance: 800,
    available: 800,
    img: steppay,
  },
];

const LoggedIn = () => {
  const StyleTitle = styled("div")(({ theme }) => ({
    fontSize: "24px",
    fontWeight: "bold",
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      top: "60px",
      left: `calc((100vw - 1140px)/2)`,
    },
    [theme.breakpoints.only("md")]: {
      position: "absolute",
      top: "60px",
      left: `calc((100vw - 94%)/2)`,
    },
    [theme.breakpoints.only("sm")]: {
      position: "absolute",
      top: "50px",
      left: `calc((100vw - 92%)/2)`,
    },
    [theme.breakpoints.only("xs")]: {
      position: "absolute",
      top: "50px",
      left: `calc((100vw - 90%)/2)`,
    },
  }));
  const ColoredTypography = styled(Typography)(() => ({
    color: "rgb(111,109,110)",
  }));
  const BoldedTypography = styled(Typography)(() => ({
    fontWeight: "bold",
    textAlign: "end",
  }));
  return (
    <Stack sx={{ backgroundColor: "rgb(244,244,244)", position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          height: "200px",
          background:
            "linear-gradient(to right, rgb(251,232,29) 10% , rgb(255,208,0) 100%)",
        }}
      >
        <StyleTitle>Welcome Buddy!</StyleTitle>
      </Box>
      <Box
        sx={{
          gap: {
            lg: "30px",
            md: "0",
          },
          background: "transparent",
          marginTop: -10,
          width: {
            xl: "1140px",
            lg: "1140px",
            md: "94%",
            sm: "92%",
            xs: "90%",
          },
          marginX: "auto",
          display: {
            lg: "flex",
          },
          justifyContent: "space-between",
          height: "max-content",
        }}
      >
        <Box
          sx={{
            width: {
              lg: "760px",
              md: "100%",
              sm: "100%",
              xs: "100%",
            },
          }}
        >
          <Box
            flex={2}
            sx={{
              width: {
                lg: "760px",
                md: "100%",
                sm: "100%",
                xs: "100%",
              },
              height: {
                sm: "554px",
                xs: "810px",
              },
              backgroundColor: "white",
            }}
          >
            {accountDATA.map((account) => (
              <StyledAccountCard
                key={account.accountNumber}
                account={account}
              />
            ))}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "50px",
                borderBottom: "1px solid rgb(200,200,200)",
                paddingLeft: "30px",
              }}
            >
              <Typography>
                <Link>Apply for a new product</Link>
              </Typography>
            </Box>

            <Box
              sx={{
                display: { sm: "block", xs: "flex" },
                justifyContent: {
                  sm: "normal",
                  xs: "space-between",
                },
                paddingX: "30px",
                paddingTop: "20px",
                height: {
                  sm: "90px",
                  xs: "120px",
                },
                borderBottom: "1px solid rgb(200,200,200)",
              }}
            >
              <Box
                sx={{
                  display: {
                    sm: "flex",
                    xs: "block",
                  },
                  justifyContent: "space-between",
                }}
              >
                <ColoredTypography>Total Credits</ColoredTypography>
                <ColoredTypography>Total Debits</ColoredTypography>
                <ColoredTypography>Net position</ColoredTypography>
              </Box>

              <Box
                sx={{
                  display: {
                    sm: "flex",
                    xs: "block",
                  },
                  justifyContent: "space-between",
                }}
              >
                <BoldedTypography>
                  ${accountDATA.reduce((acc, cur) => acc + cur.balance, 0)}
                </BoldedTypography>
                <BoldedTypography>${0}</BoldedTypography>
                <BoldedTypography>
                  ${accountDATA.reduce((acc, cur) => acc + cur.available, 0)}
                </BoldedTypography>
              </Box>
            </Box>
            <Box
              sx={{
                paddingTop: "15px",
                display: {
                  sm: "flex",
                  xs: "block",
                },
                alignItems: {
                  sm: "center",
                  xs: "normal",
                },
              }}
            >
              <Typography
                sx={{
                  paddingLeft: "30px",
                  marginRight: "20px",
                }}
              >
                Your assets & liablitites
              </Typography>
              <Typography
                sx={{
                  paddingLeft: {
                    sm: "0",
                    xs: "32px",
                  },
                  marginTop: {
                    sm: "0",
                    xs: "10px",
                  },
                }}
              >
                <Link>View portfolio</Link>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              height: {
                sm: 80,
                xs: 100,
              },
              display: {
                sm: "flex",
                xs: "block",
              },
              gap: "40px",
              paddingTop: {
                sm: "35px",
                xs: "20px",
              },
              paddingLeft: "30px",
            }}
          >
            <Typography
              sx={{
                lineHeight: {
                  sm: "100%",
                  xs: "200%",
                },
              }}
            >
              <Link>Nickname & group accounts</Link>
            </Typography>
            <Typography
              sx={{
                lineHeight: {
                  sm: "100%",
                  xs: "200%",
                },
              }}
            >
              <Link>Show/hide accounts</Link>
            </Typography>
          </Box>

          <GrowCardLeftOne />
        </Box>
        <Box
          flex={1}
          sx={{
            backgroundColor: "tranparent",
           
            width: {
              lg: "350px",
              md: "100%",
              sm: "100%",
              xs: "100%",
            },
            height: {
              lg: "100%",
              md: "max-content",
              sm: "max-content",
              xs: "max-content",
            },
          }}
        >
          <GrowCardRightThree />
        </Box>
      </Box>
      <BottomCard />
    </Stack>
  );
};

export default LoggedIn;
