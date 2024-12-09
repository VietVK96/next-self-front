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
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// Overview page components
import Header from "layouts/personal-branch/components/Header";
import React, { useState } from "react";
import Step1 from "./components/StepPage/step1";
import Step2 from "./components/StepPage/step2";
import Final from "./components/StepPage/final";

// Data

// Images
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/profile-layout-header.jpg";
const steps = [
  "upload cv",
  "answer 5 questions",
  "Click the 'Generate' button to get your AI-powered personal branding statement.",
];

function Overview() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = React.useState({});

  const generateStep = () => {
    switch (activeStep) {
      case 0: {
        return (
          <Step1
            onComplete={() => {
              setActiveStep(1);
              setCompleted({
                0: true,
              });
            }}
          />
        );
      }
      case 1: {
        return (
          <Step2
            onComplete={() => {
              setActiveStep(2);
              setCompleted({
                1: true,
              });
            }}
          />
        );
      }
      case 2: {
        return <Final />;
      }
    }
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
    </DashboardLayout>
  );
}

export default Overview;
