import { Box, Link, Card, Grid, Typography } from "@mui/material";
import messaging from "../../assets/messaging_50split.jpeg";

const HomeMiddleContentThird = () => {
  return (
    <Card sx={{borderRadius:'0'}}>
      <Grid
        container
        display="flex"
        sx={{
          height: {
            xl: "425px",
            lg: "425px",
            md: "425px",
            sm: "618px",
            xs: "540px",
          },
        }}
      >
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          sx={{
            width: "50%",
          }}
        >
          <Box
            component="img"
            alt="messaging"
            src={messaging}
            sx={{
              marginTop: {
                sm: "50px",
              },
              height: {
                md: "272px",
                sm: "280px",
                xs: "180px",
              },
              width: {
                lg: "730px",
                md: "550px",
                sm: "90%",
                xs: "90%",
              },
              objectFit: "cover",
              objectPosition: "top",
              marginX: {
                sm: "auto",
                xs: "auto",
              },
            }}
          />
        </Grid>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          sx={{
            width: "50%",
          }}
        >
          <Typography
            variant="h5"
            component="h5"
            fontWeight="bold"
            sx={{
              marginTop: { lg: "100px", md: "100px",sm:'50px',xs:'-50px' },
              marginBottom: { md: "30px",xs:'30px' },
              paddingX:{sm:'50px',xs:'30px'},
            }}
          >
            Message us in the CommBank app
          </Typography>
          <Typography variant="body1" component="p" sx={{ paddingX:{sm:'50px',xs:'30px'}}}>
            Get instant answers from Ceba our virtual assistant, or connect with
            a specialist who can message you back. You'll need notifications for
            the <Link href="digital-banking/commbank-app">CommBank app</Link>{" "}
            turned on so you know when you've received a reply.
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{
              paddingTop: "13px",
              marginTop: "20px",
              border: "1px solid rgb(200,200,200)",
              borderRadius: "50px",
              height: "50px",
              width: "185px",
              textAlign: "center",
              marginLeft: {sm:'50px',xs:'30px'},
            }}
          >
            How to message us
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HomeMiddleContentThird;
