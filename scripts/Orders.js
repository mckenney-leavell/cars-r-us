export const orderSelections = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=paintColor&_expand=interior&_expand=technology&_expand=wheel")
    const orders = await response.json()

    let ordersHTML = `<h2>Orders</h2>`

    ordersHTML += orders.map( (order) => {
        const orderPrice = order.paintColor.price + order.interior.price + order.technology.price + order.wheel.price
        const formattedPrice = orderPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})
        return `<div>Order #${order.id} costs ${formattedPrice}</div>`
    }
    ).join("")

    return ordersHTML
}
