import moment from 'moment';
import React, { useEffect, useState } from "react";

const Profile = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            const user = JSON.parse(localStorage.getItem("user"));
            setUser(user);
        }
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <>
            <div class="px-20">
                <div class="p-8 bg-white shadow mt-24 rounded-lg">
                    <div class="flex justify-center">
                        
                        <div class="relative">
                            <div class="w-32 h-32 bg-indigo-100 mx-auto rounded-full shadow-2xl inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-20 w-20"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>

                
                    </div>

                    <div class="mt-10 text-center border-b pb-12">
                        <h1 class="text-3xl font-medium text-gray-700">
                            {user.name}
                        </h1>
                        <p class="font-light text-gray-600 mt-3">
                            {user.role}
                        </p>

                        <p class="mt-8 text-gray-500">
                            <strong>Email :</strong> {user.email}
                        </p>
                        <p class="mt-2 text-gray-500">
                            Created at : {moment(user.dateAdded).format('LLLL')}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
