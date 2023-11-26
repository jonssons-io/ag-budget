import { useAtom } from "jotai";
import { Layout, Switch } from "antd";
import IconMoon from "./IconMoon";
import IconSun from "./IconSun";
import { darkTokens, lightTokens } from "../../theme/theme";
import { darkModeAtom } from "../../state/atoms";

export default function CustomHeader() {
  const { Header } = Layout;
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

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
        onChange={() => setDarkMode(!darkMode)}
      />
    </Header>
  );
}
