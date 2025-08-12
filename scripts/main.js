import { paintOptions } from "./Paints.js"
import { technologyOptions } from "./Technologies.js"
import { interiorsOptions } from "./Interiors.js"
import { wheelsOptions } from "./Wheels.js"
import { createButton } from "./SubmitButton.js"
import { orderSelections } from "./Orders.js"

const container = document.querySelector("#container")

const render = async() => {
    const paintsHTML = await paintOptions()
    const technologiesHTML = await technologyOptions()
    const interiorsHTML = await interiorsOptions()
    const wheelsHTML = await wheelsOptions()
    const buttonHTML = createButton()
    const orderHTML = await orderSelections()

    const composedHTML = `
        <h1>Cars-R-Us</h1>
        
        <article class="options">
            <section class="choices-paints">
            ${paintsHTML}
            </section>
            <section class="choices-technologies">
            ${technologiesHTML}
            </section>
            <section class="choices-interiors">
            ${interiorsHTML}
            </section>
            <section class="choices-wheels">
            ${wheelsHTML}
            </section>
        </article>

        <article class="selection">
        ${buttonHTML}
        </article>

        <article class="customSelection">
        ${orderHTML}
        </article>
    `
    container.innerHTML = composedHTML
}

document.addEventListener("newSubmissionCreated", render)
document.addEventListener("updatedAPI", render)

render()