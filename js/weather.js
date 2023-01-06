function onGeoOk(position) {
  const getLocation = position.coords;
  const weatherLoc = document.getElementById('weathericon');
  const weatherdetailicon = document.getElementById('weatherdetailicon');
  const weatherdata = document.getElementById('weatherdata');

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${getLocation.latitude}&lon=${getLocation.longitude}&appid=&units=metric
  `)
    .then((response) =>
      response.json().then((data) => {
        switch (data.weather[0].main) {
          case 'Mist':
          case 'Rain':
            iconHeadClass = 'fas';
            iconClass = 'fa-cloud-rain';
            break;
          case 'Clear':
          case 'Sunny':
            iconHeadClass = 'far';
            iconClass = 'fa-sun';
            break;
          case 'Clouds':
            iconHeadClass = 'fas';
            iconClass = 'fa-cloud';
            break;
          case 'Snowy':
            iconHeadClass = 'far';
            iconClass = 'fa-snowflake';
            break;
          default:
            iconHeadClass = 'far';
            iconClass = 'fa-snowflake';
            break;
        }
        weatherLoc.setAttributeNS(null, 'class', '');
        weatherLoc.classList.add(iconHeadClass);
        weatherLoc.classList.add(iconClass);
        weatherLoc.style = 'font-size:30px';

        weatherdetailicon.classList.add(iconHeadClass);
        weatherdetailicon.classList.add(iconClass);
        weatherdata.innerText = ` ${data.main.temp} \u{2103} - ${data.name}`;

        //   console.log(data);
      })
    )
    .catch((error) => {
      weatherLoc.setAttributeNS(null, 'class', '');
      weatherLoc.classList.add('fas');
      weatherLoc.classList.add('fa-cloud');
      weatherLoc.style = 'font-size:30px';

      weatherdetailicon.classList.add('fas');
      weatherdetailicon.classList.add('fa-cloud');
      weatherdata.innerText = ` No Data \u{2103} - South Korea`;
    });
}

function onGeoError(error) {
  console.log(error.code, error.message);
}
const localGeo = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
