let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  'san francisco': {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
}

//display date
function changeDate() {
  let now = new Date()
  let date = now.getDate()
  now.getMinutes()
  now.getHours()
  now.getDate()
  now.getDay()
  now.getMonth()
  now.getFullYear()
  let months = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ]
  let month = months[now.getMonth()]
  let hours = now.getHours()
  let minutes = now.getMinutes()
  let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
  let day = days[now.getDay()]
  let year = now.getFullYear()

  let todayDate = document.querySelector('#todayDate')
  todayDate.innerHTML = `${day}, ${month} ${date}, ${year} ${hours}:${minutes}`
}
changeDate()

//let city = prompt('Enter a City Name')
//city = city.trim().toLowerCase()
//if (weather[city] !== undefined) {
//let temperature = weather[city].temp
//let humidity = weather[city].humidity
//let celsiusTemperature = Math.round(temperature)
//let fahrenheitTemperature = Math.round((temperature * 9) / 5) + 32
//alert(
//`It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in Paris with a humidity of ${humidity}.`,
//)
//} else {
//alert(
//`Sorry, we don't know the weather for this ${city}, try going to 'https://www.google.com/search?q=weather+${city}'.`,
//)
//}

//API
let axiosUrl = 'https://jsonplaceholder.typicode.com/comments/'
let apiKey = 'dff5c692192605ee5ed7f95b423ae857'
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=chicago&units=imperial&appid=dff5c692192605ee5ed7f95b423ae857`

function displayWeather(response) {
  let temperature = Math.round(response.data.main.temp)
  let h1 = document.querySelector('h1')
  h1.innerHTML = `${temperature}°F`
}
axios.get(apiUrl).then(displayWeather)
//searching for a city

let searchCity = document.querySelector('#search-form')
searchCity.addEventListener('submit', function search(event) {
  event.preventDefault()
  let searchInput = document.querySelector('#search-text-input').value
  let cityName = document.querySelector('#cityName')
  cityName.innerHTML = searchInput
  let newApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=imperial&appid=dff5c692192605ee5ed7f95b423ae857`

  function displayNewWeather(response) {
    let newTemperature = Math.round(response.data.main.temp)
    console.log(searchInput)
    let h1 = document.querySelector('h1')
    h1.innerHTML = `${newTemperature}°F`
  }
  axios.get(newApiUrl).then(displayNewWeather)
})
