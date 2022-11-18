import {
    UserOutlined
} from "@ant-design/icons";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../../services/axiosInstance";

const ViewEmployee = () => {
    const [employee,  setEmployee] = useState({})

    let { id } = useParams();
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            axiosInstance
                .get(`/api/employee-details/${id}`)
                .then((res) => {
                    setEmployee(res.data);
                })
                .catch((err) => console.log(err));
        }
        return () => {
            isMounted = false;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
           <div className="mx-8 my-3 p-4 bg-white rounded-lg shadow">
                <div className="flex gap-5 items-center">
                    <span style={{height: "80px", width: "80px"}} className="m-4 p-4 flex justify-center items-center rounded-full bg-white shadow-md">
                        <UserOutlined style={{color:'#1890ff',fontSize:'40px'}}/>
                    </span>
                    <div className="flex flex-col gap-2">
                        <div className="font-semibold text-3xl">{employee.name}</div>
                        <div className="font-small text-gray-500">{employee.designation}</div>
                    </div>
                </div>
                <div  className="flex mt-2 w-full">
                    <div className="min-w-[132px]"></div>
                    <div className="flex-1">
                        <div className="text-[#1890ff] text-lg">Details</div>
                        <hr/>
                        <table className="mt-2">
                            <thead></thead>
                            <tbody>
                                <tr className="h-[40px]">
                                    <td className="w-[200px] font-semibold">Full Name :</td>
                                    <td>{employee.name}</td>
                                </tr>
                                <tr className="h-[40px]">
                                    <td className="w-[200px] font-semibold">Email :</td>
                                    <td>{employee.email}</td>
                                </tr>
                                <tr className="h-[40px]">
                                    <td className="w-[200px] font-semibold">Date of Birth :</td>
                                    <td>{moment(employee.dateOfBirth).format('LL') }</td>
                                </tr>
                                <tr className="h-[40px]">
                                    <td className="w-[200px] font-semibold">Contact Number :</td>
                                    <td>+880{employee.contactNumber}</td>
                                </tr>
                                <tr className="h-[40px]">
                                    <td className="w-[200px] font-semibold">Department :</td>
                                    <td>{employee.department}</td>
                                </tr>
                                <tr className="h-[40px]">
                                    <td className="w-[200px] font-semibold">Designation :</td>
                                    <td>{employee.designation}</td>
                                </tr>
                                <tr className="h-[40px]">
                                    <td className="w-[200px] font-semibold">Salary :</td>
                                    <td>{employee.salary}৳</td>
                                </tr>
                                <tr className="h-[40px]">
                                    <td className="w-[200px] font-semibold">Address :</td>
                                    <td>{employee.address}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
               
           </div>
        </>
    );
};

export default ViewEmployee;
