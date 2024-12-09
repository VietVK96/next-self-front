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

// Argon Dashboard 2 MUI components
import ArgonTypography from "components/ArgonTypography";

const todoListData = [
  {
    name: "Build base",
    description: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        04-12-2024
      </ArgonTypography>
    ),
    done:true
  },
  {
    name: "Demo function 1",
    description: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        10-12-2024
      </ArgonTypography>
    ),
  },
  {
    name: "Complete function 1 and test function 2",
    description: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        17-12-2024
      </ArgonTypography>
    ),
  },
  {
    name: "Product completion",
    description: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        24-12-2024
      </ArgonTypography>
    ),
  },
];

export default todoListData;
