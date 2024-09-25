import { lazy } from "react";

// Authentication Pages
const GetStarted = lazy(() => import("./../auth/GetStarted"));
const LoginPage = lazy(() => import("../../components/auth/SignIn"));
const SignUpPage = lazy(() => import("../../components/auth/SignUp"));
const ForgotPassword = lazy(() =>
  import("../../components/auth/ForgotPassword")
);
const Logout = lazy(() => import("../../components/auth/Logout"));
const VerifyEmail = lazy(() => import("./../auth/VerifyEmail"));
const VerifyOtp = lazy(() => import("./../auth/VerifyOOP"));
const ConfirmVerification = lazy(() => import("./../auth/confirmVerification"));
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
    path: "/main/dashboard",
    label: "Dashboard",
    component: <Dashboard />,
  },
  {
    path: "/main/wallet",
    label: "Wallet",
    component: <Wallet />,
  },
  {
    path: "/main/send-receive",
    label: "Send/Receive",
    component: <SendReceive />,
  },
  {
    path: "/main/buy-sell",
    label: "Buy/Sell",
    component: <BuySell />,
  },
  {
    path: "/main/transaction",
    label: "Transaction",
    component: <Transaction />,
  },
  {
    path: "/main/contact",
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
    label: "SignUp page",
    path: "/auth/sign-up",
    component: <SignUpPage />,
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
    path: "/welcome",
    component: <WelcomePage />,
  },
  {
    label: "Verify OTP",
    path: "/auth/verify-otp",
    component: <VerifyOtp />,
  },
  {
    label: "Verify Link",
    path: "/auth/verify-link",
    component: <ConfirmVerification />,
  },
  {
    label: "Get Started",
    path: "/main/get-started",
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
