import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu, Space, Flex } from "antd";
import { useAtomValue } from "jotai";
import { sidebarRoutes } from "../../util/router/routes";
import RethinkLogo from "../../assets/RethinkLogo";
import { darkModeAtom } from "../../state/atoms";

interface MenuInfo {
  key: string;
  keyPath: string[];
  /** @deprecated This will not support in future. You should avoid to use this */
  item: React.ReactInstance;
  domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}

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

  const handleMenuClick = (e: MenuInfo) => {
    if (e.key) {
      const target = sidebarRoutes.find((item) => item.key === e.key) || null;
      if (target) {
        navigate(target.key);
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

      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={sidebarRoutes}
        onClick={(e) => handleMenuClick(e)}
      />
    </Sider>
  );
}
