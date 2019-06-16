const createTodo = (id, todo) => {
  return {
    type: 'CREATE_TODO',
    payload: {
      id: id,
      todo: todo
    }
  };
};

const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    payload: {
      id: id
    }
  };
};

const todo = (prevTodos = [], action) => {
  if (action.type === 'CREATE_TODO') {
    return [...prevTodos, action.payload];
  }

  if (action.type === 'DELETE_TODO') {
    console.log('inside');
    return prevTodos.filter(todo => todo.id !== action.payload.id);
  }
  return prevTodos;
};

const Redux = require('redux');

const { createStore, combineReducers } = Redux;

const store = createStore(combineReducers({ todo: todo }));

store.dispatch(createTodo(1, 'Get milk'));
store.dispatch(createTodo(2, 'Get Cookies'));
console.log(store.getState());
store.dispatch(deleteTodo(1));
console.log(store.getState());
