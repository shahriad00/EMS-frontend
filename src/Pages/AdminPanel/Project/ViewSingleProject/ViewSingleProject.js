import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import axiosInstance from "../../../../services/axiosInstance";

const ViewSingleProject = () => {

    const [project, setProjects] = useState([])

    // const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
          axiosInstance
            .get(`/api/project/${id}`)
            .then((res) => {
              if (isMounted) {
                setProjects(res.data);
                console.log(res.data)
              }
            })
            .catch((err) => {
              console.log(err);
              toast.error('Something went wrong while Loading')
            });
        }
        return () => {
          isMounted = false;
        };
    }, []);

    return (
        <div div className="bg-white rounded-md m-4 p-8">
            <div className="text-2xl font-semibold">Project Details:</div>
            <p className="text-gray-500 text-sm py-3">
                {project.description}
            </p>
            <div className="my-6 bg-gray-50 rounded-lg p-4 border">
                <div className="flex items-center text-md py-3 text-gray-600">
                    <span className="font-semibold min-w-[180px] ">
                        Handled by:
                    </span>{" "}
                    <span>{project.name}</span>
                </div>
                <hr></hr>
                <div className="flex items-center text-md py-3 text-gray-600">
                    <span className="font-semibold min-w-[180px] ">Title:</span>{" "}
                    {project.title}
                </div>
                <hr></hr>
                <div className="flex items-center text-md py-3 text-gray-600">
                    <span className="font-semibold min-w-[180px] ">Type:</span>{" "}
                    {project.type}
                </div>
                <hr></hr>
                <div className="flex items-center text-md py-3 text-gray-600">
                    <span className="font-semibold min-w-[180px] ">
                        Status:
                    </span>{" "}
                    <span className="bg-blue-500 text-white text-sm py-1 px-2 rounded-md">
                        {project.status}
                    </span>
                </div>
                <hr></hr>
                <div className="flex items-center text-md py-3 text-gray-600">
                    <span className="font-semibold min-w-[180px] ">
                        Starting Date:
                    </span>{" "}
                    {moment(project.startDate).format('LL')}
                </div>
                <hr></hr>
                <div className="flex items-center text-md py-3 text-gray-600">
                    <span className="font-semibold min-w-[180px] ">
                        Ending Date:
                    </span>{" "}
                    {moment(project.endDate).format('LL')}
                </div>
            </div>
        </div>
    );
};

export default ViewSingleProject;
