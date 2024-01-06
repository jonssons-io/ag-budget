import { useAtom } from "jotai";
import { Flex, Layout, Switch } from "antd";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import IconMoon from "./IconMoon";
import IconSun from "./IconSun";
import { darkTokens, lightTokens } from "../../theme/theme";
import { darkModeAtom } from "../../state/atoms";

export default function CustomHeader() {
  const { Header } = Layout;
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",

        width: "100%",
      }}
    >
      <Flex justify="space-between" align="center" style={{ width: "100%" }}>
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
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
      </Flex>
    </Header>
  );
}
