/*  The Store is the object that brings together the actions (what happened) and reducers (what to do)
    The Store:
        holds application state
        allows acces to the state via getState()
        allows the state to be updated via dispatch(action)
        registers listeners via subscribe(listeners)
        handles unregistering of listeners using the function returned by subsribe(listener)
    You have a single store in a redux app
    if you want to seperate your data handling logic, you use reducer composition vs many stores. 
*/

import { createStore } from "redux";
import todoApp from "./reducers";
// If you want to match the state of the client with the state of the redux app on the server you can do
// const store = createStore(todoApp, window.STATE_FROM_SERVER);
const store = createStore(todoApp);
