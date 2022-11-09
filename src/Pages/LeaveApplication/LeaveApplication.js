import { ClockCircleTwoTone, EyeOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const LeaveApplication = () => {
    const navigate = useNavigate();

    return (
        <div className="m-4 p-4 bg-white rounded">
            <div>
                <h1 className="text-2xl bold font-semibold">
                    Leave Applications
                </h1>
            </div>
            <div className="my-6">
                <div
                    onClick={() => navigate("/leave-application-details")}
                    className="flex items-center justify-between gap-4 border border-sky-600 text-md font-medium rounded-lg shadow hover:shadow-lg  hover:cursor-pointer p-4 mb-2"
                >
                    <span className="flex items-center gap-4">
                        <ClockCircleTwoTone /> 1. Hasan qurashi [sick leave]...{" "}
                        <span className="text-steal-600">12-11-22</span>
                    </span>
                    <div className="flex items-center justify-center gap-5">
                        <span className="text-yellow-600">pending</span>
                        <span className="flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                            <EyeOutlined
                                style={{ fontSize: "20px", color: "black" }}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaveApplication;

// export default LeaveApplication
