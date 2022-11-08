import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import React from "react";

const LeaveApplicationDetails = () => {
    return (
        <div div className="bg-white rounded-md m-4 p-8">
            <div className="text-2xl font-semibold">Leave Application:</div>
            <p className="text-gray-500 text-sm py-3">
            Dear (Recipient’s Name)

I am writing this email with reference to my remaining annual leave quota. I am planning to go on a trip to Europe with my family. Thus, I would like to avail my remaining 25 days of annual leave from (Date) to (Date) 

I have assigned my duties to ( name of a team member) for the current project we are working on. He/She has been working with me and understands the role effectively. Also, I am looking for all the essential inputs required for the project before I leave for the vacation.

I request you to consider my leave request. During my absence, I can be reached at my phone number and email id (Email address and contact no). 
            </p>
            <div className="my-6 bg-gray-50 rounded-md py-6 pl-5 pr-10 border inline-block">
                <div className="flex items-center text-md py-3 text-gray-600">
                    <span className="font-semibold min-w-[180px] ">
                        Requested by:
                    </span>{" "}
                    <span>Hasan Quraishi</span>
                </div>
                <hr></hr>
                <div className="flex items-center text-md py-3 text-gray-600">
                    <span className="font-semibold min-w-[180px] ">Type:</span>{" "}
                    Sick leave
                </div>
                <hr></hr>
                <div className="flex items-center text-md py-3 text-gray-600">
                    <span className="font-semibold min-w-[180px] ">
                        From (Date):
                    </span>{" "}
                    3/11/22
                </div>
                <hr></hr>
                <div className="flex items-center text-md py-3 text-gray-600">
                    <span className="font-semibold min-w-[180px] ">
                        To (Date):
                    </span>{" "}
                    21/11/22
                </div>
            </div>
            <div className="flex gap-5">
                <div className="flex items-center gap-2 py-2 px-4 bg-red-700 text-white rounded hover:cursor-pointer hover:bg-red-800">
                    <CloseCircleOutlined /> Reject
                </div>
                <div className="flex items-center gap-2 py-2 px-4 bg-green-700 text-white rounded hover:cursor-pointer hover:bg-green-800">
                    <CheckCircleOutlined /> Accept
                </div>
            </div>
        </div>
    );
};

export default LeaveApplicationDetails;
