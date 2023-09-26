import React from "react";
import {Provider} from "react-redux";
import store from './store'
import Users from "./components/users/Users.jsx";

const App = () => {
    return (
        <Provider store={store}>
            <Users />
        </Provider>
    )
}

export default App