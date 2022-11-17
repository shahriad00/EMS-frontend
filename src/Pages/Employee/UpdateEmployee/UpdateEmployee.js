import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import DEPARTMENT from "../../../Assets/data/department";
import DESIGNATION from "../../../Assets/data/designation";
import InputErrorMessage from "../../../Components/InputErrorMessage/InputErrorMessage";
import axiosInstance from "../../../services/axiosInstance";

const UpdateEmployee = () => {
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

    const navigate = useNavigate();

    const { id } = useParams();
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            axiosInstance
                .get(`/api/employee-details/${id}`)
                .then((res) => {
                    console.log(res.data);
                    setName(res.data.name);
                    setEmail(res.data.email);
                    setDateOfBirth(
                        moment(res.data.dateOfBirth).format("YYYY-MM-DD")
                    );
                    setContactNumber(res.data.contactNumber);
                    setDepertment(res.data.department);
                    setDesignation(res.data.designation);
                    setSalary(res.data.salary);
                    setAddress(res.data.address);
                })
                .catch((err) => console.log(err));
        }
        return () => {
            isMounted = false;
        };
    }, []);

    const handleDesegnation = (e) => {
        setDepertment(e.target.value);
        const DesegnationIndex = DEPARTMENT.find(
            (department) => department.name === e.target.value
        );
        setDepertmentID(DesegnationIndex.id);
    };

    const handleAddEmployeeForm = (e) => {
        e.preventDefault();

        if (
            name === "" &&
            email === "" &&
            dateOfBirth === "" &&
            contactNumber === "" &&
            salary === "" &&
            address === "" &&
            department === "" &&
            designation === ""
        ) {
            setInputError(true);
            toast.error("check input field");
        } else {
            axiosInstance
                .patch(`/api/employee/${id}`, {
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
                <h1 className="text-2xl bold font-semibold">
                    Update Employee:
                </h1>
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
                                        value={name}
                                        placeholder="Ex: Jimmy Anderson"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                                        value={email}
                                        placeholder="example@email.com"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
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
                                        value={dateOfBirth}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                                        value={contactNumber}
                                        placeholder="Ex: 01***********"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        onChange={(e) =>
                                            setContactNumber(e.target.value)
                                        }
                                    />
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
                                    value={department}
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
                                    value={designation}
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
                                    value={salary}
                                    placeholder="Ex: 25000"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                                    value={address}
                                    placeholder="Ex: 34/A Uddipon, Mira-bazar, sylhet."
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
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

export default UpdateEmployee;
