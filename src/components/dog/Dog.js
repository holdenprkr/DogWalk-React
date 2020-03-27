import React, { useContext } from "react"
import "./Dogs.css"
import { Link } from "react-router-dom"
import { DogContext } from "./DogProvider"

export default ({ dog }) => {
    const { releaseDog } = useContext(DogContext)

    if (dog.notes === null){
        return(
            <section className="dog">
                <h3 className="dog__name">
                    <Link to={`/dogs/edit/${ dog.id }`}>
                        { dog.name }
                    </Link>
                </h3>
                <div className="dog__breed">Breed: { dog.breed }</div>
                <div className="dog__owner__name">Owner: { dog.owner.name }</div>
                <div className="dog__owner__address">Address: { dog.owner.address }</div>
                <button onClick={() => releaseDog(dog.id)}>Release</button>
            </section>
        )
    } else {
        return(
            <section className="dog">
                <h3 className="dog__name">
                    <Link to={`/dogs/edit/${ dog.id }`}>
                        { dog.name }
                    </Link>
                </h3>
                <div className="dog__breed">{ dog.breed }</div>
                <div className="dog__notes">{ dog.notes }</div>
                <div className="dog__owner__name">Owner: { dog.owner.name }</div>
                <div className="dog__owner__address">Address: { dog.owner.address }</div>
                <button onClick={() => releaseDog(dog.id)}>Release</button>
            </section>
        )
    }
}