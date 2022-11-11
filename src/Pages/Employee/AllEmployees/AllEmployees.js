import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import AllEmployeeTable from "../../../Components/AllEmployee/Table/AllEmployeeTable";
import axiosInstance from "../../../services/axiosInstance";

const AllEmployees = () => {

    const [allEmployees, setAllEmployees] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
          axiosInstance
            .get('/api/all-employees')
            .then((res) => {
              if (isMounted) {
                setAllEmployees(res.data);
                console.log(res.data)
              }
            })
            .catch((err) => {
              console.log(err);
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
                        All Employees
                    </h1>
                </div>
                <div className="flex align-center space-between py-4">
                    <div className="flex flex-1 search-bar">
                        <div className="flex justify-center">
                            <div className="xl:w-96">
                                <div className="input-group relative flex items-stretch w-full mb-2">
                                    <input
                                        type="search"
                                        className="form-control w-full relative px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Search"
                                        aria-label="Search"
                                        aria-describedby="button-addon2"
                                    />
                                    <button
                                        className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-r-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                                        type="button"
                                        id="button-addon2"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="search"
                                            class="w-4"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={()=>navigate('/add-employees')} className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700">
                            + Add Employee
                        </button>
                    </div>
                </div>
                <AllEmployeeTable allEmployees={allEmployees} />
                
            </div>

    );
};

export default AllEmployees;
