import { Card, Grid, Typography, Link, Divider } from "@mui/material";
const HomeMiddleContentFirst = () => {
  return (
    <Card
      sx={{
        marginTop: "10px",
        padding: "50px",
        minHeight: {
          md: "460px",
          sm: "580px",
          xs: "850px",
        },
        borderRadius: "0",
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        fontWeight="bold"
        sx={{ marginBottom: "30px" }}
      >
        Banking for the stage you're at
      </Typography>
      <Grid
        container
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid item sx={{ width: "20%" }} md={2.5} sm={5.5} xs={12}>
          <Typography
            variant="h6"
            fontWeight="bold"
            component="h6"
            sx={{ marginBottom: "30px" }}
          >
            Business banking
          </Typography>
          <Typography variant="body1" component="p">
            Banking products and services,
            <Link href="business/industries">tailored industry solutions</Link>
            and powerful tools to help your business thrive.
          </Typography>
          <Typography variant="body1" component="p" sx={{ marginTop: "20px" }}>
            <Link href="business">Visit business banking</Link>
          </Typography>
        </Grid>
        <Divider
          orientation="vertical"
          component="li"
          flexItem
          sx={{
            height: { md: "250px", sm: "250px" },
            display: {
              md: "inline",
              sm: "inline",
              xs: "none",
            },
            marginY: { sm: "auto" },
          }}
        />
        <Divider
          sx={{
            marginY: "30px",
            width: "100%",
            display: { md: "none", sm: "none", xs: "inline" },
          }}
        />
        <Grid item sx={{ width: "20%" }} md={2.5} sm={5.5} xs={12}>
          <Typography
            variant="h6"
            fontWeight="bold"
            component="h6"
            sx={{ marginBottom: "30px" }}
          >
            Kids, students and young adults
          </Typography>
          <Typography variant="body1" component="p">
            We have a range of solutions and initiatives tailored for{" "}
            <Link href="banking/kids">kids</Link>,{" "}
            <Link href="banking/teens">teens</Link>,{" "}
            <Link href="banking/students">students</Link> and{" "}
            <Link href="banking/youngadults">young adults.</Link>
          </Typography>
        </Grid>
        <Divider
          orientation="vertical"
          component="li"
          flexItem
          sx={{
            height: { md: "250px" },
            display: {
              md: "inline",
              sm: "none",
              xs: "none",
            },
            marginY: { sm: "auto" },
          }}
        />
        <Divider
          sx={{
            marginY: "30px",
            width: "100%",
            display: { md: "none", sm: "none", xs: "inline" },
          }}
        />
        <Grid item sx={{ width: "20%" }} md={2.5} sm={5.5} xs={12}>
          <Typography
            variant="h6"
            fontWeight="bold"
            component="h6"
            sx={{ marginBottom: "30px" }}
          >
            Moving to Australia
          </Typography>
          <Typography variant="body1" component="p">
            Whether it's a permanent move or a working holiday, we have
            products, teams, guidance and tools to make your move easier.
          </Typography>
          <Typography variant="body1" component="p" sx={{ marginTop: "20px" }}>
            <Link href="moving-to-australia">Explore more</Link>
          </Typography>
        </Grid>
        <Divider
          orientation="vertical"
          component="li"
          flexItem
          sx={{
            height: { md: "250px", sm: "250px" },
            display: {
              md: "inline",
              sm: "inline",
              xs: "none",
            },
            marginY: { sm: "auto" },
          }}
        />
        <Divider
          sx={{
            marginY: "30px",
            width: "100%",
            display: { md: "none", sm: "none", xs: "inline" },
          }}
        />
        <Grid item sx={{ width: "20%" }} md={2.5} sm={5.5} xs={12}>
          <Typography
            variant="h6"
            fontWeight="bold"
            component="h6"
            sx={{ marginBottom: "30px" }}
          >
            Travelling overseas or in Australia
          </Typography>
          <Typography variant="body1" component="p">
            Travel essentials to help make your holiday a once-in-a-lifetime
            experience.
          </Typography>
          <Typography variant="body1" component="p" sx={{ marginTop: "20px" }}>
            <Link href="travel">Help me with my trip</Link>
          </Typography>
        </Grid>
        <Divider
          sx={{
            marginY: "30px",
            width: "100%",
            display: { md: "none", sm: "none", xs: "inline" },
          }}
        />
      </Grid>
    </Card>
  );
};

export default HomeMiddleContentFirst;
