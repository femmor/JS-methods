const menuButtons = document.getElementById('menuButtons')


const menu = [
    {name: "pancakes", category: "breakfast"},
    {name: "burger", category: "lunch"},
    {name: "steak", category: "dinner"},
    {name: "bacon", category: "breakfast"},
    {name: "eggs", category: "breakfast"},
    {name: "pasta", category: "dinner"},
]

// Map to get all instances
// new Set - narrow down
// ["all", ...] turn it back to array

const categories = ["All categories", ...new Set(menu.map(item => item.category))]
categories.map(item => {
    menuButtons.innerHTML += `<button class="bg-yellow-100 py-1 px-3">${item}</button>`
})
const names = menu.map(item => item.name)

