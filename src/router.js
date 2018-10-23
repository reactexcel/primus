import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import createStore from "./store/createStore";

import App from './App'


const Routes = () => {
    const store = createStore();
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Route exact path="/" component={App}>
                    </Route>
                </div>
            </Router>
        </Provider>        
    );
}
export default Routes;