import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import validator from "validator";
import DEPARTMENT from "../../../../Assets/data/department";
import DESIGNATION from "../../../../Assets/data/designation";
import InputErrorMessage from "../../../../Components/InputErrorMessage/InputErrorMessage";
import axiosInstance from "../../../../services/axiosInstance";

const AddEmployee = () => {
    const [depertmentID, setDepertmentID] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [department, setDepertment] = useState("");
    const [designation, setDesignation] = useState("");
    const [salary, setSalary] = useState("");
    const [address, setAddress] = useState("");
    const [inputError, setInputError] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [contactError, setContactError] = useState("");

    const navigate = useNavigate();

    const handleDesegnation = (e) => {
        setDepertment(e.target.value);
        const DesegnationIndex = DEPARTMENT.find(
            (department) => department.name === e.target.value
        );
        setDepertmentID(DesegnationIndex.id);
    };

    const validateEmail = (e) => {
        setEmail(e.target.value);

        if (validator.isEmail(email)) {
            setEmailError("");
        } else {
            setEmailError("Enter valid Email!");
        }
    };

    const handleAddEmployeeForm = (e) => {
        e.preventDefault();

        if (
            name === "" &&
            email === "" &&
            dateOfBirth === "" &&
            contactNumber === "" &&
            department === "" &&
            designation === "" &&
            salary === "" &&
            address === ""
        ) {
            setInputError(true);
            toast.error("check input field");
        } else {
            axiosInstance
                .post("/api/employee", {
                    name,
                    email,
                    dateOfBirth,
                    contactNumber,
                    department,
                    salary,
                    designation,
                    address,
                })
                .then((res) => {
                    console.log(res);
                    toast.success("Employee Added successfully");
                    navigate("/all-employees");
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("Something went wrong! Please try again");
                });
        }
    };

    return (
        <div className="m-4 p-4 bg-white rounded">
            <div>
                <h1 className="text-2xl bold font-semibold">Add Employee:</h1>
            </div>
            <div className="flex items-center p-12">
                <div className="w-full max-w-[700px]">
                    <form onSubmit={handleAddEmployeeForm}>
                        {inputError && <InputErrorMessage />}
                        <div className="flex gap-5">
                            {/*----- full name --------*/}
                            <div className="w-full sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="fName"
                                        className="mb-3 block text-base text-sm text-[#07074D]"
                                    >
                                        Full Name:
                                    </label>
                                    <input
                                        type="text"
                                        name="Name"
                                        id="Name"
                                        min="5"
                                        max="20"
                                        placeholder="Ex: Jimmy Anderson"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            {/*----- email --------*/}
                            <div className="w-full sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="email"
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
                                        onChange={(e) => validateEmail(e)}
                                    />
                                    {email === "" ? (
                                        <></>
                                    ) : (
                                        <span className="text-red-600">
                                            {emailError}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            {/*----- date of birth --------*/}
                            <div className="mb-5 w-full sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="date-of-birth"
                                        className="mb-3 block text-base text-sm text-[#07074D]"
                                    >
                                        Date of birth:
                                    </label>
                                    <input
                                        type="date"
                                        name="date-of-birth"
                                        id="date-of-birth"
                                        min="1975-01-02"
                                        max="2001-01-31"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        onChange={(e) =>
                                            setDateOfBirth(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            {/*----- Contact Number --------*/}

                            <div className="w-full sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="contact-number"
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
                                        onChange={(e) => {
                                            setContactNumber(e.target.value);
                                            if (e.target.value.length !== 11) {
                                                setContactError("in valid number(must be 11 digit)");
                                            }else{setContactError('')}
                                        }}
                                    />
                                    {contactNumber === "" ? (
                                        <></>
                                    ) : (
                                        <span className="text-red-600">
                                            {contactError}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            {/*----- Department --------*/}
                            <div className="mb-5 flex-1">
                                <label
                                    htmlFor="department"
                                    className="mb-3 block text-base text-sm text-[#07074D]"
                                >
                                    Department:
                                </label>
                                <select
                                    id="department"
                                    className="w-full bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-800 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
                                    onChange={(e) => handleDesegnation(e)}
                                >
                                    <option selected="true" disabled="disabled">
                                        choose one
                                    </option>
                                    {DEPARTMENT.map(({ name, id }) => (
                                        <option key={id} value={name}>
                                            {name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/*----- Designation --------*/}
                            <div className="mb-5 flex-1">
                                <label
                                    htmlFor="designation"
                                    className="mb-3 block text-base text-sm text-[#07074D]"
                                >
                                    Designation:
                                </label>
                                <select
                                    id="designation"
                                    className="w-full bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-800 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
                                    onChange={(e) =>
                                        setDesignation(e.target.value)
                                    }
                                >
                                    <option selected="true" disabled="disabled">
                                        choose one
                                    </option>
                                    {DESIGNATION.map(
                                        ({ name, DEPARTMENT_id }, key) => {
                                            if (
                                                depertmentID === DEPARTMENT_id
                                            ) {
                                                return (
                                                    <option
                                                        key={key}
                                                        value={name}
                                                    >
                                                        {name}
                                                    </option>
                                                );
                                            } else {
                                                return null;
                                            }
                                        }
                                    )}
                                </select>
                            </div>
                        </div>
                        {/*----- salary --------*/}

                        <div className="w-full">
                            <div className="mb-5">
                                <label
                                    htmlFor="salary"
                                    className="mb-3 block text-base text-sm text-[#07074D]"
                                >
                                    Salary:
                                </label>
                                <input
                                    type="number"
                                    name="salary"
                                    id="salary"
                                    min="1000"
                                    max="1000000"
                                    placeholder="Ex: 25000"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    onChange={(e) => setSalary(e.target.value)}
                                />
                            </div>
                        </div>

                        {/*----- Address --------*/}

                        <div className="w-full">
                            <div className="mb-5">
                                <label
                                    htmlFor="salary"
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
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                        </div>

                        {/*----------- Submit Button --------------*/}
                        <div>
                            <button
                                type="submit"
                                className="hover:shadow-md rounded-md bg-[#112140] hover:bg-white hover:text-black hover:border py-2 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddEmployee;
