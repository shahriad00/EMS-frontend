import {
    AlignRightOutlined,
    CopyOutlined,
    EyeOutlined,
    FileOutlined,
    FileSearchOutlined,
    LogoutOutlined,
    PieChartOutlined,
    PoweroffOutlined,
    UserAddOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import { Route, Routes, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AllAttendance from "../Pages/AdminPanel/AllAttendance/AllAttendance";
import AllUsers from "../Pages/AdminPanel/AllUsers/AllUsers";
import Dashboard from "../Pages/AdminPanel/Dashboard/Dashboard";
import AddEmployee from "../Pages/AdminPanel/Employee/AddEmployee/AddEmployee";
import AllEmployees from "../Pages/AdminPanel/Employee/AllEmployees/AllEmployees";
import UpdateEmployee from "../Pages/AdminPanel/Employee/UpdateEmployee/UpdateEmployee";
import ViewEmployee from "../Pages/AdminPanel/Employee/ViewEmployee/ViewEmployee";
import LeaveApplication from "../Pages/AdminPanel/LeaveApplication/LeaveApplication";
import LeaveApplicationDetails from "../Pages/AdminPanel/LeaveApplication/LeaveApplicationDetails";
import AddProject from "../Pages/AdminPanel/Project/AddProject/AddProject";
import UpdateProject from "../Pages/AdminPanel/Project/UpdateProject/UpdateProject";
import ViewAllProjects from "../Pages/AdminPanel/Project/ViewAllProjects/ViewAllProjects";
import ViewSingleProject from "../Pages/AdminPanel/Project/ViewSingleProject/ViewSingleProject";
import Login from "../Pages/Auth/Login/Login";
import Signup from "../Pages/Auth/Signup/Signup";
import ApplyForLeave from "../Pages/EmployeePanel/ApplyForLeave/ApplyForLeave";
import EmployeeDashboard from "../Pages/EmployeePanel/EmployeeDashboard/EmployeeDashboard";
import MarkAttendance from "../Pages/EmployeePanel/MarkAttendance/MarkAttendance";
import ViewAppliedLeaves from "../Pages/EmployeePanel/ViewAppliedLeaves/ViewAppliedLeaves";
import ViewAttendance from "../Pages/EmployeePanel/ViewAttendance/ViewAttendance";
import Profile from "../Pages/Profile/Profile";
import Protected from "./ProtectedRoute";
import EmployeeProtected from "./EmployeeProtectedRoute";

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
    getItem("View Attendance", "/all-attendance", <AlignRightOutlined />),
    getItem("All Users", "/all-users", <FiUsers />),
    getItem("View Profile", "/profile", <UserOutlined />),
    getItem("Logout", "/logout", <LogoutOutlined />),
];

const EmployeeItems = [
    getItem("Dashboard", "/employee/dashboard", <PieChartOutlined />),
    getItem("Apply for Leave", "/apply-leave-application", <FileOutlined />),
    getItem("All Applied Leaves", "/view-applied-leaves", <CopyOutlined />),
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
            user?.role === 'admin' ? navigate('/dashboard') : navigate('/employee/dashboard')
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

                        <Route
                            path={"/"}
                            element={
                                <Protected
                                    role={user?.role}
                                    isSignedIn={isLoggedin}
                                >
                                    <Dashboard />
                                </Protected>
                            }
                        />
                        <Route
                            path={"/dashboard"}
                            element={
                                <Protected
                                    role={user?.role}
                                    isSignedIn={isLoggedin}
                                >
                                    <Dashboard />
                                </Protected>
                            }
                        />
                        <Route
                            path={"/"}
                            element={
                                <Protected
                                    role={user?.role}
                                    isSignedIn={isLoggedin}
                                >
                                    <AllEmployees />
                                </Protected>
                            }
                        />
                        <Route
                            path="/add-employees"
                            element={
                                <Protected
                                    role={user?.role}
                                    isSignedIn={isLoggedin}
                                >
                                    <AddEmployee />
                                </Protected>
                            }
                        />
                        <Route
                            path="/update-employee/:id"
                            element={
                                <Protected
                                    role={user?.role}
                                    isSignedIn={isLoggedin}
                                >
                                    <UpdateEmployee />
                                </Protected>
                            }
                        />
                        <Route
                            path="/view-employee/:id"
                            element={
                                <Protected
                                    role={user?.role}
                                    isSignedIn={isLoggedin}
                                >
                                    <ViewEmployee />
                                </Protected>
                            }
                        />
                        <Route
                            path="/add-project/:name/:id"
                            element={
                                <Protected
                                    role={user?.role}
                                    isSignedIn={isLoggedin}
                                >
                                    <AddProject />
                                </Protected>
                            }
                        />
                        <Route
                            path="/all-projects/:id"
                            element={
                                <Protected
                                    role={user?.role}
                                    isSignedIn={isLoggedin}
                                >
                                    <ViewAllProjects />
                                </Protected>
                            }
                        />

                        <Route
                            path="/view-project/:id"
                            element={
                                <Protected
                                    role={user?.role}
                                    isSignedIn={isLoggedin}
                                >
                                    <ViewSingleProject />
                                </Protected>
                            }
                        />
                        <Route
                            path="/update-project/:id"
                            element={
                                <Protected
                                    role={user?.role}
                                    isSignedIn={isLoggedin}
                                >
                                    <UpdateProject />
                                </Protected>
                            }
                        />
                        <Route
                            path="/leave-applications"
                            element={
                                <Protected
                                    role={user?.role}
                                    isSignedIn={isLoggedin}
                                >
                                    <LeaveApplication />
                                </Protected>
                            }
                        />
                        <Route
                            path="/leave-application-details/:id"
                            element={
                                <Protected
                                    role={user?.role}
                                    isSignedIn={isLoggedin}
                                >
                                    <LeaveApplicationDetails />
                                </Protected>
                            }
                        />
                        <Route
                            path="/all-attendance"
                            element={
                                <Protected
                                    role={user?.role}
                                    isSignedIn={isLoggedin}
                                >
                                    <AllAttendance />
                                </Protected>
                            }
                        />
                        <Route
                            path="/profile"
                            element={
                                <Protected
                                    role={user?.role}
                                    isSignedIn={isLoggedin}
                                >
                                    <Profile />
                                </Protected>
                            }
                        />
                        <Route
                            path="/all-user?s"
                            element={
                                <Protected
                                    role={user?.role}
                                    isSignedIn={isLoggedin}
                                >
                                    <AllUsers />
                                </Protected>
                            }
                        />

                        <Route
                            path="/employee/dashboard"
                            element={
                                <EmployeeProtected
                                    role={user?.role}
                                    isSignedIn={isLoggedin}
                                >
                                    {" "}
                                    <EmployeeDashboard />{" "}
                                </EmployeeProtected>
                            }
                        />
                        <Route path="/profile" element={<Profile />} />
                        <Route
                            path="/apply-leave-application"
                            element={
                                <EmployeeProtected
                                    role={user?.role}
                                    isSignedIn={isLoggedin}
                                >
                                    <ApplyForLeave />{" "}
                                </EmployeeProtected>
                            }
                        />
                        <Route
                            path="/employee/view-attendance"
                            element={
                                <EmployeeProtected
                                    role={user?.role}
                                    isSignedIn={isLoggedin}
                                >
                                    <ViewAttendance />
                                </EmployeeProtected>
                            }
                        />
                        <Route
                            path="/employee/mark-attendance"
                            element={
                                <EmployeeProtected
                                    role={user?.role}
                                    isSignedIn={isLoggedin}
                                >
                                    <MarkAttendance />
                                </EmployeeProtected>
                            }
                        />
                        <Route
                            path="/view-applied-leaves"
                            element={
                                <EmployeeProtected
                                    role={user?.role}
                                    isSignedIn={isLoggedin}
                                >
                                    <ViewAppliedLeaves />
                                </EmployeeProtected>
                            }
                        />
                    </Routes>
                </Content>
                <Footer
                    className={`${
                        isLoggedin ? "block" : "hidden"
                    } text-slate-400 text-center`}
                >
                    EMS ©{new Date().getFullYear()} Created by Shah Jahidul
                    Islam Riad
                </Footer>
            </Layout>
        </Layout>
    );
};
export default AppLayout;
