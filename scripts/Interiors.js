import { setInterior } from "./TransientState.js"

// handle change to interior options
const handleInteriorsChange = (event) => {
    // was an interior selected?
    if (event.target.id === "interiors") {
        // update transient state interiorId with selection
        setInterior(event.target.value)
    }
}

export const interiorsOptions = async () => {
    const response = await fetch("http://localhost:8088/interior")
    const interiors = await response.json()

    // create event listener to initiate event handler
    document.addEventListener("change", handleInteriorsChange)

    let interiorsHTML = `<h2>Interiors</h2>
                                <select id="interiors">
                                <option value="0">Select interior...</option>`
    
    const interiorsArray = interiors.map(
        (interior) => {
            return `<option value="${interior.id}">${interior.material}</option>`
        }
    )

    interiorsHTML += interiorsArray
    interiorsHTML += "</select>"

    return interiorsHTML
}