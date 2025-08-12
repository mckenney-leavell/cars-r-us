import { setPaintColor } from "./TransientState.js"

// create event function
const handlePaintChange = (event) => {
    // is paint section selected?
    if (event.target.id === "paints") {
        // set transient state paintId to selected paint color
        setPaintColor(event.target.value)
    }
}

export const paintOptions = async () => {
    const response = await fetch("http://localhost:8088/paintColors")
    const paints = await response.json()

    //create event listener
    document.addEventListener("change", handlePaintChange)

    let paintsHTML = `<h2>Paint Colors</h2>
                        <select id="paints">
                            <option value="0">Select paint color...</option>
                        `
     

    const paintArray = paints.map(
        (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    paintsHTML += paintArray
    paintsHTML += "</select>"

    return paintsHTML
}

