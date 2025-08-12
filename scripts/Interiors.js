export const interiorsOptions = async () => {
    const response = await fetch("http://localhost:8088/interior")
    const interiors = await response.json()

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