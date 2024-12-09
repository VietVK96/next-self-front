const { Box } = require("@mui/material");
import { Button, FormControl, FormLabel } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonInput from "components/ArgonInput";
import PropTypes from "prop-types";
const Step2 = (props) => {
  const complete = () => {
    props.onComplete && props?.onComplete();
  };
  return (
    <Box>
      <div>To build the right personal branding strategy, I need more information from you:</div>
      <div>
        <div>
          <div style={{ marginTop: "12px" }}>I. Passion and Vision.</div>
        </div>
        <div>
          <FormControl sx={{ mt: "8px", width: "100%" }}>
            <FormLabel sx={{ fontSize: "16px" }}>
              What excites you most about working in this field?
            </FormLabel>
            <ArgonBox mb={2}>
              <ArgonInput
                sx={{ minWidth: "300px" }}
                type="text"
                placeholder="..."
                size="medium"
                multiline
                minRows={3}
              />
            </ArgonBox>
          </FormControl>
          <FormControl sx={{ mt: "8px", width: "100%" }}>
            <FormLabel sx={{ fontSize: "16px" }}>
              What do you want to achieve in the next 5–10 years (work, career, personal)?
            </FormLabel>
            <ArgonBox mb={2}>
              <ArgonInput
                sx={{ minWidth: "300px" }}
                type="text"
                placeholder="..."
                size="medium"
                multiline
                minRows={3}
              />
            </ArgonBox>
          </FormControl>
        </div>
      </div>
      <div>
        <div>
          <div style={{ marginTop: "12px" }}>II. Core Values.</div>
        </div>
        <div>
          <FormControl sx={{ mt: "8px", width: "100%" }}>
            <FormLabel sx={{ fontSize: "16px" }}>
              What principles or values ​​do you base your work on?
            </FormLabel>
            <ArgonBox mb={2}>
              <ArgonInput
                sx={{ minWidth: "300px" }}
                type="text"
                placeholder="..."
                size="medium"
                multiline
                minRows={3}
              />
            </ArgonBox>
          </FormControl>
          <FormControl sx={{ mt: "8px", width: "100%" }}>
            <FormLabel sx={{ fontSize: "16px" }}>How do you define “success” at work?</FormLabel>
            <ArgonBox mb={2}>
              <ArgonInput
                sx={{ minWidth: "300px" }}
                type="text"
                placeholder="..."
                size="medium"
                multiline
                minRows={3}
              />
            </ArgonBox>
          </FormControl>
        </div>
      </div>
      <div>
        <div>
          <div style={{ marginTop: "12px" }}>III. Target Audience and Impact.</div>
        </div>
        <div>
          <FormControl sx={{ mt: "8px", width: "100%" }}>
            <FormLabel sx={{ fontSize: "16px" }}>
              Who do you want to serve or influence (businesses, individuals, specific industries)?
            </FormLabel>
            <ArgonBox mb={2}>
              <ArgonInput
                sx={{ minWidth: "300px" }}
                type="text"
                placeholder="..."
                size="medium"
                multiline
                minRows={3}
              />
            </ArgonBox>
          </FormControl>
          <FormControl sx={{ mt: "8px", width: "100%" }}>
            <FormLabel sx={{ fontSize: "16px" }}>
              What problems do you want to solve for them?
            </FormLabel>
            <ArgonBox mb={2}>
              <ArgonInput
                sx={{ minWidth: "300px" }}
                type="text"
                placeholder="..."
                size="medium"
                multiline
                minRows={3}
              />
            </ArgonBox>
          </FormControl>
        </div>
      </div>
      <div>
        <div>
          <div style={{ marginTop: "12px" }}>IV. Target Audience and Impact.</div>
        </div>
        <div>
          <FormControl sx={{ mt: "8px", width: "100%" }}>
            <FormLabel sx={{ fontSize: "16px" }}>
              What format do you prefer to share your knowledge in (written, spoken, tutorial)?
            </FormLabel>
            <ArgonBox mb={2}>
              <ArgonInput
                sx={{ minWidth: "300px" }}
                type="text"
                placeholder="..."
                size="medium"
                multiline
                minRows={3}
              />
            </ArgonBox>
          </FormControl>
          <FormControl sx={{ mt: "8px", width: "100%" }}>
            <FormLabel sx={{ fontSize: "16px" }}>
              Do you want to reach a broad audience or focus on a small, high-value group?
            </FormLabel>
            <ArgonBox mb={2}>
              <ArgonInput
                sx={{ minWidth: "300px" }}
                type="text"
                placeholder="..."
                size="medium"
                multiline
                minRows={3}
              />
            </ArgonBox>
          </FormControl>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button sx={{ color: "#FFF", mt: "8px" }} variant="contained" onClick={() => complete()}>
          Generate
        </Button>
      </div>
    </Box>
  );
};
Step2.propTypes = {
  onComplete: PropTypes.func, // Validates that `onComplete` is a function
};
export default Step2;
