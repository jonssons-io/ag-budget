import { ConfigProvider, theme } from "antd";
import useDarkMode from "./hooks/useDarkMode";
import { darkTokens, lightTokens } from "./theme/theme";
import appOverrides from "./theme/componentsOverride";
import Layout from "./layout/Layout";
import withSuspense from "./util/hoc/withSuspense";

const LayoutWithSuspense = withSuspense(Layout);

function App() {
  const [darkMode, handleChangeMode] = useDarkMode();

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: darkMode ? { ...darkTokens } : { ...lightTokens },
        components: appOverrides(darkMode),
      }}
    >
      <LayoutWithSuspense
        darkMode={darkMode}
        handleChangeMode={handleChangeMode}
      />
    </ConfigProvider>
  );
}

export default App;
