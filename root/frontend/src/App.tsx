import { Space, ConfigProvider, theme, Switch } from "antd";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [darkMode, handleChangeMode] = useDarkMode();

  return (
    <div
      style={{
        background: darkMode ? "black" : "white",
        height: "calc(100vh)",
      }}
    >
      <ConfigProvider
        theme={{
          algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <Space direction="vertical">
          <Switch
            checked={darkMode}
            checkedChildren="Dark Mode"
            unCheckedChildren="Light Mode"
            onChange={() => {
              handleChangeMode();
            }}
          />
        </Space>
      </ConfigProvider>
    </div>
  );
}

export default App;
