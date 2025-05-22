class Weather
{
  #apiKey;
  #apiUrl;
  constructor()
  {
    this.apiKey='ba42de9455a7f0e343f1d5b421ccd517';
    this.apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
  }

  Round(inp)
  {
    return Math.round(inp);
  }

  async checkWeather(cityName) {
    const response = await fetch(this.apiUrl + `&appid=${this.apiKey}` + `&q=${cityName}`);
    const data = await response.json();
    console.log(data);
    this.displayProperties(data);
  }

  displayProperties(data)
  {
    const weatherImg = document.querySelector('.js-weather-img');
    const weather = data.weather[0].main.toLowerCase();
    
    weatherImg.src = `images/${weather}.png`; 




    document.querySelector('.js-temp').innerHTML = `${this.Round(data.main.temp)}&deg;C`;
    document.querySelector('.js-city-name').innerHTML = `${data.name}`;
    document.querySelector('.js-humidity-value').innerHTML=`${data.main.humidity}%`;
    document.querySelector('.js-wind-speed').innerHTML = `${data.wind.speed}km/hr`;
  }
}





function main()
{
  const searchButtonEle = document.querySelector('.js-search-button');
  const searchBarELe = document.querySelector('.js-search-bar');
  
  const weatherIns = new Weather();
  searchButtonEle.addEventListener('click', ()=>{
    let searchedCityName = searchBarELe.value;
    console.log(searchedCityName);
    weatherIns.checkWeather(searchedCityName);
  });

  searchBarELe.addEventListener('keydown', (event)=>{
    if(event.key === 'Enter')
    {
      let searchedCityName = searchBarELe.value;
      console.log(searchedCityName);
      weatherIns.checkWeather(searchedCityName);
    }
  });
}

main();