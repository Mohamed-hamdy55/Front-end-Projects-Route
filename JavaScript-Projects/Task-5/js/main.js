
const initApp = () => {
  "use strict";
  const defaultTimeZoneCity = Intl?.DateTimeFormat?.().resolvedOptions?.().timeZone.split("/")[1] || "Cairo";
  const baseUrl = "https://api.weatherapi.com/v1";

  // Fetch current weather data
  const getForecast = async (city = defaultTimeZoneCity) => {
    try{
      const response = await fetch(`${baseUrl}/forecast.json?key=&q=${city}&days=3&aqi=no&alerts=no`);
      if(!response.ok) throw new Error(`City "${city}" not found`);
      const data = await response.json();
      console.log(data);
      displayForecast(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Display weather data
  const displayForecast = (data) => {
    const forecastRow = document.getElementById("forecast");
    forecastRow.innerHTML = "";
    data.forecast.forecastday.forEach(day => {
      const col = document.createElement("div");
      const isToday = new Date().toISOString().split('T')[0] === day.date;
      const dayName = isToday ? "Today" : new Date(day.date).toLocaleDateString(undefined, { weekday: 'long' });
      col.className = "col-md-4 mb-3";
      col.innerHTML = `
          <div class="forecast-card ${isToday ? "today" : "week-day"} col-lg-4">
              <div class="inner">
                <div class="forecast-header" id="today">
                  <div class="day">${dayName}</div>
                  <div class=" date">${day.date}</div>
                </div>
                <div class="forecast-content" id="current">
                  <div class="location">${data.location.name}</div>
                  <div class="degree">
                      <div class="num">${day.day.avgtemp_c}<sup>o</sup>C</div>
                    
                      <div class="forecast-icon">
                        <img src="https://cdn.weatherapi.com/weather/64x64/day/116.png" alt="" width="90">
                      </div>	
                  
                  </div>
                  <div class="condition">${day.day.condition.text}</div>
                  ${isToday ? `
                  <span><img src="images/icon-umberella.png" alt=""> ${day.day.daily_chance_of_rain}%</span>
                  <span><img src="images/icon-wind.png" alt=""> ${day.day.maxwind_kph}km/h</span>
                  <span><img src="images/icon-compass.png" alt=""> ${day.day.wind_dir}</span>
                  ` : ''}
                </div>
              </div>
            </div>`;
      forecastRow.appendChild(col);
    });
  };

  getForecast();

  // Search functionality
  const searchForm = document.getElementById("search-form");
  const cityInput = document.getElementById("city");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
      getForecast(city);
    }
  });

};

document.addEventListener("DOMContentLoaded", initApp);

  