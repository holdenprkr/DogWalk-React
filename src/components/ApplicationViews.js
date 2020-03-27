import React from "react"
import { Route } from "react-router-dom"
import OwnerProvider from "./owner/OwnerProvider"
import OwnerList from "./owner/OwnerList"
import DogProvider from "./dog/DogProvider"
import DogList from "./dog/DogList"
import WalkerProvider from "./walker/WalkerProvider"
import WalkerList from "./walker/WalkerList"

export default (props) => {
    return (
        <>
            <OwnerProvider>
                <Route exact path="/owners" render={
                    props => <OwnerList {...props} />
                } />
            </OwnerProvider>
            <DogProvider>
                <Route exact path="/dogs" render={
                    props => <DogList {...props} />
                } />
            </DogProvider>
            <WalkerProvider>
                <Route exact path="/walkers" render={
                    props => <WalkerList {...props} />
                } />
            </WalkerProvider>
        </>
    )
}