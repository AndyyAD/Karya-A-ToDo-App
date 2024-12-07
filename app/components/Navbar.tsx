"use client"

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Navbar: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);

    const day: string = selectedDate.toLocaleString('en-US', { weekday: 'long' });
    const date: string = selectedDate.toLocaleDateString('en-GB');

    const handleDateChange = (date: Date | null) => {
        if (date) {
            setSelectedDate(date);
        }
        setIsDatePickerOpen(false);
    };

    return (
        <nav className='navbar mb-16 w-full fixed top-0 left-0'>
            <div className='container h-full flex items-center justify-between'>
                <h1 className='logo font-extrabold'> kaarya. </h1>
                <div className='flex items-center '>
                    <div className='m-10 text-right text-3xl leading-normal'>
                        <p className="day">{day}</p>
                        <p className="date">{date}</p>
                    </div>
                    <div className='calendar h-16 w-16 rounded-2xl content-center justify-items-center'
                        onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" /></svg>
                        {isDatePickerOpen && (
                            <div className="absolute bg-gray-800 z-50 p-4 shadow-lg rounded"
                                style={{ top: '100px', right: '50px' }}
                            >
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    inline
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar