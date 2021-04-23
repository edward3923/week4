// document.children[0].children[1].children[0].children[1].innerHTML = `Movies to watch`

let pageTitleElement = document.querySelector(`.page-title`)
// console.log(pageTitleElement)

//modify title to movies to watch
pageTitleElement.innerHTML = `Movies to watch`

//find movie <li>s
let movieElements = document.querySelectorAll(`.movies-to-watch li`)
 console.log(movieElements)

// for (let i = 0; i < movieElements.length; i++) {
//     let movieElement = movieElements[i]
//     console.log(movieElement)
//     movieElement.innerHTML = `The Martian`
// }

let movieList = document.querySelector(`.movies-to-watch`)
console.log(movieList)
movieList.insertAdjacentHTML(`beforeend`, `
    <li>The Martian</li>
`
)