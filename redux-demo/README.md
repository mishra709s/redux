## REDUX:

## -> Redux is a predictable state container for JavaScript apps.

- It is for JavaScript app.
- It is a state container
- It is predictable

## -> Redux is for JavaScript application.

- Redux is not tied to React.
- Can be used with React, Angular, Vue or even Vanilla JavaScript
- Redux is a library for JavaScript applications.

## -> Redux is a state container.

- Redux stores the state of your application
- Consider a react app - state of a component

## LoginFormComponent

state = {
userName: '',
password:'',
submitting: false
}

## UserListComponent

state = {
users: []
}

## Application

state = {
isUserLoggedIn: true,
userName:'Soubhagya',
profileUrl:'',
onlineUsers: [],
isModalOpened: false
}

## -> Redux is Predictable.

- Predictable in what way?
- Redux is a state container
- The state of the applicatio can change
- Ex: todo list app - item(pending) -> item(completed)
- In Redux, all state transitions are explicit and it is possible to keep track of them
- The changes of you application state becomes predictable
- To manage the state of your application in a predictable way, redux can help you.

## React + Redux:

- Why would we want to use redux in a react application?
- Components in React have their own state
- Why do we need another tool to help manage the state?

## Do we really have a problem?

1. React context - Prevents prop drilling
   - Allows you to consume props deep within the component tree without having to manually pass it down through all the intermidient components.
2. useContext + useReducer - can preety much do what redux has to offer
3. Redux 1.0 - Released in Aug 2015, when these were not available

## React-Redux:

1. React is a UI library
2. Redux is a state management library
   They both work independently of each other. To directly use redux in your application is a bit confusing and also difficult. That is the reason we have the React-Redux package.

React <-------------> React-Redux <-------------> Redux

1. React-Redux is the official Redux UI binding library for React. What we mean by that is, React-Redux offers a couple of functions that will help you connect your react application with redux. So if you are using React and Redux together, you should use React-Redux to bind the two libraries.

## Summary
1. React is a library used to build user interfaces.
2. Redux is a library for managing state in a predictable way in JavaScript Application
3. React-redux is a library that provides bindings to use react and redux together in an application.

## GEtting Started - Project Setup
1. Install node and npm.
2. Create a folder call Redux-Demo and go inside the folder location using terminal/cmd.
3. Run command - (npm init --yes) - This will initialize a package.json file with the default settings.
4. Run command - (npm install redux)
5. Create a js file to write code.(Here index.js)

## Three Core Concepts Of Redux:

## Cake Shop:

## Entities:

Shop - Stores cakes on a shelf
Shopkeeper - At the front of the store
Customer - At the store entrance

## Activities:

Customer - Buy a cake
Shopkeeper - Remove a cake from the shelf - Receipt to keep track

## Cake Shop Scenario Redux Purpose

Shop - Store - Holds the state of your application
Intention to BUY_CAKE - Action - Describes what happened
Shopkeeper - Reducer - Ties the store and actions together

- A STORE that holds the state of the application.
- An ACTION that describes the changes in the state of the application.
- A REDUCER which acctually carries out the state transition depending on the action.

## Three Principles of Redux:

1. "The state of your whole application is stored in an object tree within a single store"
   Maintain our application state in a single object which would be managed by the Redux store

## Cake Shop:

Let's assume we tracking the number of cakes on the shelf

{
   numberOfCakes: 10; // This object will be managed by the redux store.
}

2. "The only way to change the state is to emit/dispatch an action, an object describing what happened."
   To update the state of your app, you need to let Redux know about that with an action
   Not allowed to directly update the state object.

## Cake Shop:

Let the shopkeeper know about our action - BUY_CAKE

{
   type: BUY_CAKE
}

3. "To specify how the state tree is transformed by actions, you write pure reducers"
   We need to write pure reducers to determine how the state changes. Pure reducers are basically pure functions, that takes the previous state and an action as inputs and returns the next state. And being pure functions, the reducers, instead of updating the previous state, should return a new state.

   Reducer - (previousState, action) => newState

## Cake Shop:

Reducer is the shopkeeper

const reducer = (state, action) => {
   switch(action.type) {
      case BUY_CAKE: return {
         numberOfCake: state.numOfCakes - 1
      }
   }
}

## Three Principles Overview:

Let's consider a simple JavaScript application. That state of the application is maintained separately in the Redux Store(State).
Our application is always subscribed to the Redux Store, however our app can't directly updte the state. 
If the application wants to update the state, it has to emit/dispatch an action. Once an action has been dispatched, the reducer then handles the action and updates the current state. 
As soon as the state is updated the value is then passed on to the application because the app is subscribed to the store.

## ACTIONS:

1. The only way your application can intteract with the store
2. Carry some information from your app to the redux store
3. Plain JavaScript object
4. Have a 'type' property that indicates the type of action being performed
5. The 'type' property is typically defined as string constant.

## Action Creator:

1. It simply create an action.
   Its a function that returns an action.

## Reducers:

1. Specifies how the app's state changes in response to actions sent to the store
2. Its a function that accepts state and action as arguements, and returns the next state of the application
   (previousState, action) => newState

## Redux Store:

1. One store for the entire application.
2. Responsibilities

- Holds application state
- Allows access to state via getState()
- Allows state to be updated via dispatch(action)
- Registers listeners via subscribe(listener)
- Handles unregistering of listenes via the function returned by subscribe(listener)

## Middleware:

- It is the suggested way to extend Redux with custom functionality
- It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
- Use middleware for logging, crash reporting, performing asynchronous tasks etc.
- Redux-logger basically logs all the informationrelated to redux in your application.

## Steps to implement Middleware in Redux:

1. npm install redux-logger
2. Add the redux-logger require statement.(const reduxLogger = require("redux-logger");)
3. Create Logger. (const logger = reduxLogger.createLogger();)
4. Add the middleware. (const applyMiddleware = redux.applyMiddleware;)
5. To the createStore() we pass in the second parameter.(const store = createStore(rootReducer, applyMiddleware(logger));)
6. Remove the log statement from the subscribe().

## Async action creators:

1. axios

- Requests to an API end point

2. redux-thunk

- Define async action creators
- Middleware

## Redux-thunk:

- Import the redux-thunk middleware and pass it to the createStore function.
- It allows an action creator to return a function instead of an action.
- The function can now perform side effects such as asyncronous tasks.
- The function can also dispatch regular actions which will be handled by the reducer.
