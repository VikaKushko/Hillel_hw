// const apiUrl =
//     "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";
//
// const xhr = new XMLHttpRequest();
// xhr.open("GET", apiUrl, true);
//
// xhr.onload = function () {
//     if (xhr.status === 200) {
//         const response = JSON.parse(xhr.responseText);
//         const temperature = response.main.temp;
//         const pressure = response.main.pressure;
//         const description = response.weather[0].description;
//         const humidity = response.main.humidity;
//         const windSpeed = response.wind.speed;
//         const windDirection = response.wind.deg;
//         const iconCode = response.weather[0].icon;
//
//         const weather =
//             "<p>Температура: " +
//             temperature +
//             "°C</p>" +
//             "<p>Тиск: " +
//             pressure +
//             " hPa</p>" +
//             "<p>Опис: " +
//             description +
//             "</p>" +
//             "<p>Вологість: " +
//             humidity +
//             "%</p>" +
//             "<p>Швидкість вітру: " +
//             windSpeed +
//             " м/с</p>" +
//             "<p>Напрям вітру: " +
//             windDirection +
//             "°</p>" +
//             '<img src="http://openweathermap.org/img/w/' +
//             iconCode +
//             '.png" alt="Погодний значок">';
//
//         document.getElementById("weather").innerHTML = weather;
//     }
// };
// xhr.send();
class Weather {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async fetchWeather() {
    try {
      const response = await fetch(this.apiUrl);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  async renderWeather() {
    const weatherData = await this.fetchWeather();
    if (weatherData) {
      const { main, weather, wind } = weatherData;
      const temperature = main.temp;
      const pressure = main.pressure;
      const description = weather[0].description;
      const humidity = main.humidity;
      const windSpeed = wind.speed;
      const windDirection = wind.deg;
      const iconCode = weather[0].icon;

      const weatherRender =
        `<p>Температура: ${temperature}°C</p>` +
        `<p>Тиск: ${pressure} hPa</p>` +
        `<p>Опис: ${description}</p>` +
        `<p>Вологість: ${humidity}%</p>` +
        `<p>Швидкість вітру: ${windSpeed} м/с</p>` +
        `<p>Напрям вітру: ${windDirection}°</p>` +
        `<img src="http://openweathermap.org/img/w/${iconCode}.png" alt="Погодний значок">`;

      document.getElementById("weather").innerHTML = weatherRender;
    }
  }
}
const apiUrl =
  "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";
const weather = new Weather(apiUrl);
weather.renderWeather();
