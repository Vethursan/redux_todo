import { VisibilityFilters } from "../actions";

/* NOTE: How each reducder manages its own part of the global state
         the state parameter is different for every reducder corresponding
         to the part of the state it manages. <-- this is called reducer composition
*/
const visbilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visbilityFilter;
