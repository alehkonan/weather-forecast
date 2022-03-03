# Application for showing hourly forecast for today

## Project description

- [open weather map API](https://openweathermap.org/) is used as source of information
- user can select different cities from different countries with the help of dropdown select
- after city changing the weather is shown in the table only for left hours till 23 o`clock
- as a UI library I used bootstrap as a simple and well looking design system
- forecast is stored in redux store as well as forecast cache, in case of select the city that is already in the cache date is gotten from there

## Installing process

1. Install application dependencies:

```
npm i
```

2. Rename .env.example to .env.local . We are using .env file to provide necessary environment variables.
3. Run the app in the development mode:

```
npm start
```
