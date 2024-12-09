import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonProgress from "components/ArgonProgress";
import { Box, Link } from "@mui/material";

const items = [
  {
    image: "https://demos.creative-tim.com/argon-dashboard-pro-material-ui/static/media/logo-jira.c19fd4e416babfbd0fdb0a794188c601.svg",
    name: "Personal Brand Assessment",
    progress: 40,
    color: "success",
    link:"/personal-brand"
  },
  {
    image: "https://demos.creative-tim.com/argon-dashboard-pro-material-ui/static/media/logo-asana.d758f410d82760a61d1eabcb03409de6.svg",
    name: "content creator",
    progress: 60,
    color: "warning",
    link:"/content-creator"
  },
];
function ProgressTrack({ title }) {
  const renderList = items.map(({ name, image, color, progress,link }) => (
    <ArgonBox
      key={name}
      component="li"
      display="flex"
      alignItems="center"
      py={1}
      mb={1}
      sx={{ borderBottom: "1px solid #DDD" }}
    >
      <ArgonBox
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        border
      >
        <ArgonBox mr={2} sx={{ height: "100%" }}>
          <ArgonAvatar src={image} alt="something here" variant="rounded" shadow="md" />
        </ArgonBox>
      </ArgonBox>
      <Box
        justifyContent="space-between"
        alignItems="space-between"
        flex={1}
        display="flex"
        flexDirection="column"
        height="40px"
      >
        <Link href={link} sx={{ fontSize: "16px" }}>{name}</Link>
        <ArgonProgress width="100%" color={color} maxValue={100} value={progress} height={"10px"} />
      </Box>
    </ArgonBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <ArgonBox pt={2} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox p={2}>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderList}
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

ProgressTrack.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProgressTrack;
