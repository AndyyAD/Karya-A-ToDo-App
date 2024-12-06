"use client"

import useTodosStore from "@/store/todo-store";

// This is just a test of zustand functionality. It is not the final product.
export default function Home() {
	const { todos, addTodo, updateTodo, deleteTodo, markStatus } = useTodosStore();

	const addIt = () => {
        addTodo("Buy groceries", "Milk, eggs, bread", "2024-12-06");
    };

	const updateIt = () => {
		updateTodo(1, "Buy groceries", "Milk, eggs, bread, and butter", "2024-12-06", true);
	}

	const deleteIt = () => {
        deleteTodo(1);
    }

	return (
		<>
			<ul>
				{todos.map((todo) => (
                    <li key={todo.id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                        <p>{todo.date}</p>
						<p>{todo.completed}</p>
                    </li>
                ))}
			</ul>
			<div >
				<button onClick={addIt}> create todo </button> <br />
				<button onClick={updateIt}> update todo </button> <br />
				<button onClick={deleteIt}> delete todo </button>
			</div>
		</>
	);
}
