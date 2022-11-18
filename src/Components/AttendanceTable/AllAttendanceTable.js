import moment from "moment/moment";
import React from "react";

const AllAttendanceTable = ({ attendance, year, month }) => {
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
                                            Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white px-6 py-4 rounded-tr-md"
                                        >
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {attendance
                                        .filter((val) => {
                                            if (
                                                val.year == year &&
                                                val.month == month
                                            ) {
                                                return val;
                                            }
                                        })
                                        .map(({ name, fullDate, _id }) => (
                                            <tr
                                                key={_id}
                                                className="bg-slate-100 border-b"
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {moment(fullDate).format(
                                                        "LLLL"
                                                    )}
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
export default AllAttendanceTable;
