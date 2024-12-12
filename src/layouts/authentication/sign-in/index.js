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

import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";
import { request } from "service/base.service";
import { setToken } from "service/ultil";
import { setUser } from "service/ultil";
import { setUserLogin } from "context";
import { useArgonController } from "context";

// Image
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg";

function Illustration() {
  const [payload, setPayload] = useState({});
  const [error, setErorr] = useState(false);
  const handleChange = (value) => setPayload((pre) => ({ ...pre, ...value }));
  const navigate = useNavigate();
  const [controller, dispatch] = useArgonController();
  const handleSubmit = () => {
    setErorr(false);
    request()
      .post(`/auth/validation`, payload)
      .then((res) => {
        if (res?.data) {
          setToken(res?.data?.token);
          setUser(res?.data?.user);
          setUserLogin(dispatch, res?.data?.user);
          navigate("/dashboard");
        }
      })
      .catch(() => setErorr(true));
  };
  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={{
        image: bgImage,
        title: '"Attention is the new currency"',
        description:
          "The more effortless the writing looks, the more effort the writer actually put into the process.",
      }}
    >
      <ArgonBox component="form" role="form">
        <ArgonBox mb={2}>
          <ArgonInput
            type="email"
            placeholder="Email"
            size="large"
            onChange={(e) => {
              handleChange({ email: e?.target?.value });
            }}
            error={error}
          />
          {error && <p style={{ fontSize: "12px", color: "red" }}>Email or password incorrect</p>}
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonInput
            type="password"
            placeholder="Password"
            size="large"
            onChange={(e) => {
              handleChange({ password: e?.target?.value });
            }}
          />
        </ArgonBox>

        <ArgonBox mt={4} mb={1}>
          <ArgonButton color="info" size="large" fullWidth onClick={handleSubmit}>
            Sign In
          </ArgonButton>
        </ArgonBox>
        <ArgonBox mt={3} textAlign="center">
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <ArgonTypography
              component={Link}
              to="/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
            >
              Sign up
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
    </IllustrationLayout>
  );
}

export default Illustration;
