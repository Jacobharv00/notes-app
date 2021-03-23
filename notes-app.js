let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4()
    const timestamp = moment().valueOf()
    
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
   filters.sortBy = e.target.value
   renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})



































// Working with moment() 3rd party libary
// const birthday = moment()
// birthday.add(8, 'months').add(2, 'days').subtract(31, 'years') to subtract to Nov 19, 1990 from todays date
// to set to Nov 19, 1990
// Months are 0 indexed
// birthday.year(1990).month(10).date(19) 
// console.log(birthday.format('MMM D, YYYY'))

//const now = moment()
//now.subtract(1, 'week').subtract(20, 'days')
//console.log(now.format('MMMM Do, YYYY'))
//console.log(now.fromNow())
//const nowTimestamp = now.valueOf()
//console.log(moment(nowTimestamp).toString())

// November 3rd, 2003 use format() to print this
// now.minute(1) sets the minute to one
// console.log(now.minute()) returns the real time minute

























//const now = new Date()
//const timestamp = now.getTime()

//const myDate = new Date(timestamp)
//console.log(myDate.getFullYear())

//const dateOne = new Date('March 10th 2020 04:20:00')
//const dateTwo = new Date()
//const dateOneTimestamp = dateOne.getTime()
//const dateTwoTimestamp = dateTwo.getTime()

//if (dateOneTimestamp < dateTwoTimestamp) {
  //  console.log(dateOne.toString())
//} else if (dateTwoTimestamp < dateOneTimestamp) {
 //   console.log(dateTwo.toString())
//}




// Unix Epoch - January 1st 1970 00:00:00
// console.log(now.toString()) returns in a string form from the Date() call
// console.log(now.getTime()) gets a number in miliseconds from unix epoch to today


// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

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