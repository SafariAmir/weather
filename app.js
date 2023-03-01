

let main = document.querySelector("main");
let search = document.querySelector(".search-box");
let city = document.querySelector(".city");
let date = document.querySelector(".date");
let temp = document.querySelector(".temp");
let info = document.querySelector(".info");
let weather = document.querySelector(".weather");
let low = document.querySelector(".hi-low");


let apiData = {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=' , 
    key: '5481f47fe4bfb55355a75cf80c747765'
}


function fetchData () {
    let countryValue = search.value;

    fetch(`${apiData.url}${countryValue}&&appid=${apiData.key}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            showData(data)
        })
}

function showData (data) {
    city.innerHTML = `${data.name}, ${data.sys.country}`

    date.innerHTML = showDate();

    temp.innerHTML = `${Math.floor(data.main.temp - 273.15)}c°`
    weather.innerHTML = `${data.weather[0].main}`
    low.innerHTML = `${Math.floor(data.main.temp_min - 273.15)}c° / ${Math.floor(data.main.temp_max - 273.15)}c°`

}

function showDate(){
    let months = ["January","February","March","April","May","June","July","August","septamber","October",
    "November","Decamber"];
    
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    let now = new Date()

    let day = days[now.getDay()]
    let month = months[now.getMonth()]
    let year = now.getFullYear()
    let date = now.getDate()

    return `${day} ${date} ${month} ${year}`

}

search.addEventListener("keypress" , (event)=>{
    if(event.keyCode === 13){
        fetchData()
    }
})


