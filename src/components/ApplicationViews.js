import React from "react"
import { Route } from "react-router-dom"
import OwnerProvider from "./owner/OwnerProvider"
import OwnerList from "./owner/OwnerList"
import DogProvider from "./dog/DogProvider"
import DogList from "./dog/DogList"
import WalkerProvider from "./walker/WalkerProvider"
import WalkerList from "./walker/WalkerList"
import HomeList from "./home/HomeList"
import DogForm from "./dog/DogForm"

export default (props) => {
    return (
        <>
            <OwnerProvider>
                <DogProvider>
                    <WalkerProvider>
                        <Route exact path="/" render={
                            props => <HomeList {...props} />
                        } />
                        <Route exact path="/owners" render={
                            props => <OwnerList {...props} />
                        } />
                        <Route exact path="/dogs" render={
                            props => <DogList {...props} />
                        } />
                        <Route exact path="/dogs/create" render={
                            props => <DogForm {...props} />
                        } />
                        <Route exact path="/dogs/edit/:dogId(\d+)" render={
                            props => <DogForm {...props} />
                        } />
                        <Route exact path="/walkers" render={
                            props => <WalkerList {...props} />
                        } />
                    </WalkerProvider>
                </DogProvider>
            </OwnerProvider>
        </>
    )
}