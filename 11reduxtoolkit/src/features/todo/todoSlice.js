import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text:"Azan"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addtodo:(state, action) =>{
             const todo = {id:nanoid(), text: action.payload}
            state.todos.push(todo)
        },
        deletetodo:(state, action) =>{
            state.todos = state.todos.filter(todo=> todo.id !== action.payload)
        }
    }
});

export const {addtodo, deletetodo} = todoSlice.actions
export default todoSlice.reducer;
