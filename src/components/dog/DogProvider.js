import React, { useState, useEffect } from "react"
import {withRouter} from "react-router-dom"

export const DogContext = React.createContext()

const DogProvider = (props) => {
    const [dogs, setDogs] = useState([])

    const getDogs = () => {
        return fetch("api/dog")
            .then(res => res.json())
            .then(setDogs)
    }

    const addDog = Dog => {
        return fetch("api/dog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Dog)
        })
            .then(getDogs).then(props.history.push("/dogs"))
    }

    const releaseDog = dogId => {
        return fetch(`api/dog/${dogId}`, {
            method: "DELETE"
        })
            .then(getDogs)
    }

    const updateDog = dog => {
        return fetch(`api/dog/${dog.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dog)
        })
            .then(getDogs).then(props.history.push("/dogs"))
    }

    useEffect(() => {
        getDogs()
    }, [])

    return (
        <DogContext.Provider value={{
            dogs, addDog, releaseDog, updateDog
        }}>
            {props.children}
        </DogContext.Provider>
    )
}

export default withRouter(DogProvider)