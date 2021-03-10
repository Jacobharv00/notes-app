const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
   console.log(e.target.value) 
})
























// # for id's
// . for classes

// -- Single --
// p
// #replace
// .item

// -- Multiple --
// p#order
// button.inventory
// h1#title.application
// h1.application#title




// DOM - Document Object Model

//Query and remove
//const p = document.querySelector('p')
//p.remove()

//Query all and remove
//const ps = document.querySelectorAll('p')

//ps.forEach(function (p) {
  //  p.textContent = '******'
    //console.log(p.textContent)
    //p.remove()
//})


// Add a new element
//const newParagraph = document.createElement('p')
//newParagraph.textContent = 'This is a new element from javaScript'
//document.querySelector('body').appendChild(newParagraph)


// CRUD = Create, Read, Update, Delete

//localStorage only supports strings!

// Create
// localStorage.setItem('location', 'Breckenridge')

// Read
// localStorage.getItem('location')

// Update = localStorage.setItem(you can just update the key and value in here)
// Delete = localStorage.removeItem('location') argument to be deleted
 
// Removes all data
// localStorage.clear()

// const user = {
//    name: 'Jacob',
//    age: 30
// }

// Using JSON.stringify We use JSON.stringify just before we write our object.
// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)

// Using JSON.parse We use JSON.parse just after we read it.
// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)
// console.log(`${user.name} is ${user.age}`)