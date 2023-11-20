import { Layout, Switch } from "antd";
import IconMoon from "./IconMoon";
import IconSun from "./IconSun";
import { darkTokens, lightTokens } from "../../theme/theme";

type CustomHeaderProps = {
  darkMode: boolean;
  handleChangeMode: () => void;
};

export default function CustomHeader({
  darkMode,
  handleChangeMode,
}: CustomHeaderProps) {
  const { Header } = Layout;

  return (
    <Header>
      <Switch
        size="default"
        checked={darkMode}
        checkedChildren={
          <IconMoon
            color={
              darkMode ? darkTokens.colorTextBase : lightTokens.colorTextBase
            }
            size={18}
          />
        }
        unCheckedChildren={
          <IconSun
            color={
              darkMode ? darkTokens.colorTextBase : lightTokens.colorTextBase
            }
            size={18}
          />
        }
        onChange={() => {
          handleChangeMode();
        }}
      />
    </Header>
  );
}
