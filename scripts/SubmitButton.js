import { placeOrder } from "./TransientState.js"

// add event handler to recognize when button is clicked
const handleUserSubmission = (event) => {
    if (event.target.id === "submission-button") {
        console.log("Order Saved")
        JSON.stringify(placeOrder())
    }
}

export const createButton = () => {
    document.addEventListener("click", handleUserSubmission)
    return "<button id='submission-button'>Get Quote</button>"
}