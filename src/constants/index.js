export const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
export const apiKey = 'fe4dd3c8ad107d2cb130444db84d801a'
export const iconUrl = 'http://openweathermap.org/img/w/'

export const citiesConfig = [
  {
    name: 'London',
    lat: 51.509865,
    lon: -0.118092,
  },
  {
    name: 'Warsaw',
    lat:  52.237049,
    lon: 21.017532,
  },
  {
    name: 'Berlin',
    lat:  52.520008,
    lon: 13.404954,
  },
  {
    name: 'Paris',
    lat:  48.864716,
    lon:  2.349014,
  },
  {
    name: 'New York',
    lat:  40.730610,
    lon:  -73.935242,
  },
  {
    name: 'Minsk',
    lat:  53.893009,
    lon:  27.567444,
  },
]

export const cityNames = citiesConfig
  .map(({ name }) => name)
  .sort()