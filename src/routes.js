import Dashboard from "layouts/dashboard";
import PersonalBranch from "layouts/personal-branch";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

const routes = [
  {
    type: "route",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <Dashboard />,
  },
  {
    type: "route",
    name: "Personal Brand Assessment ",
    key: "personal-brand",
    route: "/personal-brand",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <PersonalBranch />,
  },
  // {
  //   type: "route",
  //   name: "Profile",
  //   key: "profile",
  //   route: "/profile",
  //   icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
  //   component: <Profile />,
  // },
  {
    type: "route",
    name: "Sign In",
    key: "sign-in",
    isHidden: true,
    route: "/sign-in",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-copy-04" />
    ),
    component: <SignIn />,
  },
  {
    type: "route",
    name: "Sign Up",
    key: "sign-up",
    route: "/sign-up",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <SignUp />,
    isHidden: true,
  },
];

export default routes;
