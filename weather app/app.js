const apiurl = "https://api.weatherapi.com/v1/current.json?key=57efc8ed50e046eb94a74147231911&q="

const searchbtn = document.getElementById("img-search")
const searchbox = document.getElementById("input")

const weatherapp = async (nameloco) => {
    const fetchdata = await fetch(apiurl + nameloco)
    const data = await fetchdata.json()
    console.log(data)

    const temperature = document.getElementById("degree-celcius")
    const region = document.getElementById("region")
    const humidity = document.getElementById("humidity-per")
    const wind = document.getElementById("wind-per")



    temperature.innerText = Math.round(data.current.temp_c) + "°c"
    region.innerText = data.location.name
    humidity.innerText = Math.round(data.current.humidity) + "%"
    wind.innerText = Math.round(data.current.wind_kph) + "km/h"


    const weatherimg = document.getElementById("weather-img")
    weatherimg.src = data.current.condition.icon
  

}





searchbtn.addEventListener("click", () => {
    weatherapp(searchbox.value)



})



