import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
// import AxiosContextProvider from "./context/AxiosContext";
import CustomRoutes from "./components/router";
import { ConfigProvider } from "antd";

const queryClient = new QueryClient();
function App() {
  return (
    <RecoilRoot>
      <Router>
        <QueryClientProvider client={queryClient}>
          <ConfigProvider
            theme={{
              components: {
                Menu: { colorPrimary: "#344054" },
                Steps: { colorPrimary: "#F5A302" },
                Switch: { colorPrimary: "#32A071" },
                Checkbox: { colorPrimary: "#004EC4" },
                Modal: {
                  boxShadow: "0px",
                  boxShadowSecondary: "0px",
                  boxShadowTertiary: "0px",
                },
              },
            }}
          >
            <CustomRoutes />
          </ConfigProvider>
        </QueryClientProvider>
      </Router>
    </RecoilRoot>
  );
}

export default App;
