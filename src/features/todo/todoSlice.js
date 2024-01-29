import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: Date.now(),
      text: "Hello World",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (action, state) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (action, state) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload.id);
    },
    updateTodo: (action, state) => {
      const todo = state.todos.map(action.payload.id);
      if (todo) state.todos.push({ ...todo, text: action.payload });
      else todo;
    },
  },
});

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
