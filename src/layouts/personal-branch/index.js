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

// @mui material components

// @mui icons

// Argon Dashboard 2 MUI components
import { Alert, Box, Snackbar, Step, StepLabel, Stepper } from "@mui/material";
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// Overview page components
import Header from "layouts/personal-branch/components/Header";
import React, { useEffect, useState } from "react";
import Step1 from "./components/StepPage/step1";
import Step2 from "./components/StepPage/step2";
import Final from "./components/StepPage/final";
import { request } from "service/base.service";

// Data

// Images
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/profile-layout-header.jpg";
const steps = [
  "Building a brand platform",
  "Building a brand story",
  "Explore your brand positioning strategy",
];

function Overview() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = React.useState({});
  const [refreshTag, setRefreshTag] = useState(false);
  const handleRefresh = () => setRefreshTag((pre) => !pre);
  const [info, setInfo] = useState({});
  useEffect(() => {
    request()
      .get("personal-brand")
      .then((res) => {
        setInfo(res?.data);
      })
      .catch((e) => {
        console.log("---data---", e);
      });
  }, [refreshTag]);
  useEffect(() => {
    if (info) {
      setActiveStep(info?.activeStep ?? 0);
    }
  }, [info]);

  const [open, setOpen] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    message: "",
    severity: "success",
  });
  const generateStep = () => {
    switch (activeStep) {
      case 0: {
        return (
          <Step1
            onComplete={(value) => {
              setInfo(value);
              setCompleted({
                0: true,
              });
            }}
            info={info}
            setOpen={setOpen}
            setAlertInfo={setAlertInfo}
          />
        );
      }
      case 1: {
        return (
          <Step2
            onComplete={(value) => {
              setInfo(value);
              setCompleted({
                1: true,
              });
            }}
            info={info}
            setOpen={setOpen}
            setAlertInfo={setAlertInfo}
          />
        );
      }
      case 2: {
        return <Final setOpen={setOpen} setAlertInfo={setAlertInfo} />;
      }
    }
  };

  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <DashboardLayout
      sx={{
        backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.info.main, 0.6),
            rgba(gradients.info.state, 0.6)
          )}, url(${bgImage})`,
        backgroundPositionY: "50%",
        height: "150px",
      }}
    >
      <Header />
      <ArgonBox mt={5} mb={3} sx={{ height: "60px" }}></ArgonBox>
      <Box sx={{ width: "100%", flex: 1 }}>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step
              color="primary"
              key={label}
              completed={completed[index]}
              onClick={() => setActiveStep(index)}
            >
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {generateStep()}
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={alertInfo.severity} sx={{ width: "100%" }}>
          {alertInfo.message}
        </Alert>
      </Snackbar>
    </DashboardLayout>
  );
}

export default Overview;
