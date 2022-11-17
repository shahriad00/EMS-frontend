import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AllProjectsTable from "../../../Components/AllProjects/Table/AllProjectsTable";
import axiosInstance from "../../../services/axiosInstance";

const ViewAllProjects = () => {
    const [allProjects, setAllProjects] = useState([]);

    // const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            axiosInstance
                .get(`/api/all-project/${id}`)
                .then((res) => {
                    if (isMounted) {
                        setAllProjects(res.data);
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

    const handleDeleteProject = (deleteID) => {
        axiosInstance
            .delete(`/api/project/${deleteID}`)
            .then((res) => {
                toast.success(res.data.message)
                axiosInstance
                    .get(`/api/all-project/${id}`)
                    .then((res) => {
                        setAllProjects(res.data);
                        console.log(res.data);
                    })
                    .catch((err) => {
                        console.log(err);
                        toast.error("Something went wrong while Loading");
                    })
            })
            .catch((err) => {
                console.log(err);
                toast.error("Something went wrong while Loading");
            });
    };

    return (
        <div className="m-4 p-4 bg-white rounded">
            <div>
                <h1 className="text-2xl bold font-semibold">All projects</h1>
            </div>
            <AllProjectsTable
                allProjects={allProjects}
                handleDeleteProject={handleDeleteProject}
                allProjectsId = {id}
            />
        </div>
    );
};

export default ViewAllProjects;
