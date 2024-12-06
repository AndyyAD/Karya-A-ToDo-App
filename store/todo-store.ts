import { create } from "zustand";

interface Todo {
    id: number;
    title: string;
    description: string;
    date: string;
    completed: boolean;
}

interface TodosState {
    todos: Todo[];
    addTodo: (title: string, description: string, date: string) => void;
    updateTodo: (id: number, title: string, description: string, date: string, completed: boolean) => void;
    deleteTodo: (id: number) => void;
    markStatus: (id: number, completed: boolean) => void;
}

const useTodosStore = create<TodosState>((set) => ({
    todos: [],

    addTodo: (title, description, date) => set((state) => ({
        todos: [ 
            ...state.todos, {
                id: state.todos.length > 0 ? state.todos[state.todos.length - 1].id + 1 : 1,
                title,
                description,
                date,
                completed: false,
            },
        ],
    })),

    updateTodo: (id, title, description, date, completed) => set((state) => ({
        todos: state.todos.map((todo) => 
            todo.id === id ? { ...todo, title, description, date, completed } : todo 
        ),
    })),

    deleteTodo: (id) => set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
    })),

    markStatus: (id, completed) => set((state) => ({
        todos: state.todos.map((todo) => 
            todo.id === id? {...todo, completed } : todo 
        ),
    }))
}));

export default useTodosStore;