import { Box, Grid, Typography } from "@mui/material";
import mobilecall from "../../assets/mobile_call_us_pictograms.svg";
import messageus from "../../assets/questions_feedback_pictograms.svg";
import support from "../../assets/ds_pictogram_support2.svg";
import branch from "../../assets/branch_pictograms.svg";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
const HomeBottomContentFirst = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Grid
      sx={{
        position: "relative",
        height: {
          lg: "370px",
          md: "400px",
          sm: "450px",
          xs: "750px",
        },
        minHeight: {
          lg: "370px",
          md: "400px",
          sm: "450px",
          xs: "750px",
        },
        width: "100%",
        borderBottom: {
          sm: "none",
          xs: "1px solid rgb(200,200,200)",
        },
      }}
    >
      <Box
        onClick={handleScrollToTop}
        sx={{
          width: 100,
          height: 50,
          backgroundColor: "rgb(255,204,0)",
          position: "absolute",
          right: 20,
          bottom: 0,
        }}
      >
        <ExpandLessIcon
          sx={{ fontSize: 32, position: "absolute", bottom: -16, left: 35 }}
        />
      </Box>
      <Typography
        variant="h5"
        component="h5"
        fontWeight="bold"
        sx={{
          marginTop: "40px",
          marginBottom: "20px",
          marginLeft: "40px",
        }}
      >
        We're here to help
      </Typography>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        paddingX="10px"
      >
        <Grid
          item
          display="flex"
          lg={2.5}
          md={2.5}
          sm={5.5}
          xs={12}
          sx={{
            width: {
              md: "25%",
              sm: "50%",
            },
            height: { sm: "200px", xs: "150px" },
            borderBottom: {
              sm: "none",
              xs: "1px solid rgb(200,200,200)",
            },
            paddingX: "30px",
            marginTop: {
              sm: "10px",
              xs: "30px",
            },
          }}
        >
          <Box
            component="img"
            alt="contact us"
            src={mobilecall}
            sx={{ alignSelf: "start" }}
          ></Box>
          <Box component="div">
            <Typography
              component="h6"
              fontWeight="bold"
              sx={{ marginLeft: "30px", marginTop: "10px", fontSize: "20px" }}
            >
              Contact us
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ marginLeft: "30px" }}
            >
              Message us in the CommBank app orcall to connect tothe right help.
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          display="flex"
          lg={2.5}
          md={2.5}
          sm={5.5}
          xs={12}
          sx={{
            paddingX: "30px",
            width: {
              md: "25%",
              sm: "50%",
            },
            height: { sm: "200px", xs: "150px" },
            borderBottom: {
              sm: "none",
              xs: "1px solid rgb(200,200,200)",
            },
            marginTop: {
              sm: "10px",
              xs: "30px",
            },
          }}
        >
          <Box
            component="img"
            alt="contact us"
            src={messageus}
            sx={{ alignSelf: "start" }}
          ></Box>
          <Box component="div">
            <Typography
              component="h6"
              fontWeight="bold"
              sx={{ marginLeft: "30px", marginTop: "10px", fontSize: "20px" }}
            >
              Message us
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ marginLeft: "30px" }}
            >
              Get instant help fromour virtual assistant or connect to a
              specialist
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          display="flex"
          lg={2.5}
          md={2.5}
          sm={5.5}
          xs={12}
          sx={{
            paddingX: "30px",
            width: {
              md: "25%",
              sm: "50%",
            },
            height: { sm: "200px", xs: "150px" },
            borderBottom: {
              sm: "none",
              xs: "1px solid rgb(200,200,200)",
            },
            marginTop: {
              sm: "10px",
              xs: "30px",
            },
          }}
        >
          <Box
            component="img"
            alt="contact us"
            src={support}
            sx={{ alignSelf: "start" }}
          ></Box>
          <Box component="div">
            <Typography
              component="h6"
              fontWeight="bold"
              sx={{ marginLeft: "30px", marginTop: "10px", fontSize: "20px" }}
            >
              FAQs
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ marginLeft: "30px" }}
            >
              Search support and ourmost frequently askedquestions.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          display="flex"
          lg={2.5}
          md={2.5}
          sm={5.5}
          xs={12}
          sx={{
            paddingX: "30px",
            width: {
              md: "25%",
              sm: "50%",
            },
            height: { sm: "200px", xs: "150px" },
            marginTop: {
              sm: "10px",
              xs: "30px",
            },
          }}
        >
          <Box
            component="img"
            alt="contact us"
            src={branch}
            sx={{ alignSelf: "start" }}
          ></Box>
          <Box component="div">
            <Typography
              component="h6"
              fontWeight="bold"
              sx={{ marginLeft: "30px", marginTop: "10px", fontSize: "20px" }}
            >
              Find a branch
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ marginLeft: "30px" }}
            >
              Find a branch, ATM orspecialist near you.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeBottomContentFirst;
