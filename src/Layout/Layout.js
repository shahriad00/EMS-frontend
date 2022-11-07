import {
  AlignRightOutlined,
  EyeOutlined,
  FileOutlined,
  FileSearchOutlined,
  LogoutOutlined,
  PieChartOutlined,
  UserAddOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AddEmployee from "../Pages/AddEmployee/AddEmployee";
import AddProject from "../Pages/AddProject/AddProject";
import AllEmployees from "../Pages/AllEmployees/AllEmployees";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ViewProject from "../Pages/ViewProjects/ViewProject";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem("Dashboard", "/dashboard", <PieChartOutlined />),
    getItem("View Employees", "/all-employees", <EyeOutlined />),
    getItem("Add Employees", "/add-employees", <UserAddOutlined />),
    getItem("Leave Applications", "/leave-applications", <FileOutlined />),
    getItem("View Attendance", "/view-attendance", <AlignRightOutlined />),
    getItem("Mark Attendance", "/mark-attendance", <FileSearchOutlined />),
    getItem("View Profile", "/profile", <UserOutlined />),
    getItem("Logout", "/logout", <LogoutOutlined />),
];

const AppLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    return (
        <Layout
            style={{
                minHeight: "100vh",
            }}
        >
            <Sider
                style={{
                    height: "100vh",
                    position: "sticky",
                    top:0
                }}
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className="logo flex justify-center"></div>
                <Menu
                    onClick={({ key }) => {
                        if (key === "/logout") {
                            alert("logout");
                        } else {
                            navigate(key);
                        }
                    }}
                    theme="dark"
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    items={items}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: "0 20px",
                        background: "white",
                    }}
                >
                    <p style={{ fontWeight: "bold" }}>header</p>
                </Header>
                <Content>
                    <Routes>
                        {/* <Route path='/' element={<Login/>} /> */}
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route
                            path="/all-employees"
                            element={<AllEmployees />}
                        />
                        <Route
                            path="/add-employees"
                            element={<AddEmployee />}
                        />
                        <Route path="/add-project" element={<AddProject />} />
                        <Route path="/all-projects" element={<ViewProject />} />
                    </Routes>
                </Content>
                <Footer
                    style={{
                        textAlign: "center",
                    }}
                >
                    EMS ©{new Date().getFullYear()} Created by Shah Jahidul
                    Islam Riad
                </Footer>
            </Layout>
        </Layout>
    );
};
export default AppLayout;
