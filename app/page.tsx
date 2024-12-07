"use client"

import Tiles from "./components/Tiles";

import useTodosStore from "@/store/todo-store";

// This is just a test of zustand functionality. It is not the final product.
// export default function Home() {
// 	const { todos, addTodo, updateTodo, deleteTodo, markStatus } = useTodosStore();

// 	const addIt = () => {
//         addTodo("Buy groceries", "Milk, eggs, bread", "2024-12-06");
//     };

// 	const updateIt = () => {
// 		updateTodo(1, "Buy groceries", "Milk, eggs, bread, and butter", "2024-12-06", true);
// 	}

// 	const deleteIt = () => {
//         deleteTodo(1);
//     }

// 	return (
// 		<>
// 			<ul>
// 				{todos.map((todo) => (
//                     <li key={todo.id}>
//                         <h3>{todo.title}</h3>
//                         <p>{todo.description}</p>
//                         <p>{todo.date}</p>
// 						<p>{todo.completed}</p>
//                     </li>
//                 ))}
// 			</ul>
// 			<div >
// 				<button onClick={addIt}> create todo </button> <br />
// 				<button onClick={updateIt}> update todo </button> <br />
// 				<button onClick={deleteIt}> delete todo </button>
// 			</div>
// 		</>
// 	);
// }

export default function Home() {
	return (
		<>
			<section className="buttons container flex align-center justify-between">
				<div>
					<button className="btn primary rounded-xl mr-6 px-12"> All Task</button>
					<button className="btn pending rounded-xl mr-6 px-12"> Pending </button>
					<button className="btn completed rounded-xl mr-6 px-12"> Completed </button>
				</div>
				<button className="btn primary rounded-xl flex align-center items-center pl-6 pr-8"> 
					<span className="mr-2">
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
					</span> 
					<span> Add Task </span>
				</button>
			</section>
			<section className="tasks container">
				<h2 className="text-4xl "> Today's Task </h2>
				<Tiles/>
			</section>
		</>
	);
}
