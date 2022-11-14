import { PlusCircleFilled } from '@ant-design/icons';
import React from 'react';

const MarkAttendance = () => {
  return (
    <div className='min-h-[75vh] flex items-center justify-center'>
        <span className='text-center text-xl p-8 rounded-lg border-[#1890ff] border-dashed bg-white border-2 hover:shadow-lg hover:cursor-pointer'>
            Click Here<br/>
            Mark Attendance<br/>
            <PlusCircleFilled style={{fontSize:'30px',color:'#1890ff', marginTop:'20px'}} />
            </span>
        </div>
  )
}

export default MarkAttendance;