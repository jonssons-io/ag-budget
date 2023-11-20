import { ConfigProvider, theme, Layout } from "antd";
import useDarkMode from "./hooks/useDarkMode";
import { darkTokens, lightTokens } from "./theme/theme";
import appOverrides from "./theme/componentsOverride";
import Sidebar from "./layout/components/Sidebar";
import CustomHeader from "./layout/components/CustomHeader";

function App() {
  const [darkMode, handleChangeMode] = useDarkMode();
  const { Content } = Layout;

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: darkMode ? { ...darkTokens } : { ...lightTokens },
        components: appOverrides(darkMode),
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout>
          <CustomHeader
            darkMode={darkMode}
            handleChangeMode={handleChangeMode}
          />
          <Content>Content</Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
