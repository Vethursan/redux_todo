import { combineReducers } from "react=redux";
import todos from "./todos";
import visibilityFilter from "visibilityFilter";

​/* same as doing 
export default function todoApp(state, action){
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    }
} */
export default combineReducers({
  todos,
  visibilityFilter
});
