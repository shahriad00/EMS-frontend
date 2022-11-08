import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const AllProjectsTable = () => {
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
                                            #
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white px-6 py-4"
                                        >
                                            title
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white px-6 py-4"
                                        >
                                            type
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white px-6 py-4"
                                        >
                                            status
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
                                            1
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            Ems system
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Software
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Ongoing
                                        </td>
                                        <td className="flex justify-center w-100 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <div className="flex flex-1 gap-2 justify-center w-100">
                                                <span
                                                    title="View project"
                                                    className="p-2 shadow bg-white rounded-md hover:shadow-md hover:cursor-pointer"
                                                    onClick={()=> navigate('/view-project')}
                                                >
                                                    <EyeOutlined
                                                        style={{
                                                            fontSize: "18px",
                                                        }}
                                                    />
                                                </span>
                                                <span
                                                    title="Edit project"
                                                    className="p-2 shadow bg-white rounded-md hover:shadow-md hover:cursor-pointer"
                                                    onClick={()=> navigate('/update-project')}
                                                >
                                                    <EditOutlined
                                                        style={{
                                                            fontSize: "18px",
                                                        }}
                                                    />
                                                </span>
                                                <span
                                                    title="Delete project"
                                                    className="p-2 shadow bg-white rounded-md hover:shadow-md hover:cursor-pointer"
                                                >
                                                    <DeleteOutlined
                                                        style={{
                                                            color: "red",
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
export default AllProjectsTable;
