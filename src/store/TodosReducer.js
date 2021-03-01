import getJSONdata from "../utils/getJSONdata";
import {
  SET_TODOS, UPDATE_TODO, REMOVE_TODO
} from './actions';

const initialState = [];
const TodosReducer = (state=initialState, action) => {
  const {type, payload} = action;
  switch(type) {
    case SET_TODOS:
      return {
        ...state,
        todos: payload,
      }
    case UPDATE_TODO:
      return state;
    case REMOVE_TODO: 
    return {
      ...state,
      todos: [...state.todos.filter((todo) => todo.id !== payload)],
    }
    default:
      return state;
  }
};

export const removeTodo = (todoId) => {
  return {
    type: REMOVE_TODO,
    payload: todoId,
  }
}

const setTodosAC = (todos) => {
  return {
    type: SET_TODOS,
    payload: todos,
  }
}

export const getTodos = () => {
  return async (dispatch) => {
    const data = await getJSONdata('./todos.json')
    dispatch(setTodosAC(data.todos))
  }
};

export default TodosReducer;