import React from 'react'
import AttendanceTable from '../../../Components/AttendanceTable/AttendanceTable'
import { useEffect } from 'react';
import { useState } from 'react';
import axiosInstance from '../../../services/axiosInstance';
import { toast } from 'react-toastify';

const ViewAttendance = () => {

  const {_id} = JSON.parse(localStorage.getItem('user'))

  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
      let isMounted = true;
      if (isMounted) {
          axiosInstance
              .get(`/api/all-attendance/${_id}`)
              .then((res) => {
                  if (isMounted) {
                    setAttendance(res.data);
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
  return (
    <div className="m-4 p-4 bg-white rounded">
                <div>
                    <h1 className="text-2xl bold font-semibold">
                        My Attendance
                    </h1>
                </div>
                <AttendanceTable attendance={attendance}/>
                
            </div>
  )
}

export default ViewAttendance