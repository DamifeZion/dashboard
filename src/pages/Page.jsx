import { useState } from "react";
import { Aside, RightSide } from "../sections/export";
import { useTheme, useMediaQuery } from "@mui/material";

const Page = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up(769));
  // const isSmall = useMediaQuery(theme.breakpoints.down(769));

  function closeMenu() {
    setToggleMenu((prev) => !prev);
  }

  function showAside() {
    setToggleMenu((prev) => !prev);
  }

  return (
    <div id="Page">
      {toggleMenu && <Aside onClick={closeMenu} />}

      {isLarge && <Aside />}

      <RightSide showAside={showAside} />
    </div>
  );
};

export default Page;
