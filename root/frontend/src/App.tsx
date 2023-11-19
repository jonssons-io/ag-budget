import { Space, ConfigProvider, theme, Switch, Button, Layout } from "antd";
import useDarkMode from "./hooks/useDarkMode";
import { darkTokens, lightTokens } from "./theme/theme";

function App() {
  const [darkMode, handleChangeMode] = useDarkMode();

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: darkMode ? { ...darkTokens } : { ...lightTokens },
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Space direction="vertical">
          <Switch
            checked={darkMode}
            checkedChildren="Dark Mode"
            unCheckedChildren="Light Mode"
            onChange={() => {
              handleChangeMode();
            }}
          />
          <Button type="primary">Primary Button</Button>
          <Button type="link">Secondary Button</Button>
          <Button type="default">Danger Button</Button>
          <Button type="dashed">Success Button</Button>
          <Button type="text">Warning Button</Button>
        </Space>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
