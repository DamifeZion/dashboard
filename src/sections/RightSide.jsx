// import React from "react";
import Topnav from "./Topnav";

import {
  cardData,
  recentUpdateData,
  salesAnalyticsData,
} from "../pages/AllData";

import {
  DashboardInput,
  InsightCard,
  RecentOrders,
  RecentUpdates,
  SalesAnalytics,
  NewProduct,
} from "../components/export";

import { MdAnalytics, MdOutlineStackedLineChart } from "react-icons/md";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { useTheme, useMediaQuery } from "@mui/material";

// Card Data Mapping Function
function createCard(data) {
  //Card Data Icon map
  let iconMap = {
    MdAnalytics: <MdAnalytics />,
    BiSolidBarChartAlt2: <BiSolidBarChartAlt2 />,
    MdOutlineStackedLineChart: <MdOutlineStackedLineChart />,
  };

  const icon = iconMap[data.icon];

  return (
    <InsightCard
      key={data.id}
      styleIcon={data.styleIcon}
      icon={icon}
      total={data.total}
      income={data.income}
      styleCircle={data.styleCircle}
      percentage={data.percentage}
      time={data.time}
    />
  );
}

//Recent Update Data Mapping Function
function createRecentUpdate(data) {
  return (
    <RecentUpdates
      key={data.id}
      img={data.img}
      name={data.name}
      message={data.message}
      time={data.time}
    />
  );
}

//Sales Analytics Data Mapping Function
function createSalesAnalytics(data) {
  let iconMap = {
    BsFillCartFill: <BsFillCartFill />,
    RiShoppingBag3Fill: <RiShoppingBag3Fill />,
    FaUserAlt: <FaUserAlt />,
  };

  const icon = iconMap[data.icon];

  return (
    <SalesAnalytics
      key={data.id}
      colorIcon={data.colorIcon}
      icon={icon}
      txt={data.txt}
      time={data.time}
      classNameColor={data.classNameColor}
      percent={data.percent}
      number={data.number}
    />
  );
}

const RightSide = ({ showAside }) => {
  const allInsightCard = cardData.map(createCard);
  const allRecentUpdate = recentUpdateData.map(createRecentUpdate);
  const allSalesAnalytics = salesAnalyticsData.map(createSalesAnalytics);

  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("600"));

  return (
    <div id="Rightside">
      <Topnav showAside={showAside} />

      <div className="container">
        <div className="dashboard">
          {isSmallDevice && <DashboardInput />}
          <div className="dashboard-insight">{allInsightCard}</div>

          <div className="recent-orders-container">
            <h2>Recent Orders</h2>
            <div className="overflow-x">
              <RecentOrders />
            </div>
            <small>show all</small>
          </div>
        </div>
        {/*Dashboard*/}

        <div className="recents">
          <div className="child1">
            <h2>Recent Updates</h2>
            <div className="card">{allRecentUpdate}</div>
          </div>

          <div className="child2">
            <h3>Sales Analytics</h3>
            <div className="sales-container">
              {allSalesAnalytics}
              <NewProduct />
            </div>
          </div>
        </div>
        {/*recents*/}
      </div>
    </div>
  );
};

export default RightSide;
