import {
    DeleteOutlined,
    EditOutlined,
    EyeOutlined,
    PlusOutlined,
    ProjectOutlined
} from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const AllEmployeeTable = ({ allEmployees }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col overflow-hidden">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-4 inline-block min-w-full sm:px-2 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center overflow-x-scroll">
                                <thead className="border-b bg-[#001529]">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white px-2 py-4 rounded-tl-md"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white px-2 py-4"
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white px-2 py-4"
                                        >
                                            Department
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white px-2 py-4"
                                        >
                                            Designation
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white px-2 py-4 rounded-tr-md"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allEmployees.map((employee) => (
                                            <tr className="bg-slate-100 border-b">
                                                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900 break-words">
                                                    {employee?.name}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                                                    {employee?.email}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                                                    {employee?.department}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                                                    {employee?.designation}
                                                </td>
                                                <td className="flex justify-center w-100 text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                                                    <div className="flex flex-1 gap-2 justify-center w-100">
                                                        <span
                                                            title="View Details"
                                                            className="p-2 shadow bg-white rounded-md hover:shadow-md hover:cursor-pointer"
                                                            onClick={() =>
                                                                navigate(
                                                                    "/view-employee"
                                                                )
                                                            }
                                                        >
                                                            <EyeOutlined
                                                                style={{
                                                                    fontSize:
                                                                        "18px",
                                                                }}
                                                            />
                                                        </span>
                                                        <span
                                                            title="Edit Employee Details"
                                                            className="p-2 shadow bg-white rounded-md hover:shadow-md hover:cursor-pointer"
                                                        >
                                                            <EditOutlined
                                                                style={{
                                                                    fontSize:
                                                                        "18px",
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
                                                                    fontSize:
                                                                        "18px",
                                                                }}
                                                            />
                                                        </span>
                                                        <span
                                                            title="Add Project"
                                                            onClick={() =>
                                                                navigate(
                                                                    "/add-project"
                                                                )
                                                            }
                                                            className="p-2 shadow bg-white rounded-md hover:shadow-md hover:cursor-pointer"
                                                        >
                                                            <PlusOutlined
                                                                style={{
                                                                    color: "darkBlue",
                                                                    fontSize:
                                                                        "18px",
                                                                }}
                                                            />
                                                        </span>
                                                        <span
                                                            title="View project details"
                                                            onClick={() =>
                                                                navigate(
                                                                    "/all-projects"
                                                                )
                                                            }
                                                            className="p-2 shadow bg-white rounded-md hover:shadow-md hover:cursor-pointer"
                                                        >
                                                            <ProjectOutlined
                                                                style={{
                                                                    fontSize:
                                                                        "18px",
                                                                }}
                                                            />
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
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
