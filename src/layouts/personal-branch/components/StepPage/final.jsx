import {
  Backdrop,
  Box,
  CircularProgress,
  Typography
} from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { request } from "service/base.service";
import JsonViewer from "./JsonViewer";
import { defaultError } from "layouts/personal-branch/data/profilesListData";

const Final = (props) => {
  const [loading, setLoading] = useState();
  const [data, setData] = useState({});
  useEffect(() => {
    setLoading(true);
    request()
      .get("/personal-brand/final-result")
      .then((res) => {
        setData(res?.data);
      })
      .catch((e) => {
        props?.setAlertInfo({
          message: e?.response.data.msg ?? defaultError,
          severity: "error",
        });
        props?.setOpen(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ padding: "20px" }}>
      <Box>
        <Typography variant="h4" gutterBottom>
          Content Phases and Suggested Topics
        </Typography>
          <JsonViewer data={data?.['personal_branding_strategy'] ?? data?.['PersonalBrandingStrategy'] ?? data?.['PersonalBrandingPlan']  ?? {}}/>
      </Box>
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};
Final.propTypes = {
  setAlertInfo: PropTypes.func,
  setOpen: PropTypes.func,
};
export default Final;
