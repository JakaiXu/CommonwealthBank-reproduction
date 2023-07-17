import { useState } from "react";
import cbaLogo from "../../assets/commBank-logo.svg";
import { NavLink,Link } from "react-router-dom";
import classNames from "classnames";
import MenuIcon from "@mui/icons-material/Menu";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import LeftDrawer from "./LeftDrawer";
import RightDrawer from "./RightDrawer";
import { Button, Typography } from "@mui/material";
const Header = () => {
  const [isShowLeftDrawer, setIsShowLeftDrawer] = useState(false);
  const [isShowRightDrawer, setIsShowRightDrawer] = useState(false);
  type NavLabel = {
    isActive: boolean;
    isPending: boolean;
  };
  const headerLabel = classNames("header-label py-6");
  const navLabel = ({ isActive, isPending }: NavLabel) =>
    isPending ? "pending" : isActive ? "active" : "";

  return (
    <div className="bg-white min-w-[360px]">
      <div className="flex justify-between border-2 header">
        <div className="flex items-center pr-5">
          <i
            className="menu-icon ml-8"
            onClick={() => setIsShowLeftDrawer(true)}
          >
            <MenuIcon />
          </i>
          <div className="mr-10">
            <NavLink to="/" className={navLabel}>
              <img src={cbaLogo} alt="cba-logo" className="w-10 ml-6" />
            </NavLink>
          </div>
          <div className="header-labels font-bold flex h-full">
            <div className={headerLabel}>
              <NavLink to="banking" className={navLabel}>
                Banking
              </NavLink>
            </div>
            <div className={headerLabel}>
              <NavLink to="home-loan" className={navLabel}>
                Home loans
              </NavLink>
            </div>
            <div className={headerLabel}>
              <NavLink to="insurance" className={navLabel}>
                Insurance
              </NavLink>
            </div>
            <div className={headerLabel}>
              <NavLink to="investing-and-supper" className={navLabel}>
                Investing & super
              </NavLink>
            </div>
            <div className={headerLabel}>
              <NavLink to="business" className={navLabel}>
                Business
              </NavLink>
            </div>
            <div className={headerLabel}>
              <NavLink to="institutional" className={navLabel}>
                Institutional
              </NavLink>
            </div>
          </div>
        </div>
        <div>
          <Link to="/prodnav_Banking">
            <Button
              sx={{
                borderLeft: "1px rgb(233,233,233) solid",
                color: "black",
                borderRadius: 0,
                width: "75px",
                height: "100%",
              }}
            >
              <i className="text-3xl">
                <AiOutlineSearch />
              </i>
            </Button>
          </Link>
          <Button
            sx={{
              height: "100%",
              bgcolor: "rgb(255,204,0)",
              paddingX: "1rem",
              borderRadius: "0",
              "&:hover": {
                bgcolor: "rgba(255,204,0,0.8)",
                border: "1px solid blue",
              },
            }}
            onClick={() => setIsShowRightDrawer(true)}
          >
            <i className="text-2xl text-black mr-2">
              <BiLockAlt />
            </i>
            <Typography
              variant="subtitle2"
              component="h6"
              sx={{
                color: "black",
                fontWeight: "bold",
                fontFamily: "sans-serif",
                textTransform: "none",
              }}
            >
              Log on
            </Typography>
          </Button>
        </div>
      </div>
      <LeftDrawer
        isShowDrawer={isShowLeftDrawer}
        setIsShowDrawer={setIsShowLeftDrawer}
      />
      <RightDrawer
        isShowDrawer={isShowRightDrawer}
        setIsShowDrawer={setIsShowRightDrawer}
      />
    </div>
  );
};

export default Header;
