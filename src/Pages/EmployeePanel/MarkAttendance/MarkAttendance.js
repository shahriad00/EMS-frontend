import { PlusCircleFilled } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../../services/axiosInstance";

const MarkAttendance = () => {
    const navigate = useNavigate();
    const { _id, name } = JSON.parse(localStorage.getItem("user"));

    const handleAttendance = () => {
        axiosInstance
            .post(`/api/mark-attendance`, {
                employeeID: _id,
                name,
                month: new Date().getMonth() + 1,
                date: new Date().getDate(),
                year: new Date().getFullYear(),
                fullDate: new Date(),
                present: true,
            })
            .then((res) => {
                toast.success(res.data.message);
                navigate(`/employee/view-attendance`);
            })
            .catch((err) => {
                console.log(err);
                toast.error("somthing went wrong");
            });
    };

    return (
        <div className="min-h-[75vh] flex items-center justify-center">
            <span
                className="text-center text-xl p-8 rounded-lg border-[#1890ff] border-dashed bg-white border-2 hover:shadow-xl hover:cursor-pointer"
                onClick={handleAttendance}
            >
                Click Here
                <br />
                Mark Attendance
                <br />
                <PlusCircleFilled
                    style={{
                        fontSize: "30px",
                        color: "#1890ff",
                        marginTop: "20px",
                    }}
                />
            </span>
        </div>
    );
};

export default MarkAttendance;
