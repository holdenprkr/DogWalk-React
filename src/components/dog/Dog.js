import React from "react"
import "./Dogs.css"

export default ({ dog }) => {
    if (dog.notes === null){
        return(
            <section className="dog">
                <h3 className="dog__name">
                    { dog.name }
                </h3>
                <div className="dog__breed">Breed: { dog.breed }</div>
                <div className="dog__owner__name">Owner: { dog.owner.name }</div>
                <div className="dog__owner__address">Address: { dog.owner.address }</div>
            </section>
        )
    } else {
        return(
            <section className="dog">
                <h3 className="dog__name">
                    { dog.name }
                </h3>
                <div className="dog__breed">{ dog.breed }</div>
                <div className="dog__notes">{ dog.notes }</div>
                <div className="dog__owner__name">Owner: { dog.owner.name }</div>
                <div className="dog__owner__address">Address: { dog.owner.address }</div>
            </section>
        )
    }
}