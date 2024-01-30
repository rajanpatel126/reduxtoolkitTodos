# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

                "SUMMARY of Redux toolkit and React-Redux INTEGERATION"

React is different and Redux is different liberary(core) altogether. React-Redux is the implementation used for wiring for communication.

'NEVER MUTATE YOUR STATE' redux toolkit handels all behind the scenes.

Single source of truth which is one store per application:
->configure store is first which contains the multiple objects(with key-value property)

->when the updation occurs in store, there is no work flow in the store, we need to update the values via reducers

->then we need to make the reducers

->features called slice which needs 3 things: name, initialState and list of reducers

->state & action: state => updated state value in the store, action => action.payload

->unique id creation with nanoId()

->state is preserve, so no need to {...todo}, just push the state into todos

->Export all the reducers altogether because you don't know which component will use which reducer

->Export the main source of the reducers : todoSlice.reducer in order to state in the store

->addTodo means sending the data to the store, means DISPATCH =>use useDispatch() method via reducer

->export the Todos from the store, means SELECT => use useSelector(state), which has the access of the state, we can access all things like auth, products, payment info from the 'state', use it in callback
