const weatherAPIKey = "";
const weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric`

function weatherHandler(){

    navigator.geolocation.getCurrentPosition(function(position){
        
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let url = weatherAPIURL
        .replace("{lat}",latitude)
        .replace("{lon}",longitude)
        .replace("{API key}",weatherAPIKey);
        console.log(url)
        fetch(url)
        .then(response => response.json())
        .then(data => { 
            const condition = data.weather[0].description;
            const location = data.name;
            const temperature =  data.main.temp;

            let celsiusText = `The weather is ${condition} in ${location} and it's ${temperature.toFixed(1)}°C outside.`;
            let fahrText = `The weather is ${condition} in ${location} and it's ${celsiusToFahr(temperature).toFixed(1)}°F outside.`;
        
            // console.log(weatherText);
        
        
            document.querySelector('p#weather').innerHTML = celsiusText;
        
            /* addEventListener */
            document.querySelector(".weather-group").addEventListener("click",function(e){
                // celsius
                // fahr
                if (e.target.id == "celsius"){
                    // console.log("clicked the celsius button");
                    document.querySelector('p#weather').innerHTML = celsiusText;
                } else if (e.target.id == "fahr"){
                    // console.log("clicked the fahr button");
                    document.querySelector('p#weather').innerHTML = fahrText;
                }
                
            });
        });
    });

}
