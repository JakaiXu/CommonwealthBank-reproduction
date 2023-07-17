import { Box, styled, Link } from "@mui/material";

const WaitingEditPage = () => {
  const StyleTitle = styled("div")(({ theme }) => ({
    fontSize: "44px",
    fontWeight: "bold",
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      top: "160px",
      left: `calc((100vw - 1140px)/2)`,
    },
    [theme.breakpoints.only("md")]: {
      position: "absolute",
      top: "160px",
      left: `calc((100vw - 94%)/2)`,
    },
    [theme.breakpoints.only("sm")]: {
      position: "absolute",
      top: "150px",
      left: `calc((100vw - 92%)/2)`,
    },
    [theme.breakpoints.only("xs")]: {
      position: "absolute",
      top: "150px",
      left: `calc((100vw - 90%)/2)`,
    },
  }));
  const StyleContent = styled("p")(({ theme }) => ({
    fontSize: "24px",
    fontWeight: "bold",
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      top: "300px",
      left: `calc((100vw - 1140px)/2)`,
    },
    [theme.breakpoints.only("md")]: {
      position: "absolute",
      top: "300px",
      left: `calc((100vw - 94%)/2)`,
    },
    [theme.breakpoints.only("sm")]: {
      position: "absolute",
      top: "300px",
      left: `calc((100vw - 92%)/2)`,
    },
    [theme.breakpoints.only("xs")]: {
      position: "absolute",
      top: "300px",
      left: `calc((100vw - 90%)/2)`,
    },
  }));
  const StyleSubContent = styled("p")(({ theme }) => ({
    fontSize: "18px",

    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      top: "400px",
      left: `calc((100vw - 1140px)/2)`,
    },
    [theme.breakpoints.only("md")]: {
      position: "absolute",
      top: "400px",
      left: `calc((100vw - 94%)/2)`,
    },
    [theme.breakpoints.only("sm")]: {
      position: "absolute",
      top: "400px",
      left: `calc((100vw - 92%)/2)`,
    },
    [theme.breakpoints.only("xs")]: {
      position: "absolute",
      top: "400px",
      left: `calc((100vw - 90%)/2)`,
    },
  }));
  return (
    <Box
      sx={{
        width: "100%",
        height: "50vh",
        background:
          "linear-gradient(to right, rgb(251,232,29) 10% , rgb(255,208,0) 100%)",
      }}
    >
      <StyleTitle>Welcome Buddy! </StyleTitle>
      <StyleContent>
        The page is under construction, thanks for your waiting patiently...
      </StyleContent>
      <StyleSubContent>
        Web is built by Jakai Xu, more to know, please visit:
        <Link component="a">https://github.com/JakaiXu</Link>
      </StyleSubContent>
    </Box>
  );
};

export default WaitingEditPage;
