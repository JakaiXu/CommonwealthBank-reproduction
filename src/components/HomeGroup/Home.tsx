import BankingCard from "./BankingCard";
import { Box, Divider, Paper } from "@mui/material";
import HomeMiddleContentFirst from "./HomeMiddleContentFirst";
import HomeMiddleContentSecond from "./HomeMiddleContentSecond";
import HomeMiddleContentThird from "./HomeMiddleContentThird";
import HomeMiddleContentForth from "./HomeMiddleContentForth";
import HomeMiddleContentSixth from "./HomeMiddleContentSixth";
import HomeBottomContentFirst from "./HomeBottomContentFirst";
import HomeBottomContentSecond from "./HomeBottomContentSecond";
import HomeBottomCard from "./HomeBottomCard";

const Home = () => {
  return (
    <Paper
    elevation={0}
      sx={{
        minHeight: "100vh",
        maxWidth: "1536px",
        margin: "auto",
        backgroundColor: "rgb(244,244,244)",
       
      }}
    >
      <BankingCard />
      <HomeMiddleContentFirst />
      <Divider
        sx={{
          display: {
            sm: "block",
            xs: "none",
          },
        }}
      />
      <HomeMiddleContentSecond />
      <Divider
        sx={{
          display: {
            sm: "block",
            xs: "none",
          },
        }}
      />
      <HomeMiddleContentThird />
      <Divider />
      <HomeMiddleContentForth />
      <Divider sx={{ display: {xs: "block" } }} />
      <HomeMiddleContentSixth />
      <HomeBottomContentFirst />
      <HomeBottomContentSecond />
      <HomeBottomCard />
    </Paper>
  );
};

export default Home;
