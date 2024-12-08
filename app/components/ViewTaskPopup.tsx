import React from 'react'

interface ViewTaskPopupProps {
    handleViewTask: () => void;
}

const ViewTaskPopup: React.FC<ViewTaskPopupProps> = ({ handleViewTask }) => {
    return (
        <div className="addTask h-screen fixed bottom-0 right-0 pt-64 px-20">
            <div className="flex justify-between align-center mb-12">
                <h2 className="text-4xl font-semibold">Task 001</h2>
                <div onClick={handleViewTask}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                    >
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                </div>
            </div>
            <hr />
            <div>
                <h1 className='mb-4 mt-14 text-5xl font-semibold'> Task Title </h1>
                <p className='text-3xl mb-4 mt-10'> <span className='font-semibold'> Description: </span> Hello Description 1 </p>
                <p className='text-3xl mb-4 mt-10'> <span className='font-semibold'> Status: </span> Hello Status </p>
                <p className='text-3xl mb-4 mt-10'> <span className='font-semibold'> Scheduled for: </span> 07 December, 2024 </p>
                <p className='text-3xl mb-4 mt-10'> <span className='font-semibold'> Scheduled on: </span> 07 December, 2024 </p>
            </div>
            <div className="w-full flex justify-end absolute bottom-10 right-20">
                <button
                    type="submit"
                    className="btn completed rounded-xl px-12 mt-6 mx-3"
                >
                    Mark as complete
                </button>
                <button
                    type="submit"
                    className="btn primary rounded-xl px-12 mt-6 mx-3"
                >
                    Edit Task
                </button>
                <button
                    type="submit"
                    className="btn delete rounded-xl px-12 mt-6 mx-3"
                >
                    Delete Task
                </button>
            </div>
        </div>
    )
}

export default ViewTaskPopup