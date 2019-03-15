let bod = 'LOADING...'
document.getElementsByTagName('body')[0].innerHTML = bod

// API CALL
fetch('http://localhost:8000/api/books', {
  method: 'GET'
})
  .then(res => res.json())
  .then(json => setBooks(json))
  .catch(err => console.log(err))

function setBooks(json) {
  const elements = json.map(
    element =>
      `<h1>Title: ${element.title} Author: ${element.author.firstName} ${
        element.author.lastName
      }</h1>`
  )
  document.getElementsByTagName('body')[0].innerHTML = ''
  for (let i = 0; i < elements.length; i++) {
    document.getElementsByTagName('body')[0].innerHTML += `<div>${
      elements[i]
    }</div>`
  }
}
