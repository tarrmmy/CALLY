import React, { Suspense } from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import { routes } from "./routes";
import Layout from "../Layout";
import Loading from "../loading";

export default function CustomRoutes() {
  return (
    <div className="w-full h-full">
      <Layout>
        <Routes>
          {routes.map(({
            path,
            component,
          }) => {
            return (
              <Route
                key={path}
                path={path}
                element={
                  <Suspense fallback={<Loading />}>{component}</Suspense>
                }
              />
            );
          })}
        </Routes>
      </Layout>
    </div>
  );
}

export * from "./routes";
