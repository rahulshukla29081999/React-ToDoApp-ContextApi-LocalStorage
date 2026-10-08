import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "ToDo Message",
      completed: false,
    },
  ],
  addToDo: (todo) => {},
  updatedToDo: (id, todo) => {},
  deletedToDo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(ToDoContext);
};

export const ToDoProvider = ToDoContext.Provider;
