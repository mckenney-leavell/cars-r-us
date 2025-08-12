import { setWheels } from "./TransientState.js"

// create event handler
const handleWheelChange = (event) => {
    // was a wheel option selected?
    if (event.target.id === "wheels") {
        // set transient state wheel id to wheel selection
        setWheels(event.target.value)
    }
}

export const wheelsOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    // create event listener to initiate event handler
    document.addEventListener("change", handleWheelChange)

    let wheelsHTML = `<h2>Wheels</h2>
                        <select id="wheels">
                        <option value="0">Select wheels...</option>`

    const wheelsArray = wheels.map(
        (wheel) => {
            return `<option value="${wheel.id}">${wheel.option}</option>`
        }
    )

    wheelsHTML += wheelsArray
    wheelsHTML += "</select>"

    return wheelsHTML
}