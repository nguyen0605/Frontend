const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },

    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },

    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};

let boxWeather = document.getElementById("box-weather");

function find() {
    let inputField = document.getElementById("inputText");
    let inputValue = inputField.value.trim().toLowerCase();

    let foundCity = Object.keys(weatherData).find(city => city.toLowerCase().includes(inputValue));

    if (foundCity) {
        let weather = weatherData[foundCity];

        let weatherBox = document.createElement("div");
        weatherBox.classList.add("weather-container");
        weatherBox.style.opacity = "0";

        weatherBox.innerHTML = `
            <h2>${foundCity}</h2>
            <div class="weather-container_item">
                <span style="font-size: 50px">${weather.icon}</span>
                <span style="font-size: 40px; font-weight: bold;"> ${weather.temperature}°C</span>
                <p>${weather.description}<br>Độ ẩm: ${weather.humidity}%<br>Tốc độ gió: ${weather.windSpeed} km/h</p>
            </div>
        `;

        boxWeather.appendChild(weatherBox);

        setTimeout(() => {
            weatherBox.style.transition = "opacity 0.5s ease-in-out";
            weatherBox.style.opacity = "1";
        }, 10);

    } else {
        alert("Không tìm thấy thành phố!");
    }
}
