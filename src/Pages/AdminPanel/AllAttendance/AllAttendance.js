import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { MONTH } from "../../../Assets/data/month";
import AllAttendanceTable from "../../../Components/AttendanceTable/AllAttendanceTable";
import axiosInstance from "../../../services/axiosInstance";
import { YEAR } from "./../../../Assets/data/year";

const AllAttendance = () => {
    const [attendance, setAttendance] = useState([]);
    const [year, setYear] = useState();
    const [month, setMonth] = useState();

    useEffect(() => {
        setYear(new Date().getFullYear())
        setMonth(new Date().getMonth() + 1)
        let isMounted = true;
        if (isMounted) {
            axiosInstance
                .get(`/api/all-attendance`)
                .then((res) => {
                    if (isMounted) {
                        setAttendance(res.data);
                        console.log(res.data);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("Something went wrong while Loading");
                });
        }
        return () => {
            isMounted = false;
        };
    }, []);
    return (
        <div className="m-4 p-4 bg-white rounded">
            <div>
                <h1 className="text-2xl bold font-semibold">
                    Employee Attendance
                </h1>
                <div className="flex gap-2 w-1/2 mt-5">
                    <div className="w-full w-1/2">
                        <div className="mb-2">
                            <label
                                htmlFor="year"
                                className="mb-2 block text-base text-sm text-[#07074D]"
                            >
                                Year :
                            </label>
                            <select
                                id="year"
                                className="w-full bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-800 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            >
                                {YEAR.map(({ year }) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="w-full w-1/2">
                        <div className="mb-2">
                            <label
                                htmlFor="month"
                                className="mb-2 block text-base text-sm text-[#07074D]"
                            >
                                Month :
                            </label>
                            <select
                                id="month"
                                className="w-full bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-800 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                            >
                                {MONTH.map(({ month, value }) => (
                                    <option key={month} value={month}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <AllAttendanceTable
                attendance={attendance}
                year={year}
                month={month}
            />
        </div>
    );
};

export default AllAttendance;
