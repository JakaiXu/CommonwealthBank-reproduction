import { Box, Card, Grid, Typography, styled } from "@mui/material";
import twitter from "../../assets/socialTwitter20.svg";
import facebook from "../../assets/socialFacebook20.svg";
import linkedin from "../../assets/socialLinkedin20.svg";
import youtube from "../../assets/socialYoutube20.svg";
import instagram from "../../assets/socialInstagram20.svg";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
const HomeBottomContentSecond = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top:0,behavior:'smooth'
    })
  }
  const StyledTypography = styled(Typography)(() => ({
    textDecoration: "none",
    "&:hover": { textDecoration: "underline" },
    lineHeight: "30px",
  }));
  const FlexBox = styled(Box)(() => ({
    display: "flex",
  }));
  return (
    <Card sx={{ borderRadius: "0", position: "relative" }}>
      <Box
      onClick={handleScrollToTop}
        sx={{
          width: 100,
          height: 50,
          backgroundColor: "rgb(255,204,0)",
          position: "absolute",
          right: 20,
          top: 0,
        }}
      >
        <ExpandLessIcon
          sx={{ fontSize: 32, position: "absolute", top: -16, left: 35 }}
        />
      </Box>
      <Grid
        container
        sx={{
          height: {
            md: "260px",
            sm: "460px",
            xs: "870px",
          },
          marginY: "30px",
          display: "flex",
          paddingX: "50px",
          justifyContent: "space-between",
        }}
      >
        <Grid item sx={{}} md={2.5} sm={5} xs={12}>
          <Typography
            variant="subtitle1"
            component="h5"
            fontWeight="bold"
            lineHeight="40px"
          >
            QUICK LINKS
          </Typography>
          <StyledTypography variant="subtitle1">
            Security & scams
          </StyledTypography>
          <StyledTypography variant="subtitle1">
            Help & support
          </StyledTypography>
          <StyledTypography variant="subtitle1">
            Financial assistance
          </StyledTypography>
          <StyledTypography variant="subtitle1">
            Complaints & compliments
          </StyledTypography>
          <StyledTypography variant="subtitle1">
            Payment services availability
          </StyledTypography>
        </Grid>
        <Grid item sx={{}} md={2.5} sm={5} xs={12}>
          <Typography
            variant="subtitle1"
            component="h5"
            fontWeight="bold"
            lineHeight="40px"
          >
            ABOUT US
          </Typography>
          <StyledTypography variant="subtitle1">
            About CommBank
          </StyledTypography>
          <StyledTypography variant="subtitle1">
            Careers at CommBank
          </StyledTypography>
          <StyledTypography variant="subtitle1">
            Sustainability
          </StyledTypography>
          <StyledTypography variant="subtitle1">Newsroom</StyledTypography>
          <StyledTypography variant="subtitle1">
            Investor centre
          </StyledTypography>
        </Grid>
        <Grid item sx={{}} md={2.5} sm={5} xs={12}>
          <Typography
            variant="subtitle1"
            component="h5"
            fontWeight="bold"
            lineHeight="40px"
          >
            IMPORTANT INFORMATION
          </Typography>
          <StyledTypography variant="subtitle1">Accessibility</StyledTypography>
          <StyledTypography variant="subtitle1">
            Important documents
          </StyledTypography>
          <StyledTypography variant="subtitle1">
            Banking Code of Practice
          </StyledTypography>
          <StyledTypography variant="subtitle1">
            Cookies policy
          </StyledTypography>
          <StyledTypography variant="subtitle1">
            Privacy statement
          </StyledTypography>
        </Grid>
        <Grid item sx={{}} md={2.5} sm={5} xs={12}>
          <Typography
            variant="subtitle1"
            component="h5"
            fontWeight="bold"
            lineHeight="40px"
          >
            FOLLOW US
          </Typography>
          <StyledTypography variant="subtitle1">
            <FlexBox>
              <Box component="img" src={twitter} marginRight="10px" />
              Twitter
            </FlexBox>
          </StyledTypography>
          <StyledTypography variant="subtitle1">
            <FlexBox>
              <Box component="img" src={facebook} marginRight="10px" />
              Facebook
            </FlexBox>
          </StyledTypography>
          <StyledTypography variant="subtitle1">
            <FlexBox>
              <Box component="img" src={linkedin} marginRight="10px" />
              LinkedIn
            </FlexBox>
          </StyledTypography>
          <StyledTypography variant="subtitle1">
            <FlexBox>
              <Box component="img" src={youtube} marginRight="10px" />
              YouTube
            </FlexBox>
          </StyledTypography>
          <StyledTypography variant="subtitle1">
            <FlexBox>
              <Box component="img" src={instagram} marginRight="10px" />
              Instagram
            </FlexBox>
          </StyledTypography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HomeBottomContentSecond;
