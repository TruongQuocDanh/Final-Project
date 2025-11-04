import { Layout, Menu } from "antd";
import {
  BookOutlined,
  UserOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

export default function Sidebar({ collapsed = false }) {
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      trigger={null}
      width={220}
      style={{
        background: "#0e1a40",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ textAlign: "center", padding: "16px 0" }}>
        <h2 style={{ color: "#fff", fontWeight: "bold", fontSize: "20px" }}>
          {collapsed ? "36B" : "36BOOKSTORE"}
        </h2>
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          { key: "1", icon: <BookOutlined />, label: "Product Management" },
          { key: "2", icon: <UserOutlined />, label: "User Management" },
          { key: "3", icon: <SettingOutlined />, label: "Setting" },
        ]}
        style={{ background: "#0e1a40", flex: 1, borderRight: "none" }}
      />

      <div style={{ padding: "16px" }}>
        <button
          style={{
            width: "100%",
            background: "#d62828",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "8px 12px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          <PoweroffOutlined /> {!collapsed && "Log Out"}
        </button>
      </div>
    </Sider>
  );
}
