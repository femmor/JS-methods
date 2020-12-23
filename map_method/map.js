const mapObjects = document.getElementById('mapObjects')

const people = [
    {
        name: "Bob",
        age: 30,
        gender: "male",
        position: "Developer"
    },
    {
        name: "Jane",
        age: 32,
        gender: "female",
        position: "Designer"
    },
    {
        name: "Jack",
        age: 38,
        gender: "male",
        position: "Project Manage"
    },
    {
        name: "Brad",
        age: 35,
        gender: "male",
        position: "Manager"
    },
    {
        name: "Lorri",
        age: 40,
        gender: "female",
        position: "CEO"
    }
]

people.map(person => {
    mapObjects.innerHTML += `<li>${person.name}</li>`
})
