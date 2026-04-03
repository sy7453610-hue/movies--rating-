const apiKey = "f9846299"; // 🔴 replace with your API key

async function searchMovie() {
    const query = document.getElementById("searchInput").value;

    if (query === "") {
        alert("Please enter a movie name");
        return;
    }

    const url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    displayMovies(data.Search);
}

function displayMovies(movies) {
    const container = document.getElementById("movieContainer");
    container.innerHTML = "";

    if (!movies) {
        container.innerHTML = "<p>No movies found</p>";
        return;
    }

    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <img src="${movie.Poster}" alt="Poster">
            <h3>${movie.Title}</h3>
            <p>Year: ${movie.Year}</p>
        `;

        container.appendChild(movieCard);
    });
}