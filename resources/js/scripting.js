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

    const cart = [ ]

    function addItem(name, price) {
        const item = {name: name, price: price, qty: 1}
        cart.push(item)
    }

    function showItems() {
        console.log(`You have ${cart.length} items in your cart`);
    }
    addItem('Apple', 0.99)
    addItem('Orange', 1.29)
    addItem('Opinion', 0.02)
    addItem('Frisbee', 9.92)

    showItems()
}
