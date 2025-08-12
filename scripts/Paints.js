export const paintOptions = async () => {
    const response = await fetch("http://localhost:8088/paintColor")
    const paints = await response.json()

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