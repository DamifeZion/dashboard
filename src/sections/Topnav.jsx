import React from "react";
import {
  DashboardInput,
  ThemeModePC,
  ThemeModeMobile,
} from "../components/export";
import { CgMenuGridR } from "react-icons/cg";
import { useMediaQuery, useTheme } from "@mui/material";

const Topnav = ({ showAside }) => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down(768));

  const Device = () => {
    if (isSmallDevice) {
      return (
        <div className="topnav">
          <a onClick={showAside}>
            <CgMenuGridR />
          </a>
          <ThemeModeMobile />
        </div>
      );
    } else {
      return (
        <div className="topnav">
          <DashboardInput />
          <ThemeModePC />
        </div>
      );
    }
  };

  return <Device />;
};

export default Topnav;
