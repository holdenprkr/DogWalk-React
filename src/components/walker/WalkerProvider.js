import React, { useState, useEffect } from "react"
import {withRouter} from "react-router-dom"

export const WalkerContext = React.createContext()

const WalkerProvider = (props) => {
    const [walkers, setWalkers] = useState([])

    const getWalkers = () => {
        return fetch("api/walker")
            .then(res => res.json())
            .then(setWalkers)
    }

    const addWalker = walker => {
        return fetch("api/walker", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(walker)
        })
            .then(getWalkers).then(props.history.push("/walkers"))
    }

    const releaseWalker = walkerId => {
        return fetch(`api/walker/${walkerId}`, {
            method: "DELETE"
        })
            .then(getWalkers)
    }

    const updateWalker = walker => {
        return fetch(`api/Walker/${walker.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(walker)
        })
            .then(getWalkers).then(props.history.push("/walkers"))
    }

    useEffect(() => {
        getWalkers()
    }, [])

    return (
        <WalkerContext.Provider value={{
            walkers, addWalker, releaseWalker, updateWalker
        }}>
            {props.children}
        </WalkerContext.Provider>
    )
}

export default withRouter(WalkerProvider)