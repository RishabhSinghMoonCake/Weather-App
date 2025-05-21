class Weather
{
  #apiKey;
  #apiUrl;
  city;
  constructor(cityName)
  {
    this.apiKey='ba42de9455a7f0e343f1d5b421ccd517';
    this.apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
    this.city = cityName;
  }

  Round(inp)
  {
    return Math.round(inp);
  }

  async checkWeather() {
    const response = await fetch(this.apiUrl + `&appid=${this.apiKey}` + `&q=${this.city}`);
    const data = await response.json();
    console.log(data);
    this.displayProperties(data);
  }

  displayProperties(data)
  {
    document.querySelector('.js-temp').innerHTML = `${this.Round(data.main.temp)}&deg;C`;
    document.querySelector('.js-city-name').innerHTML = `${data.name}`;
    document.querySelector('.js-humidity-value').innerHTML=`${data.main.humidity}%`;
    document.querySelector('.js-wind-speed').innerHTML = `${data.wind.speed}km/hr`;
  }
}

const weatherIns = new Weather('lucknow');
weatherIns.checkWeather();