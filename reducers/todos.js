/*
Reducers:

Reducers specify how your applications state changes in response to the actions sent to the store
Note: Actions describe what happened but not how the state changes <- reducers do that.

Pure functions that take in the previous state and action and returns the next state.
(prevState, action) => newState

Inside a reducer NEVER:
    -mutate its arguments
    -perfrom side effects like API calls and route transitions
    -call non pure funcs like Date.now() nd math.random() 
*/
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
