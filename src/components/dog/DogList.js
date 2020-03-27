import React, { useContext } from "react"
import { DogContext } from "./DogProvider"
import Dog from "./Dog"
import "./Dogs.css"

export default (props) => {
    const { dogs } = useContext(DogContext)

    return (
        <div>
            <div className="dogs">
            {
                dogs.map(dog => {
                return <Dog key={dog.id} dog={dog} />
                })
            }
            </div>
        </div>
    )
}