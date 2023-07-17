import { Box, Card, Grid, Link, Typography } from "@mui/material";
import commonbankapp from "../../assets/commbank-app-everyday-account_50split_xl.jpg";
import { BsDot } from "react-icons/bs";
const HomeMiddleContentForth = () => {
  return (
    <Card sx={{borderRadius:'0'}}>
      <Grid container display="flex" sx={{flexDirection:{
        md:'row',sm:'column-reverse',xs:'column-reverse'
      }}}  marginY="60px">
        <Grid
          item
          sx={{
            width: {
              md: "40%",
              sm: "100%",
            },
            margin: "50px",
          }}
        >
          <Typography
            variant="h5"
            component="h5"
            fontWeight="bold"
            marginY='40px'
            sx={{fontSize:{xs:'20px'}}}
          >
            Access your money anytime, anywhere
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            fontWeight="bold"
            lineHeight="60px"
            sx={{
                fontSize:{
                    xs:'18px'
                }
            }}
          >
            Australia's #1 banking app1
          </Typography>
          <Typography variant="body2" component="p" lineHeight="40px">
            With the CommBank app, you'll have access to a range of features to
            help you manage your money:
            <Typography
              variant="body2"
              component="span"
              display="flex"
              alignItems="center"
              lineHeight="30px"
            >
              <BsDot />
              Check your balance{" "}
            </Typography>
            <Typography
              variant="body2"
              component="span"
              display="flex"
              alignItems="center"
              lineHeight="30px"
            >
              <BsDot />
              Transfer money to friends and family quickly using PayID
            </Typography>
            <Typography
              variant="body2"
              component="span"
              display="flex"
              alignItems="center"
              lineHeight="30px"
            >
              <BsDot />
              Use Bill Sense to predict and manage regular payments and
              subscriptions{" "}
            </Typography>
            <Typography
              variant="body2"
              component="span"
              display="flex"
              alignItems="center"
              lineHeight="30px"
            >
              <BsDot />
              Categorise your transactions with Spend Tracker, so you can see
              what, where and how much you're spending each month
            </Typography>
            <Typography
              variant="body2"
              component="span"
              display="flex"
              alignItems="center"
              lineHeight="30px"
            >
              <BsDot />
              Get cash out without your card
            </Typography>
            <Typography
              variant="body2"
              component="span"
              display="flex"
              alignItems="center"
              lineHeight="30px"
            >
              <BsDot />
              Get notified when your credit or debit card is used to make a
              transaction
            </Typography>
          </Typography>
          <Link href="digital-banking/commbank-app" lineHeight="50px">
            Discover more about the CommBank app
          </Link>
        </Grid>
        <Grid
          item
          sx={{
            width: {
              lg: "50%",
              md: "45%",
              sm: "100%",
              xs:'100%'
            },
            
          }}
        >
          <Box component="img" src={commonbankapp} sx={{
            width:{sm:'90%',xs:'90%'},
            height: {
              md: "700px",
              sm: "280px",
              xs: "170px",
              objectFit: "cover",
              objectPosition: "top",
            },
            marginX: {
              sm: "auto",
              xs: "auto",
            },}}></Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HomeMiddleContentForth;
