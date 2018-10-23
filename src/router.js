import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import createStore from "./store/createStore";

import OverView from './modules/overview';


const Routes = () => {
    const store = createStore();
    return (
        <Provider store={store}>
            <Router>
                <Route exact path="/" component={OverView}>
                </Route>
            </Router>
        </Provider>        
    );
}
export default Routes;