import React from "react";
import { AsideChips, Logo } from "../components/export";
import { chipData } from "../pages/AllData";

import { RiDashboardFill, RiFileList3Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { GoMail, GoChecklist } from "react-icons/go";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { PiGearFill } from "react-icons/pi";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";

// Icon map
const iconMap = {
  RiDashboardFill: <RiDashboardFill />,
  FaRegUser: <FaRegUser />,
  RiFileList3Line: <RiFileList3Line />,
  SiSimpleanalytics: <SiSimpleanalytics />,
  GoMail: <GoMail />,
  GoChecklist: <GoChecklist />,
  MdOutlineReportGmailerrorred: <MdOutlineReportGmailerrorred />,
  PiGearFill: <PiGearFill />,
  AiOutlinePlusSquare: <AiOutlinePlusSquare />,
  LuLogOut: <LuLogOut />,
};

function createChip(data) {

  const icon = iconMap[data.icon];

  const style = {
    display: !data.message && 'none'
  }

  return (
    <AsideChips
      key={data.id}
      icon={icon}
      txt={data.txt} 
      messageStyle={style}
      message={data.message}
      logoutStyle={data.logoutStyle}
    />
  );

}

const Aside = ({ onClick, style }) => {
  const allAsideChips = chipData.map(createChip);

  return (
    <div id="Aside" className={style}>
      <Logo onClick={onClick} />

      <div className="aside-chips-container">{allAsideChips}</div>
    </div>
  );
};

export default Aside;
