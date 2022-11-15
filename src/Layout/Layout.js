import {
    AlignRightOutlined,
    EyeOutlined,
    FileOutlined,
    FileSearchOutlined,
    LogoutOutlined,
    PieChartOutlined,
    PoweroffOutlined,
    UserAddOutlined,
    UserOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Login from "../Pages/Auth/Login/Login";
import Signup from "../Pages/Auth/Signup/Signup";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddEmployee from "../Pages/Employee/AddEmployee/AddEmployee";
import AllEmployees from "../Pages/Employee/AllEmployees/AllEmployees";
import ViewEmployee from "../Pages/Employee/ViewEmployee/ViewEmployee";
import ApplyForLeave from "../Pages/EmployeePanel/ApplyForLeave/ApplyForLeave";
import MarkAttendance from "../Pages/EmployeePanel/MarkAttendance/MarkAttendance";
import ViewAppliedLeaves from "../Pages/EmployeePanel/ViewAppliedLeaves/ViewAppliedLeaves";
import ViewAttendance from "../Pages/EmployeePanel/ViewAttendance/ViewAttendance";
import LeaveApplication from "../Pages/LeaveApplication/LeaveApplication";
import LeaveApplicationDetails from "../Pages/LeaveApplication/LeaveApplicationDetails";
import Profile from "../Pages/Profile/Profile";
import AddProject from "../Pages/Project/AddProject/AddProject";
import ViewAllProjects from "../Pages/Project/ViewAllProjects/ViewAllProjects";
import ViewSingleProject from "../Pages/Project/ViewSingleProject/ViewSingleProject";
import UpdateEmployee from "./../Pages/Employee/UpdateEmployee/UpdateEmployee";
import UpdateProject from "./../Pages/Project/UpdateProject/UpdateProject";

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

const EmployeeItems = [
    getItem("Dashboard", "/employee/dashboard", <PieChartOutlined />),
    getItem("Apply for Leave", "/apply-leave-application", <FileOutlined />),
    getItem("All Applied Leaves", "/view-applied-leaves", <FileOutlined />),
    getItem(
        "View Attendance",
        "/employee/view-attendance",
        <AlignRightOutlined />
    ),
    getItem(
        "Mark Attendance",
        "/employee/mark-attendance",
        <FileSearchOutlined />
    ),
    getItem("View Profile", "/profile", <UserOutlined />),
    getItem("Logout", "/logout", <LogoutOutlined />),
];

const AppLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            const token = JSON.parse(localStorage.getItem("token"));
            const user = JSON.parse(localStorage.getItem("user"));
            setUser(user);
            token ? setIsLoggedin(true) : setIsLoggedin(false);
        }
        return () => {
            isMounted = false;
        };
    }, []);

    const handleLogOut = () => {
        setIsLoggedin(false);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        toast.success("logged out successfully");
        navigate("/login");
    };

    return (
        <Layout className="min-h-screen">
            <Sider
                className={`${
                    isLoggedin ? "block" : "hidden"
                } h-screen sticky top-0`}
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className="logo flex justify-center"></div>
                {user?.role === "admin" && (
                    <Menu
                        onClick={({ key }) => {
                            if (key === "/logout") {
                                handleLogOut();
                            } else {
                                navigate(key);
                            }
                        }}
                        theme="dark"
                        defaultSelectedKeys={["/dashboard"]}
                        mode="inline"
                        items={items}
                    />
                )}
                {user?.role === "employee" && (
                    <Menu
                        onClick={({ key }) => {
                            if (key === "/logout") {
                                handleLogOut();
                            } else {
                                navigate(key);
                            }
                        }}
                        theme="dark"
                        defaultSelectedKeys={["/dashboard"]}
                        mode="inline"
                        items={EmployeeItems}
                    />
                )}
            </Sider>
            <Layout className="site-layout">
                <ToastContainer />
                <Header
                    className={`${
                        isLoggedin ? "block" : "hidden"
                    } shadow flex items-center justify-end`}
                    style={{
                        padding: "0 20px",
                        background: "white",
                        position: "sticky",
                        top: "0",
                        zIndex: "999",
                    }}
                >
                    <button
                        onClick={handleLogOut}
                        className="flex items-center gap-2 p-2 rounded-lg h-[34px] border hover:shadow-md"
                    >
                        <PoweroffOutlined style={{ color: "red" }} />{" "}
                        <span>Logout</span>
                    </button>
                </Header>
                <Content>
                    <Routes>
                        <Route path="/login" element={<Login />} />

                        <Route path="/sign-up" element={<Signup />} />

                        {isLoggedin && user.role === "admin" && (
                            <>
                                <Route path="/" element={<Dashboard />} />
                                <Route
                                    path="/dashboard"
                                    element={<Dashboard />}
                                />
                                <Route
                                    path="/all-employees"
                                    element={<AllEmployees />}
                                />
                                <Route
                                    path="/add-employees"
                                    element={<AddEmployee />}
                                />
                                <Route
                                    path="/update-employee"
                                    element={<UpdateEmployee />}
                                />
                                <Route
                                    path="/view-employee"
                                    element={<ViewEmployee />}
                                />
                                <Route
                                    path="/add-project"
                                    element={<AddProject />}
                                />
                                <Route
                                    path="/all-projects"
                                    element={<ViewAllProjects />}
                                />

                                <Route
                                    path="/view-project"
                                    element={<ViewSingleProject />}
                                />
                                <Route
                                    path="/update-project"
                                    element={<UpdateProject />}
                                />
                                <Route
                                    path="/leave-applications"
                                    element={<LeaveApplication />}
                                />
                                <Route
                                    path="/leave-application-details/:id"
                                    element={<LeaveApplicationDetails />}
                                />
                                <Route path="/profile" element={<Profile />} />
                            </>
                        )}
                        {isLoggedin && user.role === "employee" && (
                            <>
                                <Route path="/profile" element={<Profile />} />
                                <Route
                                    path="/apply-leave-application"
                                    element={<ApplyForLeave />}
                                />
                                <Route
                                    path="/employee/view-attendance"
                                    element={<ViewAttendance />}
                                />
                                <Route
                                    path="/employee/mark-attendance"
                                    element={<MarkAttendance />}
                                />
                                <Route
                                    path="/view-applied-leaves"
                                    element={<ViewAppliedLeaves />}
                                />
                            </>
                        )}
                    </Routes>
                </Content>
                <Footer className="text-slate-400 text-center">
                    EMS ©{new Date().getFullYear()} Created by Shah Jahidul
                    Islam Riad
                </Footer>
            </Layout>
        </Layout>
    );
};
export default AppLayout;
