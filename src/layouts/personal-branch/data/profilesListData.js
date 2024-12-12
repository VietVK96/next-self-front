/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Images
import kal from "assets/images/kal-visuals-square.jpg";
import marie from "assets/images/marie.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";

const profilesListData = [
  {
    image: marie,
    name: "Ashley Nguyen",
    description: "Ashley Nguyen",
    part: "Marketing",
    color: "rgb(255, 55, 9)",
    background: "rgb(254, 230, 224)",
    action: {
      label: "Team Leader",
      color: "warning",
    },
  },
  {
    image: kal,
    name: "XuanPT",
    description: "Phùng Thanh Xuân",
    part: "BOD",
    bg: "rgb(176, 238, 211)",
    color: "rgb(26, 174, 111)",
    action: {
      label: "Professional Advisor",
      color: "success",
    },
  },

  {
    image: team3,
    name: "VietVK",
    description: "Văn Khắc Việt",
    part: "D2",
    bg: "rgb(17, 205, 239)",
    color: "rgb(9, 55, 255)",
    action: {
      label: "Dev",
      color: "info",
    },
  },
  {
    image: team2,
    name: "Trung Paris",
    color: "rgb(248, 0, 49)",
    bg: "rgb(253, 209, 218)",
    description: "Nguyễn Quang Trung",
    part: "D2",
    action: {
      label: "Dev",
      color: "info",
    },
  },
];

export default profilesListData;

export const defaultError = "The system is overloaded, please try again in a few minutes!"