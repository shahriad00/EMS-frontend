import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import moment from 'moment';
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axiosInstance from "../../../services/axiosInstance";

const LeaveApplicationDetails = () => {

    const [info, setInfo] = useState({});
    const navigate = useNavigate();

    let { id } = useParams();
   
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            axiosInstance
                .get(`/api/leave-application/${id}`)
                .then((res) => {
                    console.log(res);
                    setInfo(res.data);
                })
                .catch((err) => console.log(err));
        }
        return () => {
            isMounted = false;
        };
    }, []);

    const handleAdminResponseForm = (response) => {
        axiosInstance.patch(`/api/leave-application/${info._id}`,{
            adminResponse : response
        })
        .then(res=> {
            console.log(res);
            toast.success(res.data.message);
            navigate('/leave-applications');
        })
        .catch(err=> {console.log(err);toast.error('Something went wrong')})
    }

    return (
        <div div className="bg-white rounded-md m-4 p-8">
            <div className="text-2xl font-semibold">Leave Application:</div>
            <p className="text-gray-500 text-sm py-3">
            From {info.name},<br/>
            {info.description}
            </p>
            <div className="my-6 bg-gray-50 rounded-md py-6 pl-5 pr-10 border inline-block">
                <div className="flex items-center text-md py-3 text-gray-600">
                    <span className="font-semibold min-w-[180px] ">
                        Requested by:
                    </span>{" "}
                    <span>{info.name}</span>
                </div>
                <hr></hr>
                <div className="flex items-center text-md py-3 text-gray-600">
                    <span className="font-semibold min-w-[180px] ">Type:</span>{" "}
                    {info.type}
                </div>
                <hr></hr>
                <div className="flex items-center text-md py-3 text-gray-600">
                    <span className="font-semibold min-w-[180px] ">
                        From (Date):
                    </span>{" "}
                    {moment(info.startDate).format("LL")}
                    
                </div>
                <hr></hr>
                <div className="flex items-center text-md py-3 text-gray-600">
                    <span className="font-semibold min-w-[180px] ">
                        To (Date):
                    </span>{" "}
                    {moment(info.endDate).format("LL")}
                </div>
            </div>
            <div className="flex gap-5">
                <div className="flex items-center gap-2 py-2 px-4 bg-red-700 text-white rounded hover:cursor-pointer hover:bg-red-800"
                onClick={()=>handleAdminResponseForm('Rejected')}
                >
                    <CloseCircleOutlined /> Reject
                </div>
                <div className="flex items-center gap-2 py-2 px-4 bg-green-700 text-white rounded hover:cursor-pointer hover:bg-green-800"
                 onClick={()=>handleAdminResponseForm('Accepted')}
                >
                    <CheckCircleOutlined /> Accept
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default LeaveApplicationDetails;
