// create empty order object to store selections
const transientState = {
    colorId: 0,
    interiorId: 0,
    technologyId: 0,
    wheelId: 0
}

// create setter function for paint colors
export const setPaintColor = (chosenPaintColor) => {
    transientState.colorId = chosenPaintColor
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

    const stateChangedEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(stateChangedEvent)
    console.log(transientState)
}
// create function to save user selections to orders array in database
    // define post option for fetch() to API
        // post transient state object with user selections
    // reset transient state once order state is created
    // trigger stateChanged custom event 
        // call in main module to regenerate HTML upon button selection