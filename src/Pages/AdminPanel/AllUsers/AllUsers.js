import {
    DeleteOutlined,
    UserOutlined
} from "@ant-design/icons";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../../services/axiosInstance";

const AllUsers = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            axiosInstance
                .get(`/api/all-employee-users`)
                .then((res) => {
                    console.log(res.data);
                    setUsers(res.data);
                })
                .catch((err) => console.log(err));
        }
        return () => {
            isMounted = false;
        };
    }, []);

    const handleDeleteUser = (id) => {
        axiosInstance
            .delete(`/api/user/${id}`)
            .then((res) => {
                toast.success(res.data.message);
                axiosInstance
                    .get(`/api/all-employee-users`)
                    .then((res) => {
                        setUsers(res.data);
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="m-4 py-4 px-8 bg-white rounded">
            <div>
                <h1 className="text-2xl bold font-semibold">
                    All Users :
                </h1>
            </div>
            <div className="my-6">
                {users?.map((user, i) => (
                    <div
                        key={user._id}
                        className="flex items-center justify-between gap-4 border border-steal-200 text-md font-medium rounded-lg shadow hover:shadow-lg  hover:cursor-pointer py-4 px-6 mb-4"
                    >
                        <div className="flex items-center gap-4">
                            <span className="flex items-center justify-center border rounded-full h-10 w-10 shadow-md">
                                <UserOutlined style={{color:'#1890ff', fontSize:'18px'}} />
                            </span>
                             {i + 1}. {user?.name} - [
                            {user?.role}]{" "}
                        </div>
                        <span className="text-gray-400">
                            Created in: {moment(user.dateAdded).format('LL')}
                        </span>
                        <div className="flex items-center justify-center gap-5">
                            <span
                                title="delete"
                                className="flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                                onClick={() => handleDeleteUser(user._id)}
                            >
                                <DeleteOutlined
                                    style={{ fontSize: "20px", color: "red" }}
                                />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllUsers;

