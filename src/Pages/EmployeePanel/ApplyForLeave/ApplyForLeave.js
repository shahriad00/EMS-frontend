import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import InputErrorMessage from "../../../Components/InputErrorMessage/InputErrorMessage";
import axiosInstance from "../../../services/axiosInstance";

const ApplyForLeave = () => {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");
    const [inputError,setInputError] = useState("");

    const navigate = useNavigate();


    const handleApplyForLeaveForm = (e) =>{
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'))
        if(title === '' && type === '' && startDate === '' && endDate === '' && description === ''){
            setInputError(true);
            toast.error('check input field');
        }
        else{
            axiosInstance.post("/api/apply-for-leave", {
                applicantID: user._id,
                name: user.name,
                title,
                type,
                startDate,
                endDate,
                description
            })
            .then((res)=>{
                console.log(res)
                toast.success('Applied for leave successfully');
                navigate('/view-applied-leaves')
            })
            .catch((err)=>{
                console.log(err)
                toast.error('Something went wrong! Please try again')
            });
        }

    }

    return (
        <div className="m-4 p-4 bg-white rounded">
            <div>
                <h1 className="text-2xl bold font-semibold">
                    Apply for leave:
                </h1>
            </div>
            <div className="flex items-center p-12">
                <div className="w-full max-w-[700px]">
                    <form onSubmit={handleApplyForLeaveForm}>
                    {inputError && <InputErrorMessage/>}
                        <div className="flex gap-5">
                            {/*----- full name --------*/}
                            <div className="w-full sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        for="title"
                                        className="mb-3 block text-base text-sm text-[#07074D]"
                                    >
                                        Title:
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        placeholder="Ex: Leave application"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        onChange={e=>setTitle(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/*----- project-type --------*/}
                            <div className="w-full sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        for="project-type"
                                        className="mb-3 block text-base text-sm text-[#07074D]"
                                    >
                                        leave type:
                                    </label>
                                    <select
                                        id="admin"
                                        class="block p-2 mb-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                        onChange={e=>setType(e.target.value)}
                                    >
                                        <option
                                            selected="true"
                                            disabled="disabled"
                                        >
                                            Choose an option
                                        </option>
                                        <option value="Sick leave">
                                            Sick leave
                                        </option>
                                        <option value="Annual leave">
                                            Annual leave
                                        </option>
                                        <option value="Unpaid leave">
                                            Unpaid leave
                                        </option>
                                        <option value="Emergency leave">
                                            Emergency leave
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            {/*----- start date --------*/}
                            <div className="mb-5 w-full sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        for="start-date"
                                        className="mb-3 block text-base text-sm text-[#07074D]"
                                    >
                                        Starting date:
                                    </label>
                                    <input
                                        type="date"
                                        name="start-date"
                                        id="start-date"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        onChange={e=>setStartDate(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/*----- end date --------*/}
                            <div className="mb-5 w-full sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        for="end-date"
                                        className="mb-3 block text-base text-sm text-[#07074D]"
                                    >
                                        Ending date:
                                    </label>
                                    <input
                                        type="date"
                                        name="end-date"
                                        id="end-date"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        onChange={e=>setEndDate(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/*----- description --------*/}

                        <div className="w-full">
                            <div className="mb-5">
                                <label
                                    for="description"
                                    className="mb-3 block text-base text-sm text-[#07074D]"
                                >
                                    Detailed Description:
                                </label>
                                <textarea
                                    type="text"
                                    name="description"
                                    id="description"
                                    rows='6'
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    placeholder="Example: 
                                    Hi, (Admin)                                   
                                    Your Detailed description ........."
                                    onChange={e=>setDescription(e.target.value)}
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

export default ApplyForLeave;
