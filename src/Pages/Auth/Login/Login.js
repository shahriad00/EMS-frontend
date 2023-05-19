import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../../services/axiosInstance";
import Spinners from "../../../Components/Spinner/Spinners";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [role, setRole] = useState("");

    const navigate = useNavigate();

    const handleLoginForm = (e) => {
        e.preventDefault();

        if (email === "" && password === "" && role === "") {
            toast.error("Please fill-up all the input fields");
        } else {
            setIsLoading(true);
            axiosInstance
                .post("/api/user/login", {
                    email,
                    password,
                    role,
                })
                .then((res) => {
                    localStorage.setItem(
                        "user",
                        JSON.stringify(res?.data?.user)
                    );
                    localStorage.setItem(
                        "token",
                        JSON.stringify(res?.data?.token)
                    );
                    setIsLoading(false);
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("Something went wrong! please try again");
                    setIsLoading(false);
                });
        }
    };

    return (
        <>
            <div className="flex min-h-screen items-center justify-center py-12 px-4 bg-slate-200 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8 shadow-xl p-14 rounded-xl bg-white">
                    <div>
                        <div className="flex justify-center">
                            <FiUsers
                                style={{ fontSize: "48px", color: "#4f46e5" }}
                            />
                        </div>

                        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-600">
                            Employee Management System
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleLoginForm}>
                        <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                        />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label
                                    htmlFor="email-address"
                                    className="sr-only"
                                >
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex gap-5 items-center my-2">
                            <label
                                htmlFor="role"
                                className="block mb-2 text-sm font-medium text-gray-900 min-w-[80px]"
                            >
                                Login as:
                            </label>
                            <select
                                id="admin"
                                class="block p-2 mb-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option selected="true" disabled="disabled">
                                    Choose an option
                                </option>
                                <option value="admin">Admin</option>
                                <option value="employee">Employee</option>
                            </select>
                        </div>

                        <div>
                            {isLoading ? (
                                <Spinners />
                            ) : (
                                <button
                                    type="submit"
                                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <LockClosedIcon
                                            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                    Login
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default Login;
