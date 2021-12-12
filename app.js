var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var cityName = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');


button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=fcfcd9544fa84989f441038e408beee5')
    .then( (response)=> response.json())
    .then(data =>{
        var nameValue = data['name'];
        var  tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        cityName.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })

.catch(err => alert("wrong city name!"))   
})


// let weater = {
//     apiKey: "fcfcd9544fa84989f441038e408beee5"
//     fecthWeather: function() {
//         fetch('api.openweathermap.org/data/2.5/weather?q=Denver&appid=fcfcd9544fa84989f441038e408beee5')
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//     },
// };