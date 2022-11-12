import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axiosInstance from "../../../services/axiosInstance";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [isAdmin, setIsAdmin] = useState("");

    const navigate = useNavigate();

    const handleRegisterForm = (e) => {
        e.preventDefault();

        if (
            name === "" &&
            email === "" &&
            password === "" &&
            password2 === "" &&
            isAdmin === ""
        ) {
            toast.error("Please fill-up all the input fields");
        } else {
            if (password === password2 && password.length > 5) {
                axiosInstance
                    .post("/api/user/register", {
                        name,
                        email,
                        password,
                        isAdmin,
                    })
                    .then((res) => {
                        console.log(res);
                        toast.success(res.data.message);
                        alert(res.data.message)
                        if(isAdmin === 'admin'){
                            navigate('/')
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                toast.error("invalid password!");
            }
        }
    };

    return (
        <>
            <ToastContainer />
            <div class="bg-gray-50">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Create an account
                            </h1>
                            <form
                                class="space-y-2 md:space-y-6"
                                onSubmit={handleRegisterForm}
                            >
                                <div>
                                    <label
                                        HtmlFor="name"
                                        class="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2.5 py-1.5"
                                        placeholder="Ex: Smith Jhonson"
                                        required=""
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label
                                        HtmlFor="email"
                                        class="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2.5 py-1.5"
                                        placeholder="name@gmail.com"
                                        required=""
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label
                                        HtmlFor="password"
                                        class="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2.5 py-1.5"
                                        required=""
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label
                                        HtmlFor="confirm-password"
                                        class="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Confirm password
                                    </label>
                                    <input
                                        type="password"
                                        name="confirm-password"
                                        id="confirm-password"
                                        placeholder="••••••••"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2.5 py-1.5"
                                        required=""
                                        onChange={(e) =>
                                            setPassword2(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label
                                        HtmlFor="admin"
                                        class="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Signup for ?
                                    </label>
                                    <select
                                        id="admin"
                                        class="block p-2 mb-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                        onChange={(e) =>
                                            setIsAdmin(e.target.value)
                                        }
                                    >
                                        <option selected>
                                            Choose an option
                                        </option>
                                        <option value="admin">Admin</option>
                                        <option value="employee">
                                            Employee
                                        </option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Create an account
                                </button>
                                <p class="text-sm font-light text-gray-500">
                                    Already have an account?{" "}
                                    <span
                                        onClick={() => navigate("/login")}
                                        class="text-blue-600 font-medium text-primary-600 hover:underline cursor-pointer"
                                    >
                                        Login here
                                    </span>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
