import { lazy } from "react";

// Authentication Pages
const GetStarted = lazy(() => import("./../auth/GetStarted"));
const LoginPage = lazy(() => import("../../components/auth/SignIn"));
const ForgotPassword = lazy(() =>
  import("../../components/auth/ForgotPassword")
);
const Logout = lazy(() => import("../../components/auth/Logout"));
const VerifyEmail = lazy(() => import("./../auth/VerifyEmail"));
const VerifyOtp = lazy(() => import("./../auth/VerifyOOP"));
const WelcomePage = lazy(() => import("./../auth/welcome"));

// Sidebars Pages
const Dashboard = lazy(() => import("../pages/main/Dashboard"));
const Wallet = lazy(() => import("../pages/main/wallet"));
const SendReceive = lazy(() => import("../pages/main/sendNreceive"));
const BuySell = lazy(() => import("../pages/main/BuyNSell"));
const Transaction = lazy(() => import("../pages/main/Transaction"));
const Contact = lazy(() => import("../pages/main/Contact"));

export const routes = [
  // main pages with no initial path
  {
    path: "/dashboard",
    label: "Dashboard",
    component: <Dashboard />,
  },
  {
    path: "/wallet",
    label: "Wallet",
    component: <Wallet />,
  },
  {
    path: "/send-receive",
    label: "Send/Receive",
    component: <SendReceive />,
  },
  {
    path: "/buy-sell",
    label: "Buy/Sell",
    component: <BuySell />,
  },
  {
    path: "/transaction",
    label: "Transaction",
    component: <Transaction />,
  },
  {
    path: "/contact",
    label: "Contact",
    component: <Contact />,
  },

  // authentication pages with initial path of /auth
  {
    label: "Login",
    path: "/auth/sign-in",
    component: <LoginPage />,
  },
  {
    label: "Forget Password",
    path: "/auth/forgot-password",
    component: <ForgotPassword />,
  },
  // {
  //   label: "Reset",
  //   path: "/auth/reset-password",
  //   component: <ResetPage />
  // },
  {
    label: "Welcome",
    path: "/auth/welcome",
    component: <WelcomePage />,
  },
  {
    label: "Verify OTP",
    path: "/auth/verify-otp",
    component: <VerifyOtp />,
  },
  {
    label: "Get Started",
    path: "/auth/get-started",
    component: <GetStarted />,
  },
  {
    label: "Verify Email",
    path: "/auth/verify-email",
    component: <VerifyEmail />,
  },
  {
    label: "Logout",
    path: "/auth/logout",
    component: <Logout />,
  },
];
