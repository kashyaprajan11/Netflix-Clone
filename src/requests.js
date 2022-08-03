const API_KEY = // Your API Key goes here


export default {
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTrending: `/trending/movie/day?api_key=${API_KEY}`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
