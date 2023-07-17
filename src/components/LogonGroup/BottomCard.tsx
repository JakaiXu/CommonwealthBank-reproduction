import { Box, Typography, styled, Stack, Divider } from "@mui/material";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: "rgb(78,76,77)",
  lineHeight: "200%",
  marginRight: "20px",
  [theme.breakpoints.only("xs")]: {
    margin: "10px",
    paddingLeft: "30px",
  },
}));
const BottomCard = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      sx={{
        bgcolor: "white",
        height: {
          sm: "280px",
          xs: "500px",
        },
        alignItems: {
          sm: "center",
          xs: "start",
        },
        justifyContent: "space-evenly",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            sm: "row",
            xs: "column",
          },

          paddingTop: "30px",
        }}
      >
        <StyledTypography variant="body1">Tools & calculators</StyledTypography>
        <StyledTypography variant="body1">Find a branch</StyledTypography>
        <StyledTypography variant="body1">
          Financial assistance
        </StyledTypography>
        <StyledTypography variant="body1">Contact us</StyledTypography>
      </Box>
      <Divider
        sx={{
          display: {
            sm: "none",
            xs: "block",
          },
          width: "100%",
        }}
      />
      <Box
        sx={{
          display: {
            sm: "flex",
            xs: "block",
          },
        }}
      >
        <StyledTypography variant="body1">
          Important information
          <Typography
            component="span"
            sx={{ display: "inline", marginLeft: "20px",fontSize:'14px' }}
          >
            Privacy
          </Typography>
        </StyledTypography>
        <StyledTypography variant="body1">
          Cookies
          <Typography
            component={"span"}
            sx={{ display: "inline", marginLeft: "20px",fontSize:'14px' }}
          >
            Terms of use
          </Typography>
        </StyledTypography>
      </Box>
      <StyledTypography>
        © 2023 Commonwealth Bank of Australia ABN 48 123 123 124 AFSL and
        Australian credit licence 234945
      </StyledTypography>
    </Stack>
  );
};

export default BottomCard;
