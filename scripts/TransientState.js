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