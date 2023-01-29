const API_KEY = 'c0fbef07-139f-4b83-84bc-84c6445a2ea6';
const API_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';
const moviesEL = document.querySelector(".movies");
const API_SEARCH = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=';
console.log(moviesEL);

async function getMovies(url) {
    const resp = await fetch(url, {
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
    }});
    const respData = await resp.json();
    showMovies (respData);
}

function showMovies(data) {
    data.films.forEach (movie => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.id = movie.filmId;
        movieEl.innerHTML = `  
            <div class="movie__cover-inner">
                <img src="${movie.posterUrlPreview}" alt="${movie.nameRu}"/>
            </div>
            <div class="movie__info">
                <div class="movie_title">
                    ${movie.nameRu}
                </div>
                <div class="movie_category">
                    ${movie.genres.map(genre=> ` ${genre.genre}`)}
                </div>
                <div class="movie_average movie_average--${getAverage(movie.rating)}">
                    ${movie.rating}
                </div>
            </div>`;
        moviesEL.appendChild(movieEl);
        
    });
}

function getAverage(vote) {
    if (vote>=7) {
        return 'green';
    }
    else if (vote>5) {
        return 'orange';
    }


    else {
        return 'red';
    }
}

const form = document.querySelector(".form");
const search = document.querySelector('.header_search');

form.addEventListener ("submit", async function(event) {
    event.preventDefault();
    const api_search_url = `${API_SEARCH}${search.value}&page=1`;
    if (search.value) {
        moviesEL.innerHTML = '';
        initial(api_search_url);
    }
});