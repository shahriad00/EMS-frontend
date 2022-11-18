import moment from "moment/moment";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import InputErrorMessage from "../../../../Components/InputErrorMessage/InputErrorMessage";
import axiosInstance from "../../../../services/axiosInstance";

const AddProject = () => {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [status, setStatus] = useState("");
    const [description, setDescription] = useState("");
    const [inputError, setInputError] = useState("");

    const navigate = useNavigate();

    const { name, id } = useParams();

    const handleAddProjectForm = (e) => {
        e.preventDefault();

        if (
            title === "" &&
            type === "" &&
            startDate === "" &&
            endDate === "" &&
            status === "" &&
            description === ""
        ) {
            setInputError(true);
            toast.error("check input field");
        } else {
            axiosInstance
                .post("/api/project", {
                    employeeID: id,
                    name,
                    title,
                    type,
                    startDate: moment(startDate).format('LL'),
                    endDate: moment(endDate).format('LL'),
                    status,
                    description,
                })
                .then((res) => {
                    console.log(res);
                    toast.success(res.data.message);
                    navigate(`/all-projects/${id}`);
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
                <h1 className="text-2xl bold font-semibold">Add Project:</h1>
            </div>
            <div className="flex items-center p-12">
                <div className="w-full max-w-[700px]">
                    <form onSubmit={handleAddProjectForm}>
                        {inputError && <InputErrorMessage />}
                        <div className="flex gap-5">
                            {/*----- full name --------*/}
                            <div className="w-full sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="title"
                                        className="mb-3 block text-base text-sm text-[#07074D]"
                                    >
                                        Project title:
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        placeholder="Ex: hotel management system"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            {/*----- project-type --------*/}
                            <div className="w-full sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="project-type"
                                        className="mb-3 block text-base text-sm text-[#07074D]"
                                    >
                                        project type:
                                    </label>
                                    <input
                                        type="text"
                                        name="project-type"
                                        id="project-type"
                                        placeholder="Ex: Web application"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        onChange={(e) =>
                                            setType(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            {/*----- start date --------*/}
                            <div className="mb-5 w-full sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="start-date"
                                        className="mb-3 block text-base text-sm text-[#07074D]"
                                    >
                                        Starting date:
                                    </label>
                                    <input
                                        type="date"
                                        name="start-date"
                                        id="start-date"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        onChange={(e) =>
                                            setStartDate(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            {/*----- end date --------*/}
                            <div className="mb-5 w-full sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="end-date"
                                        className="mb-3 block text-base text-sm text-[#07074D]"
                                    >
                                        Ending date:
                                    </label>
                                    <input
                                        type="date"
                                        name="end-date"
                                        id="end-date"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        onChange={(e) =>
                                            setEndDate(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-5 w-full sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="end-date"
                                    className="mb-3 block text-base text-sm text-[#07074D]"
                                >
                                    Project Status:
                                </label>
                                <select
                                    id="end-date"
                                    className="w-full bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-800 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option selected="true" disabled="disabled">choose one</option>
                                    <option value='Not Started'>Not Started</option>
                                    <option value='In Progress'>In Progress</option>
                                    <option value='Finished'>Finished</option>
                                        

                                </select>
                            </div>
                        </div>

                        {/*----- description --------*/}

                        <div className="w-full">
                            <div className="mb-5">
                                <label
                                    htmlFor="description"
                                    className="mb-3 block text-base text-sm text-[#07074D]"
                                >
                                    Description:
                                </label>
                                <textarea
                                    type="text"
                                    name="description"
                                    id="description"
                                    rows='4'
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    placeholder="Ex: Technology is used for this project:
                                    FrontEnd : React.Js,
                                    BackEnd : Node.Js.
                                    Database: MongoDB."
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        {/*----------- Submit Button --------------*/}
                        <div>
                            <button
                                type="submit"
                                className="hover:shadow-form rounded-md bg-[#6A64F1] py-2 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProject;

// export default AddProject
