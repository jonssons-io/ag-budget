import colors from "./customcolors";

const appOverrides = (darkMode: boolean) => {
  return {
    Layout: {
      bodyBg: darkMode ? colors.paper1.dark : colors.paper1.light,
      headerBg: darkMode ? colors.paper1.dark : colors.paper1.light,
      headerColor: darkMode
        ? colors.text.primary.main.dark
        : colors.text.primary.main.light,
      headerPadding: "0",
      siderBg: darkMode ? colors.paper0.dark : colors.paper0.light,
      triggerBg: darkMode
        ? colors.primary.lighter.dark
        : colors.primary.lighter.light,
      triggerColor: darkMode
        ? colors.text.primary.main.dark
        : colors.text.primary.main.light,
      lineHeight: 120,
    },
    Menu: {
      itemBg: darkMode ? colors.paper0.dark : colors.paper0.light,
      itemMarginBlock: 0,
      itemMarginInline: 0,
      itemColor: darkMode
        ? colors.text.primary.main.dark
        : colors.text.primary.main.light,
      itemSelectedBg: darkMode
        ? colors.primary.lighter.dark
        : colors.primary.lighter.light,
      itemSelectedColor: darkMode
        ? colors.text.primary.lighter.dark
        : colors.text.primary.main.light,
      activeBarBorderWidth: 0,
    },
    Table: {
      headerBg: darkMode ? colors.paper0.dark : colors.paper0.light,
      headerSortActiveBg: darkMode ? colors.paper2.dark : colors.paper2.light,
      headerSortHoverBg: darkMode ? colors.paper2.dark : colors.paper2.light,
      rowHoverBg: darkMode ? colors.paper0.dark : colors.paper0.light,
      rowSelectedBg: darkMode ? colors.paper2.dark : colors.paper2.light,
      rowSelectedHoverBg: darkMode ? colors.paper2.dark : colors.paper2.light,
    },
  };
};
export default appOverrides;
