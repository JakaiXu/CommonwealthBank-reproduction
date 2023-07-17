import { Box, Card,  Grid, Link, Typography } from "@mui/material";
import patnership2 from "../../assets/partnerships2_lghero.jpg";
import manonphone from "../../assets/man-on-phone_prodcard.jpg";
import cardonphone from "../../assets/goal-tracker_promocard.jpg";
const HomeMiddleContentSixth = () => {
  return (
    <Card sx={{ borderRadius: "0", }}>
      <Typography
        component="h5"
        fontWeight="bold"
        fontSize="28px"
        sx={{ marginLeft: "50px", marginTop: "60px", marginBottom: "20px" }}
      >
        Get the banking advantage
      </Typography>
      <Grid
        container
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        sx={{
            height:{
                md:'600px',
                sm:'2280px',
                xs:'1880px'
            },
          maxHeight: {
            md:'600px',
            sm: "2340px",
            xs:'1880px'
          },
        }}
      >
        <Grid
          item
          sx={{
            position: "relative",
            width: {
              xl: "380px",
              lg: "380px",
              md: "30%",
              sm: "90%",
            },
            border: "1px solid rgb(200,200,200)",
            paddingBottom: "30px",
            height: {
              lg: "520px",
              md: "520px",
              sm: "30%",
              xs: "30%",
            },
          }}
        >
          <Box component="img" src={patnership2} sx={{
            maxHeight:{
                sm:'425px'
            }
          }}></Box>
          <Typography variant="h6" fontWeight="bold" margin="30px">
            Enjoy exclusive partnership offers
          </Typography>
          <Typography variant="body2" component="p" marginX="30px">
            Available for CommBank customers only, you can save on property
            management, utilities, mobile plans and internet for your home, as
            well as other everyday purchases.{" "}
          </Typography>
          <Link
            sx={{ position: "absolute", left: "30px", bottom: "30px" }}
            href="latest/partnerships"
          >
            Explore partnerships
          </Link>
        </Grid>
        <Grid
          item
          sx={{
            position: "relative",
            width: {
              xl: "380px",
              lg: "380px",

              md: "30%",
              sm: "90%",
            },
            border: "1px solid rgb(200,200,200)",
            paddingBottom: "30px",
            height: {
              lg: "520px",
              md: "520px",
              sm: "30%",
              xs: "30%",
            },
          }}
        >
          <Box component="img" src={manonphone}></Box>
          <Typography variant="h6" fontWeight="bold" margin="30px">
          Track and manage your spending with Spend Tracker
          </Typography>
          <Typography variant="body2" component="p" marginX="30px">
          Stay on-track with your debit and credit card spending in the CommBank app.
          </Typography>
          <Link
            sx={{ position: "absolute", left: "30px", bottom: "30px" }}
            href="digital-banking/spend-tracker-insights"
          >
            More about Spend Tracker
          </Link>
        </Grid>
        <Grid
          item
          sx={{
            position: "relative",
            width: {
              xl: "380px",
              lg: "380px",
              md: "30%",
              sm: "90%",
            },
            border: "1px solid rgb(200,200,200)",
            paddingBottom: "30px",
            height: {
              lg: "520px",
              md: "520px",
              sm: "30%",
              xs: "30%",
            },
          }}
        >
          <Box component="img" src={cardonphone}></Box>
          <Typography variant="h6" fontWeight="bold" margin="30px">
          Goal Tracker. With you when you want to save.
          </Typography>
          <Typography variant="body2" component="p" marginX="30px">
          In the CommBank app with a NetBank Saver or GoalSaver account in your name only.
          </Typography>
          <Link
            sx={{ position: "absolute", left: "30px", bottom: "30px" }}
            href="digital-banking/goal-tracker"
          >
            More about Goal Tracker
          </Link>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HomeMiddleContentSixth;
