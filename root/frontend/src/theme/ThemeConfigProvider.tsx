import { ConfigProvider, theme } from "antd";
import { useAtomValue } from "jotai";
import { darkModeAtom } from "../state/atoms";
import { darkTokens, lightTokens } from "./theme";
import appOverrides from "./componentsOverride";

export default function ThemeConfigProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkMode = useAtomValue(darkModeAtom);
  const themeConfig = {
    algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: darkMode ? { ...darkTokens } : { ...lightTokens },
    components: appOverrides(darkMode),
  };
  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
}
