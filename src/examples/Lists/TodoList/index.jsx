import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import CustomCheckbox from "components/CheckBox";

function TodoList({ title, items }) {
  const renderList = items.map(({ name, description, done }) => (
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
        <ArgonTypography variant="button" fontWeight="medium" gutterBottom>
          {name}
        </ArgonTypography>
        <ArgonTypography variant="caption" color="text">
          {description}
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox ml="auto" display="flex" alignItems="center">
        <CustomCheckbox checked={done} />
      </ArgonBox>
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

// Typechecking props for the TodoList
TodoList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
