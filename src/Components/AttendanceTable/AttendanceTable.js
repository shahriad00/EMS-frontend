import moment from 'moment/moment';
import React from "react";
import { useNavigate } from "react-router-dom";

const AttendanceTable = ({ attendance }) => {
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
                                            Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white px-6 py-4"
                                        >
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {attendance.map(({ fullDate}) => (
                                        <tr className="bg-slate-100 border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {moment(fullDate).format('LLLL')}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                <span className="text-white bg-green-600 py-1 px-3 rounded-md ">
                                                    Present
                                                </span>
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
export default AttendanceTable;
