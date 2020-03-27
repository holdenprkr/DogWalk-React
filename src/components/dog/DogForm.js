import React, { useContext, useState, useEffect } from "react"
import { DogContext } from "./DogProvider"
import { OwnerContext } from "../owner/OwnerProvider"
import "./Dogs.css"


export default props => {
    const { owners } = useContext(OwnerContext)
    const { addDog, dogs, updateDog } = useContext(DogContext)
    const [dog, setDog] = useState({})

    const editMode = props.match.params.hasOwnProperty("dogId")

    const handleControlledInputChange = (event) => {
        const newDog = Object.assign({}, dog)
        newDog[event.target.name] = event.target.value
        setDog(newDog)
    }

    const setDefaults = () => {
        if (editMode) {
            const dogId = parseInt(props.match.params.dogId)
            const selectedDog = dogs.find(d => d.id === dogId) || {}
            setDog(selectedDog)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [dogs])

    const constructNewDog = () => {
        const ownerId = parseInt(dog.ownerId)

        if (ownerId === 0) {
            window.alert("Please select a owner")
        } else {
            if (editMode) {
                updateDog({
                    id: dog.id,
                    name: dog.name,
                    breed: dog.breed,
                    notes: dog.notes,
                    ownerId: ownerId
                })
                    .then(() => props.history.push("/dogs"))
            } else {
                addDog({
                    name: dog.name,
                    breed: dog.breed,
                    notes: dog.notes,
                    ownerId: ownerId
                })
                    .then(() => props.history.push("/dogs"))
            }
        }
    }

    return (
        <form className="dogForm">
            <h2 className="dogForm__title">{editMode ? "Update Dog" : "Add Dog"}</h2>
            <div className="formInputContainer">
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Dog's name: </label>
                        <input type="text" name="name" required autoFocus className="form-control"
                            proptype="varchar"
                            placeholder="Dog's name"
                            defaultValue={dog.name}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="breed">Dog's breed: </label>
                        <input type="text" name="breed" required className="form-control"
                            proptype="varchar"
                            placeholder="Dog's breed"
                            defaultValue={dog.breed}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="notes">Dog's notes (if needed): </label>
                        <textarea type="text" name="notes" required className="form-control"
                            proptype="varchar"
                            placeholder="notes"
                            defaultValue={dog.notes}
                            onChange={handleControlledInputChange}
                        ></textarea>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="ownerId">Owner: </label>
                        <select name="ownerId" className="form-control ownerSelect"
                            proptype="int"
                            value={dog.ownerId}
                            onChange={handleControlledInputChange}>

                            <option value="0">Select the dog's owner</option>
                            {owners.map(o => (
                                <option key={o.id} value={o.id}>
                                    {o.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
            </div>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewDog()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Save New Animal"}
            </button>
        </form>
    )
}