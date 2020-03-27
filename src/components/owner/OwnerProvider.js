import React, { useState, useEffect } from "react"
import {withRouter} from "react-router-dom"

export const OwnerContext = React.createContext()

const OwnerProvider = (props) => {
    const [owners, setOwners] = useState([])

    const getOwners = () => {
        return fetch("api/owner")
            .then(res => res.json())
            .then(setOwners)
    }

    const addOwner = owner => {
        return fetch("api/owner", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(owner)
        })
            .then(getOwners).then(props.history.push("/owners"))
    }

    const updateOwner = owner => {
        return fetch(`api/owner/${owner.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(owner)
        })
            .then(getOwners).then(props.history.push("/owners"))
    }

    useEffect(() => {
        getOwners()
    }, [])

    return (
        <OwnerContext.Provider value={{
            owners, addOwner, updateOwner
        }}>
            {props.children}
        </OwnerContext.Provider>
    )
}

export default withRouter(OwnerProvider)