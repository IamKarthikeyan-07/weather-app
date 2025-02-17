const apikey="e2c88a3f94f6cf21a68f708643cac51d";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".inputbox input");
const searchbtn=document.querySelector(".inputbox button");
const weathericon=document.querySelector(".weather-icon")

async function checkweather(city) {
    const response=await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{

    var data = await response.json();

    

    const sunrise = data.sys.sunrise * 1000;
const sunset = data.sys.sunset * 1000;
const currentTime = new Date().getTime();

if (currentTime >= sunrise && currentTime <= sunset) {
if (data.weather[0].main == "Clear") {
weathericon.src = "media/sun.png";
}
} else {
if (data.weather[0].main == "Clear") {
weathericon.src = "media/moon.png";
}
}
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";

    if(data.weather[0].main == "Clouds"){
        weathericon.src = "media/clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "media/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "media/drizzle.png"
    }
    else if(data.weather[0].main == "Snow"){
        weathericon.src = "media/snow.png"
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "media/mist.png"
    }
    else if (data.weather[0].main == "Moon"){
        weathericon.src = "media/moon.png"
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
 }
}

searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})




