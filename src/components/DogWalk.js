import React from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import "./DogWalk.css"
import { Route } from "react-router-dom"

export default () => (
    <>
        <>
            <Route render={props => <NavBar {...props} />} />
            <Route render={props => <ApplicationViews {...props} />} />
        </>
    </>
)