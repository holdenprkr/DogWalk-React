import React from "react"
import "./Owners.css"

export default ({ owner }) => (
    <section className="owner">
        <h3 className="owner__name">
            { owner.name }
        </h3>
        <div className="owner__address">Address: { owner.address }</div>
        <div className="owner__phone">Phone: { owner.phone }</div>
    </section>
)