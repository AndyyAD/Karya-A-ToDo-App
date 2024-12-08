"use client"

import { useCallback, useState } from "react";
import Tiles from "./components/Tiles";
import AddTaskPopup from "./components/AddTaskPopup";
import EditTaskPopup from "./components/EditTaskPopup";
import ViewTaskPopup from "./components/ViewTaskPopup";

import useTodosStore from "@/store/todo-store";

export default function Home() {
	const [ isAddTask, setIsAddTask ] = useState<boolean>(false);
	const [ isEditTask, setIsEditTask ] = useState<boolean>(false);
	const [ isViewTask, setIsViewTask ] = useState<boolean>(false);

    const handleAddTask = useCallback(() => {
		setIsAddTask(!isAddTask);
		setIsEditTask(false);
		setIsViewTask(false);
	}, [isAddTask]);

	const handleEditTask = useCallback(() => {
        setIsEditTask(!isEditTask);
		setIsAddTask(false);
		setIsViewTask(false);
    }, [isEditTask]);

	const handleViewTask = useCallback(() => {
		setIsViewTask(!isViewTask);
		setIsAddTask(false);
		setIsEditTask(false);
	}, [isViewTask]);

	return (
		<>
			<section className="buttons container flex align-center justify-between pt-64">
				<div>
					<button className="btn primary rounded-xl mr-6 px-12"> All Task</button>
					<button className="btn pending rounded-xl mr-6 px-12"> Pending </button>
					<button className="btn completed rounded-xl mr-6 px-12"> Completed </button>
				</div>
				<button className="btn primary rounded-xl flex align-center items-center pl-6 pr-8"
					onClick={handleAddTask}
				> 
					<span className="mr-2">
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
					</span> 
					<span> Add Task </span>
				</button>
			</section>

			<section className="tasks container">
				<h2 className="text-4xl mb-8 font-semibold"> Today's Task </h2>
				<Tiles handleEditTask={handleEditTask} handleViewTask={handleViewTask} />
			</section>

			<section className="tasks container">
				<h2 className="text-4xl mb-8 font-semibold"> Upcoming Task </h2>
				<Tiles handleEditTask={handleEditTask} handleViewTask={handleViewTask} />
			</section>

			{ isAddTask ? <AddTaskPopup handleAddTask={handleAddTask} /> : null}
			{ isEditTask ? <EditTaskPopup handleEditTask={handleEditTask} /> : null }
			{ isViewTask? <ViewTaskPopup handleViewTask={handleViewTask}/> : null }

		</>
	);
}
