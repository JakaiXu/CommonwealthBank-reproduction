import { Card, Typography, Container, Box } from "@mui/material";

import bankingImage from "../../assets/banking-products-lghero.jpg";
import HomeNavCard from "./HomeNavCard";
const BankingCard = () => {
  return (
    <Box
      sx={{
        marginTop: "0",
        border: "1px solid rgb(233,233,233)",
        backgroundImage: `url(${bankingImage})`,
        backgroundSize: {
          lg: "870px",
          md: "100vw",
          sm: "100vw",
          xs: "100vw",
        },
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card
        elevation={-1}
        sx={{
          paddingBottom: "100px",
          paddingTop: "50px",
          height:{
            lg:"220px",
            sm:"180px",
            xs:'200px'
          },
          borderBottom: "1px solid rgb(233,233,233)",
          maxWidth: {
            lg: "670px",
            md: "96vw",
            sm: "97vw",
            xs: "98vw",
          },
          marginLeft: {
            lg: "5px",
            md: "2vw",
            sm: "1.5vw",
            xs: "1vw",
          },
          marginTop: {
            lg: "80px",
            md: "280px",
            sm: "170px",
            xs: "170px",
          },
          borderTop: {
            lg: "none",
            md: "8px solid  rgba(255, 204, 0, 1)",
            xs: "8px solid  rgba(255, 204, 0, 1)",
          },
          borderRadius: "0",
        }}
      >
        <Container
          sx={{
            borderLeft: {
              lg: "15px solid  rgba(255, 204, 0, 1)",
            },
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: "bold",
              paddingBottom: "20px",
              paddingLeft: {
                lg: "30px",
                xl: "50px",
              },
            }}
          >
            Banking
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              paddingLeft: {
                lg: "30px",
                xl: "50px",
              },
            }}
          >
            Whatever your needs, we have accounts and services that can help you
            bank the way you want.
          </Typography>
        </Container>
      </Card>
      <HomeNavCard />
    </Box>
  );
};
//960 930 100
export default BankingCard;
