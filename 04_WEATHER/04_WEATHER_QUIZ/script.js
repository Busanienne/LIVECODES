let now = new Date();
let header = document.querySelector('header');
header.innerHTML = header.innerHTML + ' - ' + now.getFullYear() + '년 ' + (now.getMonth() + 1) + '월 ' + now.getDate() + '일';


let weatherData = {
    'Seoul': { 'temperature': 16, 'description': '맑음', 'icon': 'sunny.webp', 'humidity': '55%', 'wind': '3 m/s' },
    'Busan': { 'temperature': 18, 'description': '구름 조금', 'icon': 'partly-cloudy.webp', 'humidity': '60%', 'wind': '4 m/s' },
    'Daejeon': { 'temperature': 15, 'description': '비', 'icon': 'rainy.webp', 'humidity': '75%', 'wind': '5 m/s' },
    'Daegu': { 'temperature': 17, 'description': '흐림', 'icon': 'cloudy.webp', 'humidity': '65%', 'wind': '2 m/s' },
    'Gwangju': { 'temperature': 19, 'description': '안개', 'icon': 'foggy.webp', 'humidity': '80%', 'wind': '1 m/s' },
    'Gangneung': { 'temperature': 14, 'description': '눈', 'icon': 'snowy.webp', 'humidity': '70%', 'wind': '6 m/s' },
    'Incheon': { 'temperature': 13, 'description': '바람', 'icon': 'windy.webp', 'humidity': '55%', 'wind': '7 m/s' },
    'Ulsan': { 'temperature': 20, 'description': '맑음', 'icon': 'sunny.webp', 'humidity': '60%', 'wind': '3 m/s' },
    'Jeju': { 'temperature': 22, 'description': '비', 'icon': 'rainy.webp', 'humidity': '85%', 'wind': '8 m/s' },
    'Suwon': { 'temperature': 21, 'description': '맑음', 'icon': 'sunny.webp', 'humidity': '50%', 'wind': '2 m/s' },
    'Changwon': { 'temperature': 23, 'description': '구름 조금', 'icon': 'partly-cloudy.webp', 'humidity': '65', 'wind': '3 m/s' },
    'Jeonju': { 'temperature': 19, 'description': '비', 'icon': 'rainy.webp', 'humidity': '80%', 'wind': '4 m/s' }

};

for (let city in weatherData) {
    let cityData = weatherData[city];
    let cityElement = document.querySelector('#' + city);

    cityElement.querySelector('.temperature').innerHTML = cityData.temperature + "°C";
    cityElement.querySelector('.description').innerHTML = cityData.description;
    cityElement.querySelector('.weather-icon').style.backgroundImage = "url('IMG/" + cityData.icon + "')";
    cityElement.querySelector('.humidity').innerHTML = "습도: " + cityData.humidity;
    cityElement.querySelector('.wind').innerHTML = "바람: " + cityData.wind;
}
