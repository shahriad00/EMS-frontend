import { ClockCircleTwoTone, EyeOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from 'react-router-dom';

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
                <div onClick={()=> navigate('/leave-application-details')} className="flex items-center justify-between gap-4 border border-sky-600 text-md font-medium rounded-lg shadow hover:shadow-lg  hover:cursor-pointer p-4 mb-2">
                <span className="flex items-center gap-4"><ClockCircleTwoTone /> 1. Hasan qurashi [sick leave]...</span> <span className="flex items-center justify-center p-2 rounded-full bg-gray-50 hover:bg-gray-100"><EyeOutlined style={{fontSize:'20px', color:'darkGray'}}/></span>
                </div>
            </div>
        </div>
    );
};

export default LeaveApplication;

// export default LeaveApplication
