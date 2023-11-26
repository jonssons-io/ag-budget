import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu, Image, Space, Flex, Typography } from "antd";
import Logo from "../../assets/icons/icon.png";
import { sidebarRoutes } from "../../util/router/routes";

interface MenuInfo {
  key: string;
  keyPath: string[];
  /** @deprecated This will not support in future. You should avoid to use this */
  item: React.ReactInstance;
  domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { Sider } = Layout;
  const { Title } = Typography;
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
        style={{ padding: "1rem", height: isCollapsed ? "148px" : "auto" }}
      >
        <Space direction="vertical" align="center">
          <Image alt="Budget Bubblans logo" src={Logo} preview={false} />
          {!isCollapsed ? <Title level={3}>re|think</Title> : null}
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
