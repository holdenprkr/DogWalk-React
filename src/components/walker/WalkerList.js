import React, { useContext } from "react"
import { WalkerContext } from "./WalkerProvider"
import Walker from "./Walker"
import "./Walkers.css"

export default (props) => {
    const { walkers } = useContext(WalkerContext)

    return (
        <div>
            <div className="walkers">
            {
                walkers.map(walker => {
                return <Walker key={walker.id} walker={walker} />
                })
            }
            </div>
        </div>
    )
}