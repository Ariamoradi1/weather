let dataWeather = {

    tehran: {city : 'tehran', temp : 30, weather : 'Sunny', humidity : 23, speed : 32},
    esfahan: {city : 'esfahan', temp : 15, weather : 'rainy', humidity : 22, speed : 35},
    mashhad: {city : 'mashhad', temp : 13, weather : 'dust', humidity : 20, speed : 31},
    alborz: {city : 'karaj', temp : 27, weather : 'Sunny', humidity : 23, speed : 37},
    kermanshah: {city : 'kermanshah', temp : 16, weather : 'rainy', humidity : 28, speed : 36},
    tabriz: {city : 'tabriz', temp : 2, weather : 'Snowy', humidity : 23, speed : 40},
    kordestan: {city : 'kordestan', temp : 19, weather : 'Sunny', humidity : 25, speed : 34},
    shiraz: {city : 'shiraz', temp : 33, weather : 'Sunny', humidity : 21, speed : 30},
    ahvaz: {city : 'ahvaz', temp : 50, weather : 'Sunny', humidity : 20, speed : 25}
}
let $ = document
let iconSearch = $.querySelector('.fa-search')
let searchBox = $.querySelector('.searchBox')
let cityName = $.querySelector('.cityName')
let numberC = $.querySelector('.numberC')
let typeWeather = $.querySelector('.typeWeather')
let humidity = $.querySelector('.humidity')
let speedWind = $.querySelector('.speed')
let container = $.querySelector('.container')

iconSearch.addEventListener('click', function() {

let searchValue = searchBox.value
 let cityArray = dataWeather[searchValue]

 console.log(cityArray)

 if (cityArray) {
cityName.innerHTML = 'weather in ' + ' ' + cityArray.city
cityName.style.display = 'block'
numberC.innerHTML = cityArray.temp + ' ' + 'C°'
numberC.style.display = 'block'
typeWeather.innerHTML = cityArray.weather
typeWeather.style.display = 'block'
humidity.innerHTML = 'Humidity:' + ' ' + cityArray.humidity + '%'
humidity.style.display = 'block'
speedWind.innerHTML = 'wind speed:' + ' ' + cityArray.speed + 'km/h'
speedWind.style.display = 'block'
container.style.height = '400px'







 } else {

alert('please enter the name of your city correctly')

 }
})