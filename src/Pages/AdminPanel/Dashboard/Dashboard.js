import {
    FileDoneOutlined,
    FundProjectionScreenOutlined,
    SolutionOutlined
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { toast } from "react-toastify";
import axiosInstance from "../../../services/axiosInstance";

const style = {
    color: "white",
    fontSize: "32px",
};

const Dashboard = () => {
    const [allProject, setAllProject] = useState("");
    const [allEmployees, setAllEmployees] = useState("");
    const [allLeaves, setAllLeaves] = useState("");
    const [allUsers, setAllUsers] = useState("");

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            axiosInstance
                .get(`/api/all-project`)
                .then((res) => setAllProject(res.data))
                .catch((err) => {
                    toast.error("Something went wrong while Loading");
                });
            axiosInstance
                .get(`/api/all-employees`)
                .then((res) => setAllEmployees(res.data))
                .catch((err) => {
                    toast.error("Something went wrong while Loading");
                });
            axiosInstance
                .get(`/api/all-applied-leave-applications`)
                .then((res) => setAllLeaves(res.data))
                .catch((err) => {
                    toast.error("Something went wrong while Loading");
                });
            axiosInstance
                .get(`/api/all-users`)
                .then((res) => setAllUsers(res.data))
                .catch((err) => {
                    toast.error("Something went wrong while Loading");
                });
        }
        return () => {
            isMounted = false;
        };
    }, []);
    return (
        <>
            <div className="px-8 py-12">
                <div>
                    <div className="flex justify-center gap-5">
                        <Card
                            bgColor="bg-[#3499ef]"
                            number={allProject.length}
                            text="Total Projects"
                        >
                            <FundProjectionScreenOutlined style={style} />
                        </Card>
                        <Card
                            bgColor="bg-[#52ac56]"
                            number={allLeaves.length}
                            text="Leave applications"
                        >
                            <FileDoneOutlined style={style} />
                        </Card>
                    </div>
                </div>
                <div className="flex justify-center gap-5 mt-10">
                    <Card
                        bgColor="bg-[#fc9107]"
                        number={allUsers.length}
                        text="Total Users"
                    >
                        <SolutionOutlined style={style} />
                    </Card>
                    <Card
                        bgColor="bg-[#e12c6c]"
                        number={allEmployees.length}
                        text="Total Employee"
                    >
                        <FaUserFriends style={style} />
                    </Card>
                </div>
            </div>
        </>
    );
};

const Card = ({ bgColor, children, number, text }) => {
    return (
        <>
            <div className="w-[50%] bg-white rounded-lg relative shadow pl-10 pt-10 pr-5 pb-10">
                <div
                    className={`absolute ${bgColor} shadow-lg rounded-lg p-4 -top-5 left-5`}
                >
                    {children}
                </div>
                <div className="text-3xl font-bold text-right">+{number}</div>
                <div className="text-lg text-right">{text}</div>
            </div>
        </>
    );
};

export default Dashboard;
