export const technologyOptions = async () => {
    const response = await fetch("http://localhost:8088/technology")
    const technologies = await response.json()

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