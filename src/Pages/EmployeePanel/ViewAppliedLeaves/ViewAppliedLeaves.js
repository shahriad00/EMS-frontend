import { ClockCircleTwoTone } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../services/axiosInstance";

const ViewAppliedLeaves = () => {
    const [leaves, setLeaves] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const { _id } = JSON.parse(localStorage.getItem("user"));
        let isMounted = true;
        if (isMounted) {
            axiosInstance
                .get(`/api/applied-leave-applications/${_id}`)
                .then((res) => {
                    console.log(res);
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
                    My Leave Applications
                </h1>
            </div>
            <div className="my-6">
                {leaves?.map((leave,i) => (
                    <div className="flex items-center justify-between gap-4 border border-sky-600 text-md font-medium rounded-lg shadow p-4 mb-2">
                        <span className="flex items-center gap-4">
                            <ClockCircleTwoTone /> {i+1}. {leave.name} [{leave.type}]...{" "}
                            
                        </span>
                        <span className="text-gray-500 font-small">Apply Date: {leave.appliedDate.slice(0, 15)}</span>
                        <div className="flex items-center justify-center gap-2">
                            Status:
                            <span className="text-yellow-600">{leave.adminResponse}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewAppliedLeaves;
