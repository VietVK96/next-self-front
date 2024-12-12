import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Button, FormControl, FormLabel, styled } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonInput from "components/ArgonInput";
import { defaultError } from "layouts/personal-branch/data/profilesListData";
import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import { request } from "service/base.service";

const Step1 = (props) => {
  const [form, setForm] = useState({
    technique: "",
    title: "",
    goals: "",
    file: null,
  });

  const handleChangeForm = (value) => {
    setForm((pre) => {
      return {
        ...pre,
        ...value,
      };
    });
  };

  const isEnableSubmit = useMemo(() => {
    return !!form.file || (!!form.technique && !!form.title && !!form.goals);
  }, [form]);

  const submit = () => {
    const { technique, title, goals, file } = form;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("technique", technique);
    formData.append("title", title);
    formData.append("goals", goals);

    request()
      .post(`/personal-brand/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        props?.setAlertInfo({
          message: "Building a brand platform successfully",
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

  return (
    <Box sx={{ borderRadius: "5px", padding: "8px" }}>
      <div>
        <div>I. Submit your CV or a short description of your work experience.</div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
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
                handleChangeForm({ file: event.target.files?.[0] });
              }}
              accept=".pdf, .doc, .docx"
            />
          </Button>
          <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "12px" }}>
            {form?.file?.name ?? props?.info?.originalname}
          </div>
        </div>
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
            <FormLabel sx={{ fontSize: "16px" }}>
              What is your area of expertise? (Example: Automotive testing)
            </FormLabel>
            <ArgonBox mb={2}>
              <ArgonInput
                sx={{ minWidth: "300px" }}
                type="text"
                placeholder="..."
                size="medium"
                onChange={(e) => {
                  handleChangeForm({ job: e?.target?.value });
                }}
              />
            </ArgonBox>
          </FormControl>
          <FormControl sx={{ mt: "8px", width: "100%" }}>
            <FormLabel sx={{ fontSize: "16px" }}>
              What is your current title? (Example: Automotive testing leader)
            </FormLabel>
            <ArgonBox mb={2}>
              <ArgonInput
                sx={{ minWidth: "300px" }}
                type="text"
                placeholder="..."
                size="medium"
                onChange={(e) => {
                  handleChangeForm({ branchName: e?.target?.value });
                }}
              />
            </ArgonBox>
          </FormControl>
          <FormControl sx={{ mt: "8px", width: "100%" }}>
            <FormLabel sx={{ fontSize: "16px" }}>
              What goals do you want to achieve with your brand (find a job, grow your business,
              make an impact, etc.)?
            </FormLabel>
            <ArgonBox mb={2}>
              <ArgonInput
                sx={{ minWidth: "300px" }}
                type="text"
                placeholder="..."
                size="medium"
                onChange={(e) => {
                  handleChangeForm({ branchName: e?.target?.value });
                }}
              />
            </ArgonBox>
          </FormControl>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            sx={{ color: "#FFF", mt: "8px" }}
            variant="contained"
            onClick={() => submit()}
            disabled={!isEnableSubmit}
            loading={true}
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
  info: PropTypes.object,
  setAlertInfo: PropTypes.func,
  setOpen: PropTypes.func,
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
