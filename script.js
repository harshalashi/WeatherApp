const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '273c475a67msh47f27fbcc4ef092p1d3427jsn9659a56131d5',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
  },
};

fetch(
  'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Badlapur',
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
