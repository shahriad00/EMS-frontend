import React, { useState } from "react";

const UpdateProject = () => {
    const [depertmentID, setDepertmentID] = useState("");

    return (
        <div className="m-4 p-4 bg-white rounded">
            <div>
                <h1 className="text-2xl bold font-semibold">Update Project:</h1>
            </div>
            <div className="flex items-center p-12">
                <div className="w-full max-w-[700px]">
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        <div className="flex gap-5">
                            {/*----- full name --------*/}
                            <div className="w-full sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        for="title"
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
                                        project type:
                                    </label>
                                    <input
                                        type="text"
                                        name="project-type"
                                        id="project-type"
                                        placeholder="Ex: Web application"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
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
                                        Start date:
                                    </label>
                                    <input
                                        type="date"
                                        name="start-date"
                                        id="start-date"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                                    />
                                </div>
                            </div>
                        </div>

                        {/*----- description --------*/}

                        <div className="w-full sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    for="description"
                                    className="mb-3 block text-base text-sm text-[#07074D]"
                                >
                                    Description:
                                </label>
                                <textarea
                                    type="text"
                                    name="description"
                                    id="description"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base text-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    placeholder="Ex: Technology is used for this project is React, Node.js."
                                />
                            </div>
                        </div>

                        {/*----------- Submit Button --------------*/}
                        <div>
                            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-2 px-8 text-center text-base font-semibold text-white outline-none">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProject;

// export default AddProject
