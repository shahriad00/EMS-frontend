import React, { useState } from "react";
import DEPARTMENT from "../../../Assets/data/department";
import DESIGNATION from "../../../Assets/data/designation";

const AddEmployee = () => {
    const [depertmentID, setDepertmentID] = useState("");

    const handleDesegnation = (e) => {
        // handleTextInput(e);
        const DesegnationIndex = DEPARTMENT.find(
            (department) => department.name === e.target.value
        );
        setDepertmentID(DesegnationIndex.id);
    };

    return (
        <div className="m-4 p-4 bg-white rounded">
            <div>
                <h1 className="text-2xl bold font-semibold">Add Employee:</h1>
            </div>
            <div className="flex items-center p-12">
                <div className="w-full max-w-[700px]">
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        {/*----- full name --------*/}
                        <div className="w-full sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    for="fName"
                                    className="mb-3 block text-base text-sm text-[#07074D]"
                                >
                                    Full Name:
                                </label>
                                <input
                                    type="text"
                                    name="Name"
                                    id="Name"
                                    placeholder="Ex: Jimmy Anderson"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>

                        {/*----- email --------*/}
                        <div className="w-full sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    for="email"
                                    className="mb-3 block text-base text-sm text-[#07074D]"
                                >
                                    Email address:
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="example@email.com"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>

                        {/*----- date of birth --------*/}
                        <div className="mb-5 w-full sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    for="date-of-birth"
                                    className="mb-3 block text-base text-sm text-[#07074D]"
                                >
                                    Date of birth:
                                </label>
                                <input
                                    type="date"
                                    name="date-of-birth"
                                    id="date-of-birth"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>

                        {/*----- Contact Number --------*/}

                        <div className="w-full sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    for="contact-number"
                                    className="mb-3 block text-base text-sm text-[#07074D]"
                                >
                                    Contact number:
                                </label>
                                <input
                                    type="number"
                                    name="contact-number"
                                    id="contact-number"
                                    placeholder="Ex: 01***********"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>

                        {/*----- Department --------*/}
                        <div className="mb-5">
                            <label
                                for="department"
                                className="mb-3 block text-base text-sm text-[#07074D]"
                            >
                                Department:
                            </label>
                            <select
                                id="department"
                                className="w-full sm:w-1/2 bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-800 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
                                onChange={(e) => handleDesegnation(e)}
                            >
                                {DEPARTMENT.map(({ name, id }) => (
                                    <option key={id} value={name}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/*----- Designation --------*/}
                        <div className="mb-5">
                            <label
                                for="designation"
                                className="mb-3 block text-base text-sm text-[#07074D]"
                            >
                                Designation:
                            </label>
                            <select
                                id="designation"
                                className="w-full sm:w-1/2 bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-800 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
                            >
                                {DESIGNATION.map(
                                    ({ name, DEPARTMENT_id }, key) => {
                                        if (depertmentID === DEPARTMENT_id) {
                                            return (
                                                <option key={key} value={name}>
                                                    {name}
                                                </option>
                                            );
                                        }
                                        else{
                                          return null
                                        }
                                        
                                    }
                                )}
                            </select>
                        </div>

                        {/*----- salary --------*/}

                        <div className="w-full sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    for="salary"
                                    className="mb-3 block text-base text-sm text-[#07074D]"
                                >
                                    Salary:
                                </label>
                                <input
                                    type="number"
                                    name="salary"
                                    id="salary"
                                    placeholder="Ex: 25000"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>

                        {/*----- Address --------*/}

                        <div className="w-full sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    for="salary"
                                    className="mb-3 block text-base text-sm text-[#07074D]"
                                >
                                    Address:
                                </label>
                                <textarea
                                    type="text"
                                    name="salary"
                                    id="salary"
                                    placeholder="Ex: 34/A Uddipon, Mira-bazar, sylhet."
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>

                        {/*----------- Submit Button --------------*/}
                        <div>
                            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-2 px-8 text-center text-base font-semibold text-white outline-none">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEmployee;
