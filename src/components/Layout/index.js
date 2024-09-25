import { message } from "antd";
import NProgress from "nprogress";
import { useRecoilValue } from "recoil";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import authAtom from "../atoms/auth.atom";
import AuthLayout from "./Auth";
import MainLayout from "./Main";

const Layouts = {
  auth: AuthLayout,
  main: MainLayout,
};

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isLoggedIn, user } = useRecoilValue(authAtom);
  const [pPath, setPPath] = useState(document.referrer);
  console.log(isLoggedIn, user);

  // NProgress & ScrollTop Management
  const currentPath = pathname;
  if (currentPath !== pPath) {
    window.scrollTo(0, 0);
    NProgress.start();
  }

  setTimeout(() => {
    NProgress.done();
    setPPath(currentPath);
  }, 3000);

  // Layout Rendering
  const getLayout = () => {
    if (/^\/auth(?=\/|$)/i.test(pathname)) return "auth";
    return "main";
  };

  const Container = Layouts[getLayout()];
  const isMainLayout = getLayout() === "main";

  // scroll to top when path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // redirect to login page if current is not login page and user not authorized
  useEffect(() => {
    if (isMainLayout && !isLoggedIn && !user?.user?.emailVerified) {
      navigate("/auth/get-started");
      message.info({ content: "Please login to proceed.", key: "updatable" });
    }
    if (isMainLayout && isLoggedIn && !user?.user?.emailVerified) {
      message.error({
        content: "Email not verified, check your mail for verification link!",
      });
    }
  }, [isLoggedIn, isMainLayout, navigate]);
  return (
    <Fragment>
      <Container>{children}</Container>
    </Fragment>
  );
};

export default Layout;
