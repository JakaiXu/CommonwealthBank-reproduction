import { Card, Typography, Grid, Link, Divider } from "@mui/material";
import calculator from "../../assets/calculator_pictogram.svg";
import cloud from "../../assets/SunClouds64.svg";
import calendar from "../../assets/calendar_pictograms.svg";
import feedback from "../../assets/pictograms_feedback.svg";
const HomeMiddleContentSecond = () => {
  return (
    <Card
      sx={{
        // border: "1px solid",
        marginTop: "10px",
        padding: "50px",
        minHeight: {
          md: "460px",
          sm: "580px",
          xs: "850px",
        },
        borderRadius: "0",
        marginY: 0,
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        fontWeight="bold"
        marginBottom="30px"
      >
        Banking tools, guidance & support
      </Typography>
      <Grid container>
        <Grid item md={3} sm={6} xs={12} paddingRight="20px">
          <img alt="calculater" src={calculator} />
          <Typography
            variant="h6"
            fontWeight="bold"
            component="h6"
            marginY="30px"
          >
            Banking tools & calculators
          </Typography>
          <Typography variant="body1" component="p" marginBottom="20px">
            Compare our accounts and try our range of calculators and tools.{" "}
          </Typography>
          <Link href="business">Find out more</Link>
        </Grid>
        <Divider sx={{
            width:'100%',
            marginY:'30px',
            display:{
                md:'none',
                sm:'none',
                xs:'inline'
            }
        }} />
        <Grid item md={3} sm={6} xs={12} paddingX="20px">
          <img alt="calculater" src={cloud} />
          <Typography
            variant="h6"
            fontWeight="bold"
            component="h6"
            marginY="30px"
          >
            Tips to help improve your financial wellbeing
          </Typography>
          <Typography variant="body1" component="p" marginBottom="20px">
          Practical budgeting and saving tips, plus action plans to help when making big decisions.
          </Typography>
          <Link href="banking/guidance">Explore now</Link>
        </Grid>
        <Divider sx={{
            width:'100%',
            marginY:'30px',
            display:{
                md:'none',
                sm:'none',
                xs:'inline'
            }
        }} />
        <Grid item md={3} sm={6} xs={12} paddingX="20px">
          <img alt="calculater" src={feedback} />
          <Typography
            variant="h6"
            fontWeight="bold"
            component="h6"
            marginY="30px"
          >
            Product support & FAQs
          </Typography>
          <Typography variant="body1" component="p" marginBottom="20px">
          Find the answers to your questions. 
          </Typography>
          <Link href="support">Tell me more</Link>
        </Grid>
        <Divider sx={{
            width:'100%',
            marginY:'30px',
            display:{
                md:'none',
                sm:'none',
                xs:'inline'
            }
        }} />
        <Grid item md={3} sm={6} xs={12} paddingX="20px">
          <img alt="calculater" src={calendar} />
          <Typography
            variant="h6"
            fontWeight="bold"
            component="h6"
            marginY="30px"
          >
           Local events & webinars
          </Typography>
          <Typography variant="body1" component="p" marginBottom="20px">
          Find local branch events and webinars to help you make better financial decisions.
          </Typography>
          <Link href="banking/events">Find an event</Link>
        </Grid>
        <Divider sx={{
            width:'100%',
            marginY:'30px',
            display:{
                md:'none',
                sm:'none',
                xs:'inline'
            }
        }} />
      </Grid>
    </Card>
  );
};

export default HomeMiddleContentSecond;
