const key="1b7cf18b6164af94373d3e9878440394"

const request={
    popular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    TopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    Trending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    Horror:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1`,
    Upcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    searching:`https://api.themoviedb.org/3/discover/movie?api_key=${key}`
};
export default request


//"https://api.themoviedb.org/3/movie/popular?api_key=1b7cf18b6164af94373d3e9878440394&language=en-US&page=1"
//popular:"https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=1b7cf18b6164af94373d3e9878440394"
//netflix image src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"