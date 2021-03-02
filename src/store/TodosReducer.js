import getJSONdata from "../utils/getJSONdata";
import getTodoId from "../utils/getTodoId";
import removeTodoItemFromList from "../utils/removeTodoItemFromList";
import updateTodoText from "../utils/updateTodoText";
import {
  SET_TODOS, 
  UPDATE_TODO, 
  REMOVE_TODO,
  ADD_TODO,
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
    case ADD_TODO:
      const id = getTodoId(state.todos);
      return {
        ...state,
        todos: [
          ...state.todos, 
          {...payload, id}
        ],
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: updateTodoText(
          state.todos, payload.id, payload.newText
          )
      };
    case REMOVE_TODO: 
      return {
        ...state,
        todos: removeTodoItemFromList(state.todos, payload),
      }
    default:
      return state;
  }
};

export const removeTodoAC = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  }
}

export const addTodoAC = (title, text) => {
  return {
    type: ADD_TODO,
    payload: {title, text},
  }
}

export const editTodoAC = (id, newText) => {
  return {
    type: UPDATE_TODO,
    payload: {id, newText},
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