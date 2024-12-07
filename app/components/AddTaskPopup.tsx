"use client"

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddTaskPopup: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log({ title, description, startDate });
    };

    return (
        <>
            <div className='addTask h-screen fixed bottom-0 right-0 pt-64 px-20'>
                <div className="flex justify-between align-center mb-12">
                    <h2 className='text-4xl font-semibold'>Add Task</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </div>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 mt-14">
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter task title"
                            className="w-full py-3 px-12 h-24 rounded-xl focus:outline-none"
                        />
                    </div>

                    <div className="mb-4 mt-10">
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter task description"
                            rows={4}
                            className="w-full py-6 px-12 h-64 p-3 rounded-xl focus:outline-none"
                        ></textarea>
                    </div>

                    <div className="mb-4 mt-7 w-full">
                        <DatePicker
                            id="date-picker"
                            selected={startDate}
                            onChange={(date: Date | null) => setStartDate(date)}
                            className="datepicker-input w-full py-3 px-12 h-24 rounded-xl focus:outline-none"
                            dateFormat="MMMM d, yyyy"
                            placeholderText="Select a date"
                            wrapperClassName="w-full"
                            onKeyDown={(e) => e.preventDefault()}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn primary rounded-xl px-12 mt-6"
                    >
                        Create Task
                    </button>
                </form>
            </div>
        </>
    )
}

export default AddTaskPopup