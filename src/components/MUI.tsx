import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Link,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  colors,
} from "@mui/material";
import { createTheme, ThemeProvider,styled } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import MenuIcon from "@mui/icons-material/Menu";
const MUI = () => {
  const [formats, setFormats] = useState<string | null>(null);
  const [isDawerOpen, setIsDawerOpen] = useState(false);
  const theme = createTheme({
    status:{danger:'red'},
    palette: {
      secondary: {
        main: colors.orange[500],
      },
      neutral:{
        main:colors.grey[500],
        darker:colors.grey[700]
      }
      //colors is the color library of mui
    },
  });
  const StyledBox = styled(Box)(({theme}) => ({
    height:'250px',
    width:'250px',
    backgroundColor:theme.palette.neutral?.darker
  }))

 
  
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        {/* <Stack spacing={2} direction="row">
        <Button variant="contained" endIcon={<ReplyAllIcon />}>
          Send
        </Button>
        <IconButton aria-label="send" color="warning" size="small">
          <SendIcon />
        </IconButton>
        <Stack direction="row">
          <Button variant="text">Left</Button>
          <Button variant="text">Center</Button>
          <Button variant="text">Right</Button>
        </Stack>
        <Stack>
          <ButtonGroup
            variant="contained"
            orientation="vertical"
            size="small"
            color="secondary"
          >
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
        <Stack direction="row">
          <ToggleButtonGroup
            aria-label="text formatting"
            value={formats}
            onChange={(_e, updatedFormats) => {
              setFormats(updatedFormats);
            }}
            exclusive
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack> */}
        {/* <Stack
        sx={{ border: "1px solid red" }}
        direction="row"
        // spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            width: "150px",
            height: "150px",

            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          code evolution
        </Box>
        <Box
          sx={{
            backgroundColor: "secondary.light",
            width: "150px",
            height: "150px",

            "&:hover": {
              bgcolor: "secondary.main",
            },
          }}
        >
          anfndiiards
        </Box>
      </Stack> */}
        {/* <Grid container my={4}>
        <Grid item xs={3} sm={2} md={3} lg={2}>
          <Box
            sx={{
              bgcolor: "primary.light",
              border: "1px solid",
              width: "100px",
              height: "100px",
              padding: "20px",
            }}
          >
            Item 1
          </Box>
        </Grid>
        <Grid item xs={3} sm={4} md={9} lg={10}>
          <Box
            sx={{
              bgcolor: "primary.light",
              border: "1px solid",
              width: "100px",
              height: "100px",
              padding: "20px",
            }}
          >
            Item 2
          </Box>
        </Grid>
        <Grid item xs={3} sm={4} md={3} lg={4}>
          <Box
            sx={{
              bgcolor: "primary.light",
              border: "1px solid",
              width: "100px",
              height: "100px",
              padding: "20px",
            }}
          >
            Item 3
          </Box>
        </Grid>
        <Grid item xs={3} sm={2} md={9} lg={8}>
          <Box
            sx={{
              bgcolor: "primary.light",
              border: "1px solid",
              width: "100px",
              height: "100px",
              padding: "20px",
            }}
          >
            Item 4
          </Box>
        </Grid>
      </Grid> */}
        {/* <Stack>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => {
          setIsDawerOpen(true);
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDawerOpen}
        onClose={() => {
          setIsDawerOpen(false);
        }}
      >
        <Box
          sx={{
            padding: "10px",
            width: "300px",
            textAlign: "center",
            role: "presentation",
          }}
        >
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
      </Stack> */}
        {/* <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField label="Name" variant="outlined" />
        </Stack>
      </Stack> */}
        {/* <Stack>
        <Link href='#'>Link</Link>
        <Link href='#' color='secondary'>Link</Link>
      </Stack> */}
        <Box
          sx={{
            height: "300px",
            width: {
              xs: 100,
              sm: 200,
              md: 300,
              lg: 40,
              xl: 500,
            },
            bgcolor:'secondary.light'
          }}
        ></Box>
        <StyledBox />
      </Stack>
    </ThemeProvider>
  );
};

export default MUI;
