import React from 'react'

interface EditTaskPopupProps {
    handleEditTask: () => void;
    handleViewTask: () => void;
}

const Tiles: React.FC<EditTaskPopupProps> = ({ handleEditTask, handleViewTask }) => {
    const handleEditClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleEditTask();
    };

    return (
        <>
            <div className="tiles rounded-3xl p-10 flex flex-col justify-between cursor-pointer" 
                onClick={handleViewTask}
            >
                <div>
                    <h2 className='text-4xl mb-6'> Title </h2>
                    <hr />
                    <p className='mt-6'>Description...</p>
                </div>
                <div className='flex justify-between items-end'>
                    <div>
                        <p className=''>Status: </p>
                        <p>Scheduled For: </p>
                    </div>
                    <div className='calendar h-16 w-16 rounded-2xl content-center justify-items-center cursor-pointer z-50'
                        onClick={handleEditClick}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v120h-80v-80H520v-200H240v640h240v80H240Zm280-400Zm241 199-19-18 37 37-18-19Z"/></svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tiles