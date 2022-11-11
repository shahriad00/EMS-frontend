import { Calendar } from 'antd';
import React from 'react';
const CalendarComp = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return <Calendar onPanelChange={onPanelChange} style={{padding:'20px 28px', borderRadius:'16px'}}/>;
};
export default CalendarComp;  