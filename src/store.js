import { createStore, combineReducers } from "redux";
import counterReducer  from "./components/counter/counter.reducer";
import usersReducer from "./components/users/users.reducer";

const reducer = combineReducers({
    users: usersReducer,
    counter: counterReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store