import { FileDoneOutlined, FundProjectionScreenOutlined, SolutionOutlined } from "@ant-design/icons";
import React from "react";
import { FaUserFriends } from "react-icons/fa";
import CalendarComp from "../../Components/Calender/CalenderComp";

const style = {
    color: "white",
    fontSize: "32px",
};

const Dashboard = () => {
    return (
        <>
            <div className="px-8 py-12">
                <div className="flex justify-between">
                    <Card bgColor="bg-[#3499ef]" number="15" text="Total Projects">
                        <FundProjectionScreenOutlined style={style} />
                    </Card>
                    <Card bgColor="bg-[#52ac56]" number="3" text="Leave applications">
                        <FileDoneOutlined style={style} />
                    </Card>
                    <Card bgColor="bg-[#fc9107]" number="2" text="On Leave">
                        <SolutionOutlined  style={style} />
                    </Card>
                    <Card bgColor="bg-[#e12c6c]" number="10" text="Total Employee">
                        <FaUserFriends style={style} />
                    </Card>
                </div>
                <div className="shadow rounded-xl my-5">
                    <CalendarComp/>
                </div>
            </div>
        </>
    );
};

const Card = ({ bgColor, children,number, text }) => {
    return (
        <>
            <div className="w-[230px] bg-white rounded-lg relative shadow pl-10 pt-10 pr-5 pb-5">
                <div
                    className={`absolute ${bgColor} shadow-lg rounded-lg p-4 -top-5 left-5`}
                >
                    {children}
                </div>
                <div className="text-3xl font-bold text-right">+{number}</div>
                <div className="text-lg text-right">{text}</div>
            </div>
        </>
    );
};

export default Dashboard;
