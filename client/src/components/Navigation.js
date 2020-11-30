import React from "react"
import Login from "./Login/Login"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom"
import About from "./Header/About"
import Contact from "./Header/Contact"
import SignIn from "./SignIn/SignIn"
import ShowUser from "./ShowUser/ShowUser"
import Edit from "./ShowUser/Edit"
import CreateUser from "./CreateUser/CreateUser"


function Navigation(){
    
    return(
        <div>
            <Router>
                <Switch>
                   
                    <Route path="/about">
                       <About />
                    </Route>
                    <Route path="/user/:idStr/:username/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/user/:idStr/:username/contact">
                        <Contact />
                    </Route>
                    <Route path="/sign-in">
                       <SignIn />
                    </Route>
                    <Route path="/create-acc">
                       <CreateUser />
                    </Route>
                    <Route  path="/user/:id/:username/edit">
                        <Edit/>
                    </Route>
                    <Route path="/user/:id/:username">
                        <ShowUser/>
                    </Route>
                    
                    <Route path="/">
                        <Login/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Navigation