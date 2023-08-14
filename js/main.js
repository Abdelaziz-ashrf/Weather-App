let city = document.querySelector(".city");
let weather = document.querySelector(".weather");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let inputSearch = document.querySelector(".search input")
let searchButton = document.querySelector("button")
let apiKey = "fd919b22687b2479a6e75b5a78179ce0";
let sky =document.querySelector(".weather img") ;
let errorParagraph = document.querySelector('.error p')

searchButton.addEventListener("click", ()=>{
   
    async function checkWeather(citysearch){
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${citysearch}`;
    let response = await fetch(apiUrl + `&appid=${apiKey}`) 
    let data = await response.json();
    city.innerHTML = data.name;
    temp.innerHTML =  Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + '%' ;
    wind.innerHTML = data.wind.speed + 'Km/h';
    sky.src = `../images/${data.weather[0].main}.png`
    if(city.innerHTML == 'undefined'){

    }else {
        errorParagraph.style.cssText = `display: none;`
        weather.style.cssText = `display: block;`
    }
}
    checkWeather(inputSearch.value)
}
)





