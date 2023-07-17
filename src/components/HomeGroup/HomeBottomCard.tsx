import { Card, Typography } from "@mui/material";

const HomeBottomCard = () => {
  return (
    <Card
      sx={{
        height: {
          md: "150px",
          sm: "200px",
          xs: "200px",
        },
        borderTop: "1px solid rgb(200,200,200)",
        borderRadius: "0",
        padding:'40px',
        
      }}
    >
      <Typography variant="body2" component="p" marginBottom='15px'>
        CommBank acknowledges the Traditional Owners of the lands across
        Australia as the continuing custodians of Country and Culture. We pay
        our respect to First Nations peoples and their Elders, past and present.
      </Typography>
      <Typography variant="body2" component="p">
        ©2023 Commonwealth Bank of Australia ABN 48 123 123 124 AFSL and
        Australian credit licence 234945
      </Typography>
    </Card>
  );
};

export default HomeBottomCard;
