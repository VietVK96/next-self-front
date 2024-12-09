import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Button, FormControl, FormLabel, styled } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonInput from "components/ArgonInput";
import PropTypes from "prop-types";

const Step1 = (props) => {
  const complete = () => {
    props.onComplete && props?.onComplete();
  };
  return (
    <Box sx={{ borderRadius: "5px", padding: "8px" }}>
      <div>
        <div>I. Submit your CV or a short description of your work experience.</div>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          sx={{ color: "#FFF", mt: "8px" }}
        >
          Upload CV
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => {
              console.log(event.target.files);
            }}
            multiple
          />
        </Button>
      </div>
      <div>
        <div>
          <div style={{ marginTop: "12px" }}>
            II. If you don&lsquo;t have a CV, answer the following question so I can help you find
            information.
          </div>
        </div>
        <div>
          <FormControl sx={{ mt: "8px", width: "100%" }}>
            <FormLabel sx={{ fontSize: "16px" }}>What field are you working in?</FormLabel>
            <ArgonBox mb={2}>
              <ArgonInput sx={{ minWidth: "300px" }} type="text" placeholder="..." size="medium" />
            </ArgonBox>
          </FormControl>
          <FormControl sx={{ mt: "8px", width: "100%" }}>
            <FormLabel sx={{ fontSize: "16px" }}>
              What goals do you want to achieve with your brand (find a job, grow your business,
              make an impact, etc.)?
            </FormLabel>
            <ArgonBox mb={2}>
              <ArgonInput sx={{ minWidth: "300px" }} type="text" placeholder="..." size="medium" />
            </ArgonBox>
          </FormControl>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            sx={{ color: "#FFF", mt: "8px" }}
            variant="contained"
            onClick={() => complete()}
          >
            Submit
          </Button>
        </div>
      </div>
    </Box>
  );
};

Step1.propTypes = {
  onComplete: PropTypes.func, // Validates that `onComplete` is a function
};
export default Step1;

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
