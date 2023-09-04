

 let city = document.getElementById("input")
 let about = document.getElementById("about")
 let clickButton = document.getElementById("searchbar")
 let peru = document.getElementById("one")
 let temp = document.getElementById("two")
 let hm = document.getElementById("image")

const getWeather = (getCity) => {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${getCity}`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '01d7612bcemsh003b3bc2f694316p1b5bf2jsna14e71c0f8a2',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
      fetch(url,options)
      .then(resonse => resonse.json())
      .then(json => {
           let convert = 1.6093440006147 
           let cityName = json.location.name
           let humidity = json.current.humidity
           let tempCelsius = json.current.temp_c
           let windspeed = Math.round(json.current.wind_mph * convert)
           let userCity = city.value

           if(humidity >= 60){
           hm.innerHTML = `<img src = "./rainy image - Copy.png"/>`
          }
           else{
            hm.innerHTML = `<img src = "./sunny image.jpeg"/>`
           }

           temp.innerText = `${tempCelsius} c`
        
           
           peru.innerText = `${cityName}`
           
           about.classList.add("style")

           about.innerHTML = `<p> 
                                   <li> Humidity : ${humidity}%</li> <br/>
                               
                                   <li> Wind Speed : ${windspeed}Km/hr</li></p>`
         //  console.log(json)
        })
}

 clickButton.onclick = () => {
    getWeather(city.value);
 }


 