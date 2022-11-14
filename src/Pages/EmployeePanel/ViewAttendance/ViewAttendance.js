import React from 'react'
import AttendanceTable from '../../../Components/AttendanceTable/AttendanceTable'

const ViewAttendance = () => {
  return (
    <div className="m-4 p-4 bg-white rounded">
                <div>
                    <h1 className="text-2xl bold font-semibold">
                        My Attendance
                    </h1>
                </div>
                <AttendanceTable/>
                
            </div>
  )
}

export default ViewAttendance