import { FileDoneOutlined } from "@ant-design/icons";
import React from "react";
import { FaUserFriends } from "react-icons/fa";

const style = {
    color: "white",
    fontSize: "32px",
};

const Dashboard = () => {
    return (
        <>
            <div className="p-8">
                <div className="flex justify-between">
                    <Card bgColor="bg-[#3499ef]">
                        <FaUserFriends style={style} />
                    </Card>
                    <Card bgColor="bg-[#52ac56]" icon="FileDoneOutlined">
                        <FileDoneOutlined style={style} />
                    </Card>
                    <Card bgColor="bg-[#fc9107]" icon="FileDoneOutlined">
                        <FaUserFriends style={style} />
                    </Card>
                    <Card bgColor="bg-[#e12c6c]" icon="FileDoneOutlined">
                        <FaUserFriends style={style} />
                    </Card>
                </div>
            </div>
        </>
    );
};

const Card = ({ bgColor, children }) => {
    return (
        <>
            <div className="w-[230px] bg-white rounded-lg relative shadow pl-10 pt-10 pr-5 pb-5">
                <div
                    className={`absolute ${bgColor} shadow-lg rounded-lg p-4 -top-5 left-5`}
                >
                    {children}
                </div>
                <div className="text-3xl font-bold text-right">+10</div>
                <div className="text-lg text-right">Total Staff</div>
            </div>
        </>
    );
};

export default Dashboard;
