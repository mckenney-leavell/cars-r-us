import { setTechnologyPackage } from "./TransientState.js"

// handle change to technology selection
const handleTechnologyChange = (event) => {
    // was the technology section selected?
    if (event.target.id === "technologies") {
        // set transient state technologyId to selected tech package
        setTechnologyPackage(event.target.value)
    }
}

export const technologyOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    // create event listener
    document.addEventListener("change", handleTechnologyChange)

    let technologiesHTML = `<h2>Technology Packages</h2>
                                <select id="technologies">
                                <option value="0">Select technology package...</option>`

    const technologiesArray = technologies.map(
        (technology) => {
            return `<option value="${technology.id}">${technology.package}</option>`
        }
    )

    technologiesHTML += technologiesArray
    technologiesHTML += "</select>"

    return technologiesHTML
}