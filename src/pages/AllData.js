export const chipData = [
  {
    id: 1,
    icon: "RiDashboardFill",
    txt: "Dashboard",
  },
  {
    id: 2,
    icon: "FaRegUser",
    txt: "Customers",
  },
  {
    id: 3,
    icon: "RiFileList3Line",
    txt: "Orders",
  },
  {
    id: 4,
    icon: "SiSimpleanalytics",
    txt: "Analytics",
  },
  {
    id: 5,
    icon: "GoMail",
    txt: "Messages",
    message: 26,
  },
  {
    id: 6,
    icon: "GoChecklist",
    txt: "Products",
  },
  {
    id: 7,
    icon: "MdOutlineReportGmailerrorred",
    txt: "Reports",
  },
  {
    id: 8,
    icon: "PiGearFill",
    txt: "Settings",
  },
  {
    id: 9,
    icon: "AiOutlinePlusSquare",
    txt: "Add Products",
  },
  {
    id: 10,
    icon: "LuLogOut",
    txt: "Logout",
    logoutStyle: "logout",
  },
];

//Below is Data for Card Data.

export const cardData = [
  {
    id: 1,
    styleIcon: "sales-icon",
    icon: "MdAnalytics",
    total: "Total Sales",
    income: "$25,024",
    styleCircle: "sales",
    percentage: "81%",
    time: "24 hours ago",
  },
  {
    id: 2,
    styleIcon: "expenses-icon",
    icon: "BiSolidBarChartAlt2",
    total: "Total Expenses",
    income: "$14,160",
    styleCircle: "expenses",
    percentage: "62%",
    time: "24 hours ago",
  },
  {
    id: 3,
    styleIcon: "income-icon",
    icon: "MdOutlineStackedLineChart",
    total: "Total Income",
    income: "$10,864",
    styleCircle: "income",
    percentage: "44%",
    time: "24 hours ago",
  },
];

//Below is Data for Recent Updates.
import profile1 from "../assets/profile-2.jpg";
import profile2 from "../assets/profile-3.jpg";
import profile3 from "../assets/profile-4.jpg";

export const recentUpdateData = 
[
  {
    id: 1,
    img: profile1,
    name: "Mike Tyson",
    message: "received his order of Night lion tech GPS drone.",
    time: "2 Minutes Ago",
  },
  {
    id: 2,
    img: profile2,
    name: "Diana Ayl",
    message: "declined her order of 2 DJI Air 2S.",
    time: "5 Minutes Ago",
  },
  {
    id: 3,
    img: profile3,
    name: "Mandy Roy",
    message: "received his order of LARVENDER KF102 Drone.",
    time: "6 Minutes Ago",
  },
];

//Below is Data for Sales Analytics.
export const salesAnalyticsData = [
  {
    id: 1,
    colorIcon: 'online-icon',
    icon: 'BsFillCartFill',
    txt: 'Online Orders',
    time: 'Last 24 Hours',
    classNameColor: 'success',
    percent: '+39%',
    number: 3849,
  },
  {
    id: 2,
    colorIcon: 'offline-icon',
    icon: 'RiShoppingBag3Fill',
    txt: 'Offline Orders',
    time: 'Last 24 Hours',
    classNameColor: 'danger',
    percent: '+17%',
    number: 1100,
  },
  {
    id: 3,
    colorIcon: 'new-customer-icon',
    icon: 'FaUserAlt',
    txt: 'New Customer',
    time: 'Last 24 Hours',
    classNameColor: 'success',
    percent: '+28%',
    number: 849,
  },
]
