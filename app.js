const globalSearch = document.querySelector('.global-search')
const globalInput = document.querySelector('.global-input')
const selectRegion = document.querySelector('#select-region')

movies.forEach((movie) => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.setAttribute('id', `${movie.title}`)
    div.setAttribute('data-set', `${movie.categories[0]}`)
    div.setAttribute('style', 'width: 17rem;')
    div.innerHTML = `
        <img src=${movie.smallPoster} class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
        <p class="card-text">${movie.summary.substr(0, 50)}</p>
        <div class="new">
        <img class="new-img" src="star-icon.svg" alt="" width="40" height="40">
        <h4 class="btn-a">${movie.imdbRating}</h4>
        </div>
        <h5 class="year">Year ${movie.year}</h5>    
        <a href="#" class="btn btn-primary">ReadMore</a>
        <h6 class="card-title">Trailer</h6>
        <a href=${movie.trailer} class="link-a">${movie.trailer}</a>
        </div>
`
    document.querySelector(".movies-div").appendChild(div)

})

globalSearch.addEventListener('input', (e) => {
    e.preventDefault()
    const moviesDiv = document.querySelector('.movies-div').childNodes

    moviesDiv.forEach((div) => {
        const check = div.getAttribute('id').toLowerCase().includes(globalInput.value.toLowerCase())

        if (check) {
            div.style.display = 'block'
        } else {
            div.style.display = 'none'
        }
    })
})

selectRegion.addEventListener('change', () => {
    const moviesDiv = document.querySelector('.movies-div').childNodes

    moviesDiv.forEach((div) => {

        const check = div.getAttribute('data-set').toLowerCase().includes(selectRegion.value.toLowerCase())

        if (check) {
            div.style.display = 'block'
        } else {
            div.style.display = 'none'
        }

        if (selectRegion.value == 'filter-by-categories') {
            div.style.display = 'block'
        }
    })
})