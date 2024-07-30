'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  //   console.log(data);
  // if array is passed then only 1st element is taken
  if (Array.isArray(data)) {
    data = data[0];
  }
  const html = `
              <article class="country ${className}">
                <img class="country__img" src="${data.flags.svg}" />
                <div class="country__data">
                  <h3 class="country__name">${data.name.common}</h3>
                  <h4 class="country__region">${data.region}</h4>
                  <p class="country__row"><span>👫</span>${(
                    +data.population / 1000000
                  ).toFixed(1)} million</p>
                  <p class="country__row"><span>🗣️</span>${
                    Object.values(data.languages)[0]
                  }</p>
                  <p class="country__row"><span>💰</span>${
                    Object.values(data.currencies)[0].name
                  }</p>
                </div>
              </article>
          `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};
///////////////////////////////////////
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
        <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} million</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
            <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('nepal')
// getCountryData('portugal')
// getCountryData('usa')
// getCountryData('china')
getCountryData('uk')


//////////////////////////////////////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
          <article class="country ${className}">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
              <h3 class="country__name">${data.name.common}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)} million</p>
              <p class="country__row"><span>🗣️</span>${
                Object.values(data.languages)[0]
              }</p>
              <p class="country__row"><span>💰</span>${
                Object.values(data.currencies)[0].name
              }</p>
            </div>
          </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {

    // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;
    

    if(!neighbour) return;

    // AJAX call country 2
  const request2 = new XMLHttpRequest();
//   searching with code
  request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
  request2.send();

  request2.addEventListener('load', function() {
    const [data2] = JSON.parse(this.responseText);
    
    renderCountry(data2, 'neighbour');
  })
  });
};

getCountryAndNeighbour('usa');

setTimeout(() => {
    console.log("1 second passed");
    setTimeout(() => {
        console.log("2 second passed");
        setTimeout(() => {
            console.log("3 second passed");
            setTimeout(() => {
                console.log("4 second passed");
            }, 1000)
        }, 1000)
    }, 1000)
    
}, 1000)


/////////////////////////////////////////////////////

// Promises and Fetch API

// const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

// const request = fetch('https://restcountries.com/v3.1/name/nepal');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       // to read body
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const request = fetch('https://restcountries.com/v3.1/name/nepal');
// console.log(request);

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
    //   , err => alert(err)
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }

//       return response.json();
//       //   ,err => alert(err)
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       //   Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json();
//       //   , err => alert(err)
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     // catching all error globally
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     // always happens whatever the result is
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) {
        throw new Error('No neighbour found!');
      }

      //   Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    // catching all error globally
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    // always happens whatever the result is
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

getCountryData('australia');



/////////////////////////////////////////////////

console.log('Test Start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('resolved promise 1').then(res => console.log(res)

)
Promise.resolve('resolved promise 2').then(res => {
  for(let i = 0; i<1000; i++){
    console.log(res);
  }
})
console.log('test end');


//////////////////////////////////////////////////

// Building a simple promise

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening ⌚');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => console.log('4 second passed'));

// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//       console.log("2 second passed");
//       setTimeout(() => {
//           console.log("3 second passed");
//           setTimeout(() => {
//               console.log("4 second passed");
//           }, 1000)
//       }, 1000)
//   }, 1000)

// }, 1000)

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('abc')).catch(x => console.error(x));


////////////////////////////////////////////////
// Promisifying the geo-locaiton api

navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.log(err)
);

console.log('Getting position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(resolve, reject)
    // position => console.log(position),
    // err => console.error(err)
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      // console.log(res);
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })

    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`Country not found ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      console.log(data),
      renderCountry(data[0])})
    .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);


////////////////////////////////////////////////
// Consuming Promises

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();

    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    // console.log(dataGeo);

    // Country data
    // fetch(`https://restcountries.com/v3.1/name/${country}`).then(res => console.log(res))

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );

    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    // console.log(data);
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong 💥${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

console.log('1. Will get location');

// this will return promise
// const city = whereAmI();
// console.log(city);

// return the fulfilled value
// whereAmI()
//   .then(city => console.log(`2. ${city}`))
//   .catch(err => console.log(`2. ${err.message} 💥`))
//   .finally(() => console.log('2. Finished getting location'))

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2. ${city}`);
  } catch (err) {
    console.log(`2. ${err.message} 💥`);
  }
  console.log('2. Finished getting location');
})();
// try{
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch(err) {
//   alert(err.message)
// }


//////////////////////////////////////////////////////////////////
// Running Promises in Parallel

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    
    // console.log(data1.capital, data2.capital, data3.capital);

    const data = Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log((await data).map(d => d[0].capital));

  } catch (err) {
    console.error(err);
  }
};

get3Countries('nepal', 'portugal', 'india');
*/

//////////////////////////////////////////////////////////////////
// Other Promise Combinators race, allSettled and any

// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('request took too long!'));
    }, sec);
  });
};

Promise.race([getJSON(`https://restcountries.com/v3.1/name/italy`), timeout(1)])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('sucess'),
  Promise.reject('sucess'),
  Promise.resolve('Another sucess'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('sucess'),
  Promise.reject('sucess'),
  Promise.resolve('Another sucess'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));


  // Promise.any 
  Promise.any([
    Promise.resolve('sucess'),
    Promise.reject('sucess'),
    Promise.resolve('Another sucess'),
  ])
    .then(res => console.log(res))
    .catch(err => console.error(err));