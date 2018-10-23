import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import createStore from "./store/createStore";

import OverView from './modules/overview';
import Header from './components/common/header'
import App from './App'


const Routes = () => {
    const store = createStore();
    return (
        <Provider store={store}>
            <Router>
              <div>
                <Header />
                <Route exact path="/" component={App}>
                  <Route exact path="/overview" component={OverView}/>
                </Route>
                </div>
            </Router>
        </Provider>        
    );
}
export default Routes;