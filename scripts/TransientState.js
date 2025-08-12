// create empty order object to store selections
const transientState = {
    paintColorId: 0,
    interiorId: 0,
    technologyId: 0,
    wheelId: 0
}

// create setter function for paint colors
export const setPaintColor = (chosenPaintColor) => {
    transientState.paintColorId = chosenPaintColor
    console.log(transientState)
}
// create setter function for technology packages
export const setTechnologyPackage = (chosenPackage) => {
    transientState.technologyId = chosenPackage
    console.log(transientState)
}
// create setter function for interiors
export const setInterior = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}
// create setter function for wheels
export const setWheels = (chosenWheels) => {
    transientState.wheelId = chosenWheels
    console.log(transientState)
}

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)
    console.log(transientState)

    transientState.paintColorId = 0
    transientState.technologyId = 0
    transientState.interiorId = 0
    transientState.wheelId = 0

    const stateChangedEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(stateChangedEvent)
    console.log(transientState)
}