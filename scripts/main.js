import { paintOptions } from "./Paints.js"
import { technologyOptions } from "./Technologies.js"
import { interiorsOptions } from "./Interiors.js"
import { wheelsOptions } from "./Wheels.js"

const container = document.querySelector("#container")

const render = async() => {
    const paintsHTML = await paintOptions()
    const technologiesHTML = await technologyOptions()
    const interiorsHTML = await interiorsOptions()
    const wheelsHTML = await wheelsOptions()

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

        </article>

        <article class="customSelection">

        </article>
    `
    container.innerHTML = composedHTML
}

render()