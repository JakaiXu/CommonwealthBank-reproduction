import { Box, Typography, Link } from "@mui/material";
import questionsLogo from "../../assets/Logon/questions.svg";
import { motion } from "framer-motion";

const GrowCardLeftOne = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, transformOrigin: "350px 200px" }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 20,
        duration: 0.8,
        delay: 0.5,
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          marginBottom:'35px',
          paddingLeft: {
            sm: "30px",
            xs: "30px",
          },

          height: {
            md: "165px",
            sm: "200px",
            xs: "200px",
          },
        }}
      >
        <Box
          sx={{
            display: {
              md: "flex",
              sm: "block",
            },
            alignItems: {
              md: "center",
              sm: "normal",
            },
            transform: {
              lg: "center translateY(80px)",
            },
            animation: {
              lg: "3s ease-in 1s infinite reverse both running slidein",
            },
          }}
        >
          <Box
            component="img"
            src={questionsLogo}
            sx={{
              marginTop: {
                sm: "20px",
                xs: "20px",
              },
            }}
          ></Box>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bold",
              lineHeight: "30px",
              marginTop: {
                md: "20px",
                sm: "0",
                xs: "0",
              },
            }}
          >
            Want to give feedback on the NetBank homepage?
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: "rgb(138,136,137)",
            lineHeight: "30px",
          }}
        >
          Your feedback will help us improve the experience
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: "60px" }}>
          <Link>Give feedback</Link>
        </Typography>
      </Box>
    </motion.div>
  );
};

export default GrowCardLeftOne;
