# Application for showing hourly forecast for today

- [open weather map API](https://openweathermap.org/) is used as source of information
- user can select different cities from different countries with the help of dropdown select
- after city changing the weather is shown in the table only for left hours till 23 o`clock
- as a UI library I used bootstrap as a simple and well looking design system
- forecast is stored in redux store as well as forecast cache, in case of select the city that is already in the cache date is gotten from there
- there are 2 variables for API_URL and API_KEY, befor starting the project, please, rename .env.example to .env.local
