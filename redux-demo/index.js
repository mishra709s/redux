// Create store for the application
const redux = require("redux");
const createStore = redux.createStore;

// Implement redux-logger
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

// To combine multiple reducers
const combineReducers = redux.combineReducers;

// Apply middleware
const applyMiddleware = redux.applyMiddleware;

// Actions
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICERCREAM";

// Action Creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action"
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM
  };
}

// (previousState, action) => newState
/* const initialState = {
  numOfCakes: 10,
  numOfIcecreams: 20
}; */

const initialCakeState = {
  numOfCakes: 10
};

const initialIceCreamState = {
  numOfIcecreams: 20
};

/* const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        // We might have multiple properties, that is why it is always safer to first create a copy of the state object and then change only the properties that need to.
        ...state,
        numOfCakes: state.numOfCakes - 1
      };

    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1
      };
    default:
      return state;
  }
}; */

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1
      };
    default:
      return state;
  }
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };
    default:
      return state;
  }
};

// Root reducer
// combineReducer() accepts an object
// Each {key: value} pair for this object corresponds to a reducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

// R1 - Holding the application state.
const store = createStore(rootReducer, applyMiddleware(logger));

// R2 - Allow access to the state.
console.log("Initial State", store.getState());

// R4 - Registers listeners via subscribe(listener) R5 - Unsubscribe
/* const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
); */

const unsubscribe = store.subscribe(() => {});

// R3 - Allows state to be updated via dispatch(action)
store.dispatch(buyCake());

// To cause a few more state transitions, will dispatch the same action few more times
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

unsubscribe();
