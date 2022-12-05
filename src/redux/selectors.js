

// export const todoListSelector = (state) => {
//     // Sau khi nhap input vao trong search thi filter neu co chua "state.filter.search" thi tra ve True
//     const todoRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(state.filter.search)  
//     })
//     return todoRemaining;
// };

// export const searchTextSelector = (state) => state.filter.search
import { createSelector } from "reselect"

export const searchTextSelector = (state) => state.filter.search 
export const todoListSelector = (state) => state.todoList

export const todosRemainingSelector = createSelector(todoListSelector, searchTextSelector, (todoList, searchText) => {
    return todoList.filter((todo) => {
        return todo.name.includes(searchText)
    })
})