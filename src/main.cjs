var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
  'headers': {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGNlM2UzOWRmZDI3OGIyNmMxODZlZGZmMDZmNDVkNiIsInN1YiI6IjY1NTM2NDcyZDRmZTA0MDExYjkwODczNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.45uFAEoUwBtGVG9pKtfDLBL3G-DmmRVO8t-_WaFMuJ8'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
