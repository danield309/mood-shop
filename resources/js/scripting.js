import data from './data.js'


const itemsContainer = document.getElementById('items')
// the length of our data determines how many times this loop goes around
for (let i=0; i<data.length; ++i) {
    // create a new div element and give it a class name
    let newDiv = document.createElement('span');
    newDiv.className = 'item'

    // create an image element
    let img = document.createElement('img');
    // this will change each time we go through the loop. Can you explain why?
    img.src = data[i].image
    img.width = 300
    img.height = 300
    newDiv.appendChild(img)

    let desc = document.createElement('P')
    desc.innerText =data[i].desc
    newDiv.appendChild(desc)
    let price = document.createElement('P')
    price.innerText = data[i].price
    let button = document.createElement('button')
    button.id = data[i].name
    newDiv.appendChild(price)

    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)

    itemsContainer.appendChild(newDiv)

    const cart = []

    // adds items
    function addItem(name, price) {
        for (let i = 0; i < cart.length; i += 1) {
            if (cart[i].name === name) {
                cart[i].qty += 1
                return
            }
        }

        const item = { name , price, qty: 1}
        cart.push(item)
    }
    // shows items
    function showItems() {
        const qty = getQty()
        console.log(`You have ${qty} items in your cart`)

        for (let i = 0; i < cart.length; i += 1) {
            console.log(`- ${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
        }

        console.log(`Total in cart: $${getTotal()}`)
    }
    // gets quantity
    function getQty() {
        let qty = 0
        for (let i = 0; i < cart.length; i +=1 ) {
            qty += cart[i].qty
        }
        return qty
    }
    // gets the total
    function getTotal() {
        let total = 0
        for (let i = 0; i < cart.length; i += 1) {
            total += cart[i].price * cart[i].qty
        }

        return total.toFixed(2)
    }

    addItem('Apple', 0.99)
    addItem('Orange', 1.29)
    addItem('Opinion', 0.02)
    addItem('Apple', 0.99)
    addItem('Frisbee', 9.92)
    addItem('Apple', 0.99)
    addItem('Orange', 1.29)

    showItems()
}
