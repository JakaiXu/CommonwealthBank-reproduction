import { Grid, Icon, Divider, Typography } from "@mui/material";
import everydayaccounts from "../../assets/transaction_accounts.svg";
import credit_cards from "../../assets/credit_cards.svg";
import international_payments from "../../assets/international_payments.svg";
import klarna_ds_pictograms from "../../assets/klarna_ds_pictograms_@2x.svg";
import overdraft from "../../assets/overdraft40_pictograms.svg";
import partnership from "../../assets/partnership_pictograms.svg";
import savings_accounts from "../../assets/savings_accounts.svg";
import vehicle from "../../assets/vehicle_pictograms.svg";
const HomeNavCard = () => {
  const gridItemSx = {
    // border: "1px solid",
    width: "100%",
    textAlign: "center",
  };
  const gridItemIcon = {
    width: "100px",
    height: "100px",
    paddingTop: "30px",
    marginLeft: "30px",
  };

  return (
    <Grid
      direction="row"
      container
      sx={{
        marginBottom: "-10px",
        width: {
          xl: "1500px",
          lg: "95vw",
          md: "98vw",
        },
        height: {
          lg: "188px",
          md: "350px",
          sm:'350px',
          xs: "660px",
        },
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-evenly",
        border: "1px solid rgb(233,233,233)",
      }}
    >
      <Grid item lg={1} md={2.5} sm={2.5} xs={5.5} sx={{ textAlign: "center" }}>
        <Icon
          sx={{
            width: "100px",
            height: "100px",
            paddingTop: "30px",
            marginLeft: "30px",
          }}
        >
          <img alt="everyday" src={everydayaccounts} />
        </Icon>
        <Typography variant="body2" component="p">
          Everyday accounts
        </Typography>
      </Grid>
      <Divider
        orientation="vertical"
        sx={{
          height: { lg: "50%", md: "25%",sm:'25%',xs:'12%' },
          marginY: { lg: "auto", md: "4%",sm:'4%',xs:'8%' },
        }}
        component="li"
        flexItem
      />
      <Grid item lg={1} md={2.5} sm={2.5} xs={5.5}  sx={gridItemSx}>
        <Icon sx={gridItemIcon}>
          <img alt="everyday" src={savings_accounts} />
        </Icon>
        <Typography variant="body2" component="p">
          Savings accounts & Term Deposits
        </Typography>
      </Grid>
      <Divider
        orientation="vertical"
        sx={{
          height: { lg: "50%", md: "25%",sm:'25%' },
          marginY: { lg: "auto", md: "4%",sm:'4%' },
          display:{md:'inline',sm:'inline',xs:'none'}
        }}
      />
      <Grid item lg={1} md={2.5} sm={2.5} xs={5.5} sx={gridItemSx}>
        <Icon sx={gridItemIcon}>
          <img alt="everyday" src={credit_cards} />
        </Icon>
        <Typography
          sx={{ width: "100%", marginX: "auto" }}
          variant="body2"
          component="p"
        >
          Credit cards
        </Typography>
      </Grid>
      <Divider
        orientation="vertical"
        sx={{
          height: { lg: "50%", md: "25%",sm:'25%',xs:'12%'  },
          marginY: { lg: "auto", md: "4%",sm:'4%' ,xs:'8%' },
          display:'inline'
        }}
      />
      <Grid item lg={1} md={2.5} sm={2.5} xs={5.5} sx={gridItemSx}>
        <Icon sx={gridItemIcon}>
          <img alt="everyday" src={vehicle} />
        </Icon>
        <Typography variant="body2" component="p">
          Personal loans
        </Typography>
      </Grid>
      <Divider
        className="homenav-divider"
        orientation="vertical"
        sx={{
          height: { lg: "50%", md: "25%",sm:'25%' },
          marginY: { lg: "auto", md: "4%" ,sm:'4%'},
          display:{
            lg:'inline',
            md:'none',
            xs:'none',
          }
        }}
      />
      <Grid item lg={1} md={2.5} sm={2.5} xs={5.5} sx={gridItemSx}>
        <Icon sx={gridItemIcon}>
          <img alt="everyday" src={overdraft} />
        </Icon>
        <Typography variant="body2" component="p">
          Personal overdrafts
        </Typography>
      </Grid>
      <Divider
        orientation="vertical"
        sx={{
          height: { lg: "50%", md: "25%",sm:'25%',xs:'12%'  },
          marginY: { lg: "auto", md: "4%" ,sm:'4%',xs:'8%' },display:'inline'
        }}
      />
      <Grid item lg={1} md={2.5} sm={2.5} xs={5.5} sx={gridItemSx}>
        <Icon sx={gridItemIcon}>
          <img alt="everyday" src={klarna_ds_pictograms} />
        </Icon>
        <Typography variant="body2" component="p">
          Buy now, Pay later
        </Typography>
      </Grid>
      <Divider
        orientation="vertical"
        sx={{
          height: { lg: "50%", md: "25%",sm:'25%' },
          marginY: { lg: "auto", md: "4%",sm:'4%' },
          display:{md:'inline',sm:'inline',xs:'none'}
        }}
      />
      <Grid item lg={1} md={2.5} sm={2.5} xs={5.5} sx={gridItemSx}>
        <Icon sx={gridItemIcon}>
          <img alt="everyday" src={international_payments} />
        </Icon>
        <Typography variant="body2" component="p">
          International payments
        </Typography>
      </Grid>
      <Divider
        orientation="vertical"
        sx={{
          height: { lg: "50%", md: "25%",sm:'25%',xs:'12%'  },
          marginY: { lg: "auto", md: "4%",sm:'4%',xs:'8%'  },display:'inline'
        }}
      />
      <Grid item lg={1} md={2.5} sm={2.5} xs={5.5} sx={gridItemSx}>
        <Icon sx={gridItemIcon}>
          <img alt="everyday" src={partnership} />
        </Icon>
        <Typography variant="body2" component="p">
          Premier & Private
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HomeNavCard;
