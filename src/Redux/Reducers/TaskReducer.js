import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_DONE_TASK,
  UPDATE_TASK,
} from "../Constants/actionType";

const initialState = {
  tasks: [
    {
      description: "test description ",
      done: false,
      id: Math.random(),
    },
  ],
};

export let TaskReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { done: false, id: Math.random(), description: payload },
        ],
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          task.id == payload.id
            ? { ...task, description: payload.description }
            : task
        ),
      };
    case UPDATE_DONE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          task.id == payload.id ? { ...task, done: !task.done } : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => task.id !== payload.id),
      };
    default:
      return state;
  }
};
