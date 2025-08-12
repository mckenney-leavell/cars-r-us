export const wheelsOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

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