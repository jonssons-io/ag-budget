import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu, Space, Flex } from "antd";
import { useAtomValue } from "jotai";
import { sidebarItemsMap } from "../../util/router/routes";
import RethinkLogo from "../../assets/RethinkLogo";
import { darkModeAtom } from "../../state/atoms";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const darkMode = useAtomValue(darkModeAtom);
  const { Sider } = Layout;
  const navigate = useNavigate();

  const siderStyle: React.CSSProperties = {
    margin: "1rem",
    borderRadius: "1rem",
    backdropFilter: "saturate(200%) blur(1.875rem)",
  };

  const handleMenuClick = (menuItemKey: string) => {
    if (sidebarItemsMap && menuItemKey) {
      const flattenedItems = sidebarItemsMap.flatMap((item) =>
        item.children ? [item, ...item.children] : item,
      );
      const target =
        flattenedItems.find((item) => item.key === menuItemKey) || null;
      if (target) {
        navigate(target.key as string);
      }
    }
  };

  return (
    <Sider
      style={siderStyle}
      collapsible
      collapsed={isCollapsed}
      onCollapse={(value) => setIsCollapsed(value)}
      width={260}
    >
      <Flex
        align="center"
        justify="center"
        style={{ padding: "1rem", height: "150px" }}
      >
        <Space direction="vertical" align="center">
          <RethinkLogo
            darkMode={darkMode}
            width={isCollapsed ? 80 : 100}
            text={!isCollapsed}
          />
        </Space>
      </Flex>
      <Flex vertical justify="center">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={sidebarItemsMap}
          onClick={(menuItem) => handleMenuClick(menuItem.key)}
        />
      </Flex>
    </Sider>
  );
}
