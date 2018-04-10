$(function() {  

    $("#Filter").click(function () {   





        let topRated = getTopRated(copyMovies);
        showTopRated(topRated);

        let filterYear = document.getElementById("YearSelect").value;

        displayMovies(copyMovies, filterYear);

    });
});

let topMovieOutput = document.getElementById("top_movie_output");

let copyMovies = movies;

function getTopRated(array){
    let top_movie = array[0];
    for(let i = 0; i<array.length; i++) {
        if(top_movie.popularity > array[i].popularity){
            top_movie = array[i];
        }
    }
    return top_movie;
}

function showTopRated(top_movie) {
    topMovieOutput.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2${top_movie.poster_path}" alt="movie poster">
    <h3>${top_movie.title}<h3>
    <p class="release_date">${top_movie.release_date}</p>
    <p class="overview">${top_movie.overview}</p>`;
}

function displayMovies(copyMovies, filterYear) {
    
    let filteredList = copyMovies.filter(movie => movie.release_date.slice(0, 4) == filterYear);

    if(filterYear != "") {

    } else {
        filteredList = copyMovies;
    }

    let h = "";

    for(let i = 0; i < filteredList.length; i++){
        let movie = filteredList[i];
        h += `
        <div class="row inserted-row">
        <div class=col-6>
        <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}" class="thumbnail" alt="movie poster">
        </div>
        <div class=col-6>
        <h3>${movie.title}<h3>
        <p class="overview">${movie.overview}</p>
        </div>
        </div>`;
    }

    document.getElementById("movies_by_year").innerHTML = h;
}