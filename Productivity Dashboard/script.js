const apiKey = "YOUR_OPENWEATHER_API_KEY";
const city = "New York";
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("weather-info").textContent = `${data.weather[0].description}, ${data.main.temp}°C`;
    })
    .catch(() => document.getElementById("weather-info").textContent = "Error fetching weather data");
function addTask() {
    const input = document.getElementById("todo-input");
    if (input.value.trim()) {
        const li = document.createElement("li");
        li.textContent = input.value;
        document.getElementById("todo-list").appendChild(li);
        input.value = "";
    }
}
document.getElementById("add-task").addEventListener("click", addTask);
document.getElementById("todo-input").addEventListener("keypress", e => {
    if (e.key === "Enter") addTask();
});
document.getElementById("clear-tasks").addEventListener("click", () => {
    document.getElementById("todo-list").innerHTML = "";
});