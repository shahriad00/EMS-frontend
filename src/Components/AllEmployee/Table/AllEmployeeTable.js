import {
    DeleteOutlined,
    EditOutlined,
    EyeOutlined,
    PlusOutlined,
    ProjectOutlined
} from "@ant-design/icons";
import React from "react";
import { useNavigate } from 'react-router-dom';

const AllEmployeeTable = () => {

    const navigate = useNavigate();
    
    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center">
                                <thead className="border-b bg-[#001529]">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white px-6 py-4 rounded-tl-md"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white px-6 py-4"
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white px-6 py-4"
                                        >
                                            Department
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white px-6 py-4"
                                        >
                                            Designation
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white px-6 py-4 rounded-tr-md"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-slate-100 border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            Hassan Qureshi
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            hassanq@outlook.com
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            IT consulting
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            software Engineer
                                        </td>
                                        <td className="flex justify-center w-100 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <div className="flex flex-1 gap-2 justify-center w-100">
                                                <span
                                                    title="View Details"
                                                    className="p-2 shadow bg-white rounded-md hover:shadow-md hover:cursor-pointer"
                                                >
                                                    <EyeOutlined
                                                        style={{
                                                            fontSize: "18px",
                                                        }}
                                                    />
                                                </span>
                                                <span
                                                    title="Edit Employee Details"
                                                    className="p-2 shadow bg-white rounded-md hover:shadow-md hover:cursor-pointer"
                                                >
                                                    <EditOutlined
                                                        style={{
                                                            fontSize: "18px",
                                                        }}
                                                    />
                                                </span>
                                                <span
                                                    title="Delete Employee"
                                                    className="p-2 shadow bg-white rounded-md hover:shadow-md hover:cursor-pointer"
                                                >
                                                    <DeleteOutlined
                                                        style={{
                                                            color: "red",
                                                            fontSize: "18px",
                                                        }}
                                                    />
                                                </span>
                                                <span
                                                    title="Add Project"
                                                    onClick={()=> navigate('/add-project')}
                                                    className="p-2 shadow bg-white rounded-md hover:shadow-md hover:cursor-pointer"
                                                >
                                                    <PlusOutlined
                                                        style={{
                                                            color: "darkBlue",
                                                            fontSize: "18px",
                                                        }}
                                                    />
                                                </span>
                                                <span
                                                    title="View project details"
                                                    onClick={()=> navigate('/all-projects')}
                                                    className="p-2 shadow bg-white rounded-md hover:shadow-md hover:cursor-pointer"
                                                >
                                                    <ProjectOutlined
                                                        style={{
                                                            fontSize: "18px",
                                                        }}
                                                    />
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AllEmployeeTable;