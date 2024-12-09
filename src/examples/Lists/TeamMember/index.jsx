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

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonButton from "components/ArgonButton";
import { Chip } from "@mui/material";

function TeamMember({ title, members }) {
  const renderMember = members.map(({ image, name, description, action, part, color, bg }) => {
    return (
      <ArgonBox
        key={name}
        component="li"
        display="flex"
        alignItems="center"
        py={1}
        mb={1}
        sx={{ borderBottom: "1px solid #DDD" }}
      >
        <ArgonBox mr={2} sx={{ height: "100%" }}>
          <ArgonAvatar src={image} alt="something here" variant="rounded" shadow="md" />
        </ArgonBox>
        <ArgonBox
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <ArgonTypography variant="button" fontWeight="medium">
            {name}
          </ArgonTypography>
          <ArgonTypography variant="caption" color="text">
            {description}
          </ArgonTypography>
          <Chip
            label={part}
            sx={{
              padding: "0px",
              height: "16px",
              borderRadius: "2px",
              fontSize: "10px",
              color: color,
              background: bg,
              mt:"1px"
            }}
          />
        </ArgonBox>
        <ArgonBox ml="auto">
          <ArgonButton
            component="button"
            rel="noreferrer"
            variant="text"
            color={action.color}
          >
            {action.label}
          </ArgonButton>
        </ArgonBox>
      </ArgonBox>
    );
  });

  return (
    <Card sx={{ height: "100%" }}>
      <ArgonBox pt={2} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox p={2}>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderMember}
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

// Typechecking props for the TeamMember
TeamMember.propTypes = {
  title: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TeamMember;
