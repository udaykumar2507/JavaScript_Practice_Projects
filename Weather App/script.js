 const weatherIcon=document.querySelector(".weather-icon")
        const searchbox=document.querySelector(".search input");
        const searchbutton=document.querySelector(".search button");
        const img=document.querySelector(".weather-icon");
        const apikey="2682b0ab57c3b7be4aedbff2ef0cc665";
        const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        async function checkweather(city){
            const response=await fetch(apiurl+city+`&appid=${apikey}`);
            if (response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }else{
            var data=await response.json();
            console.log(data);
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+'°c';
            document.querySelector(".wind").innerHTML=data.wind.speed+'km/h';
            document.querySelector(".humidity").innerHTML=data.main.humidity+'%';
            if (data.weather[0].main=='Clouds'){
            weatherIcon.src="./images/clouds.png";
        }else if (data.weather[0].main=='Drizzle'){
            weatherIcon.src="./images/drizzle.png";
        }else if (data.weather[0].main=='Mist'){
            weatherIcon.src="./images/mist.png";
        }else if (data.weather[0].main=='Rain'){
            weatherIcon.src="./images/rain.png";
        }else if (data.weather[0].main=='Snow'){
            weatherIcon.src="./images/snow.png";
        }else if (data.weather[0].main=='Clear'){
            weatherIcon.src="./images/clear.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
    }
        searchbutton.addEventListener('click',()=>{
            checkweather(searchbox.value);
        })
        
