import { ClockCircleTwoTone, EyeOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/axiosInstance";

const LeaveApplication = () => {
    const navigate = useNavigate();
    const [leaves, setLeaves] = useState();

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            axiosInstance
                .get(`/api/all-applied-leave-applications`)
                .then((res) => {
                    console.log(res.data);
                    setLeaves(res.data);
                })
                .catch((err) => console.log(err));
        }
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div className="m-4 p-4 bg-white rounded">
            <div>
                <h1 className="text-2xl bold font-semibold">
                    Leave Applications
                </h1>
            </div>
            <div className="my-6">
                {leaves?.map((leave, i) => (
                    <div
                        key = {leave._id}
                        onClick={() => navigate(`/leave-application-details/${leave._id}`)}
                        className="flex items-center justify-between gap-4 border border-sky-600 text-md font-medium rounded-lg shadow hover:shadow-lg  hover:cursor-pointer p-4 mb-4"
                    >
                        <span className="flex items-center gap-4">
                            <ClockCircleTwoTone /> {i+1}. {leave?.name} - [{leave?.type}]...{" "}
                
                        </span>
                        <span className="text-gray-500 font-small">Apply Date: {leave.appliedDate.slice(0, 15)}</span>
                        <div className="flex items-center justify-center gap-5">
                            {leave.adminResponse === 'Accepted' && <span className="text-green-600">{leave.adminResponse}</span>}
                            {leave.adminResponse === 'Rejected' && <span className="text-red-600">{leave.adminResponse}</span>}
                            {leave.adminResponse === 'pending' && <span className="text-yellow-600">{leave.adminResponse}</span>}
                            <span className="flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                                <EyeOutlined
                                    style={{ fontSize: "20px", color: "black" }}
                                />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeaveApplication;

// export default LeaveApplication
