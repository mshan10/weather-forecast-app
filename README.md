# weather-forecast-app
A web app that provides the weather forecast for a city every three hours.
Temperature is in Fahrenheit.

// APP CREATION
This app is made as a single page app with two views, a home page with a search input and a forecast page with different forecast options.
For these two views there are two controllers as well as a service that defines the default city. 
Styling uses bootstrap 3.2

// HOW TO USE
The app is defaulted to search for the forecast of 'South Bend,US'
To find the forecast for a specific city, type in the city and the country code in the search box.
Click 'Get Forecast' to search the city. The next page will show the three hour forecast for the specified city.
To look at a 9-hour or 15-hour forecast, click the corresponding buttons above the forecast temperature.
There is a 'home' button at the top right of the screen to take the user back to the search page

// ERRORS
The weather forecast service only takess inputs of 'city,country', therefore if there are multiple cities of the same name within a country
the data may not correspond to the desired city name. The forecast service usually takes the data for the more popular city if similar
cities have the same name.
