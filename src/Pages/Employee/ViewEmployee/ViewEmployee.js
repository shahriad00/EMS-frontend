import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../services/axiosInstance";

const ViewEmployee = () => {
    const [employee,  setEmployee] = useState({})

    let { id } = useParams();
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            axiosInstance
                .get(`/api/employee-details/${id}`)
                .then((res) => {
                    console.log(res.data);
                    setEmployee(res.data);
                })
                .catch((err) => console.log(err));
        }
        return () => {
            isMounted = false;
        };
    }, []);
    return (
        <>
            <div class="px-20">
                <div class="p-8 bg-white shadow mt-24 rounded-lg">
                    <div class="flex justify-center">
                        
                        <div class="relative">
                            <div class="w-32 h-32 bg-indigo-100 mx-auto rounded-full shadow-2xl inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-24 w-24"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>

                
                    </div>

                    <div class="mt-10 text-center border-b pb-12">
                        <h1 class="text-4xl font-medium text-gray-700">
                            {employee.name}
                        </h1>
                        <p class="font-light text-gray-600 mt-3">
                            {employee.address}
                        </p>

                        <p class="mt-8 text-gray-500">
                            {employee.department} - {employee.designation}
                        </p>
                        <p class="mt-4 text-gray-500">
                            Email: {employee.email}
                        </p>
                        <p class="mt-4 text-gray-500">
                            Number: {employee.contactNumber}
                        </p>
                        <p class="mt-4 text-gray-500">
                            salary: ${employee.salary}
                        </p>
                        <p class="mt-4 text-gray-500">
                            Date of birth: {moment(employee.dateOfBirth).format('LLLL')}
                        </p>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewEmployee;
