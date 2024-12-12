const { Box } = require("@mui/material");
import { Button, FormControl, FormLabel } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonInput from "components/ArgonInput";
import { defaultError } from "layouts/personal-branch/data/profilesListData";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { request } from "service/base.service";

const Keys = {
  key1: "Unique Initiating Moment: What event or realization brought you to this area of ​​expertise?",
  key2: "What excites you most about working in this field?",
  key3: "What principles or values ​​do you base your work on?",
  key4: "Who do you want to serve or influence (businesses, individuals, specific industries)?",
  key5: "What problems/challenges do you want to solve for them?",
  key6: "What makes your solution different from other experts in your industry?",
};
const Step2 = (props) => {
  const [questions, setQuestions] = useState({});
  const handleChange = (value) => {
    setQuestions((pre) => {
      return {
        ...pre,
        ...value,
      };
    });
  };
  const onSubmit = () => {
    request()
      .post("personal-brand", { questions: JSON.stringify(questions) })
      .then((res) => {
        props?.setAlertInfo({
          message: "Building a brand story successfully",
          severity: "success",
        });
        props?.setOpen(true);
        props.onComplete && props?.onComplete(res?.data);
      })
      .catch((e) => {
        props?.setAlertInfo({
          message: e?.response.data.msg ?? defaultError,
          severity: "error",
        });
        props?.setOpen(true);
      });
  };

  useEffect(() => {
    if (props?.info?.questions) {
      if (typeof props?.info?.questions === "string") {
        setQuestions(JSON.parse(props?.info?.questions));
      } else {
        setQuestions(props?.info?.questions);
      }
    }
  }, [props?.info]);
  return (
    <Box>
      <div>To build the right personal branding strategy, I need more information from you:</div>
      <div>
        <div>
          <div style={{ marginTop: "12px" }}>I. Passion</div>
        </div>
        <div>
          <FormControl sx={{ mt: "8px", width: "100%" }}>
            <FormLabel sx={{ fontSize: "16px" }}>{Keys.key1}</FormLabel>
            <ArgonBox mb={2}>
              <ArgonInput
                sx={{ minWidth: "300px" }}
                type="text"
                placeholder="..."
                size="medium"
                multiline
                minRows={3}
                value={questions[Keys.key1]}
                onChange={(e) => {
                  handleChange({
                    [Keys.key1]: e?.target?.value,
                  });
                }}
              />
            </ArgonBox>
          </FormControl>
          <FormControl sx={{ mt: "8px", width: "100%" }}>
            <FormLabel sx={{ fontSize: "16px" }}>{Keys.key2}</FormLabel>
            <ArgonBox mb={2}>
              <ArgonInput
                sx={{ minWidth: "300px" }}
                type="text"
                placeholder="..."
                size="medium"
                multiline
                minRows={3}
                value={questions[Keys.key2]}
                onChange={(e) => {
                  handleChange({
                    [Keys.key2]: e?.target?.value,
                  });
                }}
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
            <FormLabel sx={{ fontSize: "16px" }}>{Keys.key3}</FormLabel>
            <ArgonBox mb={2}>
              <ArgonInput
                sx={{ minWidth: "300px" }}
                type="text"
                placeholder="..."
                size="medium"
                multiline
                minRows={3}
                value={questions[Keys.key3]}
                onChange={(e) => {
                  handleChange({
                    [Keys.key3]: e?.target?.value,
                  });
                }}
              />
            </ArgonBox>
          </FormControl>
        </div>
      </div>
      <div>
        <div>
          <div style={{ marginTop: "12px" }}>III. Target audience and impact.</div>
        </div>
        <div>
          <FormControl sx={{ mt: "8px", width: "100%" }}>
            <FormLabel sx={{ fontSize: "16px" }}>{Keys.key4}</FormLabel>
            <ArgonBox mb={2}>
              <ArgonInput
                sx={{ minWidth: "300px" }}
                type="text"
                placeholder="..."
                size="medium"
                multiline
                minRows={3}
                value={questions[Keys.key4]}
                onChange={(e) => {
                  handleChange({
                    [Keys.key4]: e?.target?.value,
                  });
                }}
              />
            </ArgonBox>
          </FormControl>
          <FormControl sx={{ mt: "8px", width: "100%" }}>
            <FormLabel sx={{ fontSize: "16px" }}>{Keys.key5}</FormLabel>
            <ArgonBox mb={2}>
              <ArgonInput
                sx={{ minWidth: "300px" }}
                type="text"
                placeholder="..."
                size="medium"
                multiline
                minRows={3}
                value={questions[Keys.key5]}
                onChange={(e) => {
                  handleChange({
                    [Keys.key5]: e?.target?.value,
                  });
                }}
              />
            </ArgonBox>
          </FormControl>
          <FormControl sx={{ mt: "8px", width: "100%" }}>
            <FormLabel sx={{ fontSize: "16px" }}>{Keys.key6}</FormLabel>
            <ArgonBox mb={2}>
              <ArgonInput
                sx={{ minWidth: "300px" }}
                type="text"
                placeholder="..."
                size="medium"
                multiline
                minRows={3}
                value={questions[Keys.key6]}
                onChange={(e) => {
                  handleChange({
                    [Keys.key6]: e?.target?.value,
                  });
                }}
              />
            </ArgonBox>
          </FormControl>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button sx={{ color: "#FFF", mt: "8px" }} variant="contained" onClick={() => onSubmit()}>
          Generate
        </Button>
      </div>
    </Box>
  );
};
Step2.propTypes = {
  onComplete: PropTypes.func,
  info: PropTypes.object,
  setAlertInfo: PropTypes.func,
  setOpen: PropTypes.func,
};
export default Step2;
