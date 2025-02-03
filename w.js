
    const apiKey = "7447af1b24868d2e5d19330181546ea0";  // Replace with your OpenWeatherMap API key
    const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchbox=document.querySelector(".search input");
    const searchbtn=document.querySelector(".search button");
 
 
    async function checkweather(city) {
const response =await fetch(apiUrl + city+ `&appid=${apiKey}`);
/*
if(response.status==404)
{
    document.querySelector(".error").Style.display="block";
    document.querySelector(".weather").Style.display="error";

} */


var data=await response.json();
console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp + "&deg;c";

    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";

    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";

    }
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})
    
//checkweather();
    