import React from "react"
import "./Walkers.css"

export default ({ walker }) => (
    <section className="walker">
        <h3 className="walker__name">
            { walker.name }
        </h3>
        {/* <div className="walker__address">Address: { walker.address }</div>
        <div className="walker__phone">Phone: { walker.phone }</div> */}
    </section>
)