let nextId = 0;

const addTodo = text => ({
  type: "ADD_TODO",
  id: nextId++,
  text
});

const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

const visibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
