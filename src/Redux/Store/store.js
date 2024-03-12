import { createStore } from "redux";
import { TaskReducer } from "../Reducers/TaskReducer";



export let store=createStore(TaskReducer);