import {
    DeleteOutlined,
    EditOutlined,
    EyeOutlined,
    PlusOutlined,
    ProjectOutlined,
} from "@ant-design/icons";
import React from "react";

const AllEmployeeTable = () => {
    return (
        <>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-center">
                                <thead class="border-b bg-[#001529]">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="text-sm font-medium text-white px-6 py-4 rounded-tl-md"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            class="text-sm font-medium text-white px-6 py-4"
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            class="text-sm font-medium text-white px-6 py-4"
                                        >
                                            Department
                                        </th>
                                        <th
                                            scope="col"
                                            class="text-sm font-medium text-white px-6 py-4"
                                        >
                                            Designation
                                        </th>
                                        <th
                                            scope="col"
                                            class="text-sm font-medium text-white px-6 py-4 rounded-tr-md"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-slate-100 border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            Hassan Qureshi
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            hassanq@outlook.com
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            IT consulting
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            software Engineer
                                        </td>
                                        <td class="flex justify-center w-100 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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
