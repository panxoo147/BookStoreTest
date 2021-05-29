import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Store,Nav,Cart,Bookinfo,Payment} from'./Component';  
import history from './history'

const Routes = () => {
    return (
        <Router history={history}>
            <Nav/>
            <Switch>
                {/* <Route path="/bookinfo">
                    <BookInfo />
                </Route> */}
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/bookinfo" >
                    <Bookinfo/>
                </Route>
                <Route path="/payment" >
                    <Payment/>
                </Route>
                <Route path="/">
                    <Store />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
