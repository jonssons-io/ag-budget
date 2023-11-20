import React, { useState } from "react";
import { Layout, Menu, Image, Space, Flex, Typography } from "antd";
import type { MenuProps } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Logo from "../../assets/icons/icon.png";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

// TODO: Populate from routes and fetch selected item from URL
const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { Sider } = Layout;
  const { Title } = Typography;

  const siderStyle: React.CSSProperties = {
    margin: "1rem",
    borderRadius: "1rem",
    backdropFilter: "saturate(200%) blur(1.875rem)",
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

      <Menu mode="inline" defaultSelectedKeys={["1"]} items={items} />
    </Sider>
  );
}
