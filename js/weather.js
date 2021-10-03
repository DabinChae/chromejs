function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8b37962ade0f269ffe0433a5c3ef11ef&units=metric`
    fetch(url).then(Response=>Response.json()).then(data=>{
        console.log(data.name, data.weather[0].main);
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText=data.weather[0].main;
        city.innerText = data.name;

    });
    console.log(lon);
}
function onGeoError(){
    alert("can't find you")
}
navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);

