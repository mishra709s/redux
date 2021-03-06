const redux = require("redux");
const createStore = redux.createStore;

// Middleware
const applyMiddleware = redux.applyMiddleware;

const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

// State
const initialState = {
  loading: false,
  users: [],
  error: ""
};

// Constants for the Action types
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

//Action Creators
const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  };
};

const fetchUserSuccess = users => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users
  };
};

const fetchUserFailure = error => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  };
};

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ""
      };
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      };
  }
};

// Action creator
const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        // response.data is the array of users
        const users = response.data.map(user => user.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch(error => {
        // error.message is the error description
        dispatch(fetchUserFailure(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
