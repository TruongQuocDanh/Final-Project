import { Layout, Menu } from "antd";
import {
  BookOutlined,
  UserOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import "./Sidebar.css";

const { Sider } = Layout;

export default function Sidebar({ collapsed }) {
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      trigger={null}
      width={220}
      className="sidebar"
    >
      {/* Logo */}
      <div className="sidebar-logo">
        {!collapsed ? (
          <h2 className="sidebar-title">36BOOKSTORE</h2>
        ) : (
          <h2 className="sidebar-title">36B</h2>
        )}
      </div>

      {/* Menu */}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          { key: "1", icon: <BookOutlined />, label: "Product Management" },
          { key: "2", icon: <UserOutlined />, label: "User Management" },
          { key: "3", icon: <SettingOutlined />, label: "Setting" },
        ]}
        className="sidebar-menu"
      />

      {/* Log out button */}
      <div className="sidebar-footer">
        <button className="logout-btn">
          <PoweroffOutlined /> {!collapsed && "Log Out"}
        </button>
      </div>
    </Sider>
  );
}
