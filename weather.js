let button = document.querySelector('.button');
let inputValue = document.querySelector('.inputValue');
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');

button.addEventListener('click', function () {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=5b603eb02670ad354542c7bf52bfb491')
    .then(response => response.json())
    .then(data => {
      var nameValue = data['name'];
      var tempValue = data['main']['temp'];
      var descValue = data['weather']['0']['description'];

      name.innerHTML = nameValue;
      temp.innerHTML = tempValue;
      desc.innerHTML = descValue;
    })

        .catch(err => alert('Wrong City Name!'))
})