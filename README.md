[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e346c9af012f48308019c58ea08983f1)](https://www.codacy.com/manual/zizohotot/frontend-challenge?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ziadalzarka/frontend-challenge&amp;utm_campaign=Badge_Grade)
[![Netlify Status](https://api.netlify.com/api/v1/badges/83897776-3c94-4daf-9169-dce296da2bc9/deploy-status)](https://app.netlify.com/sites/jolly-chandrasekhar-9f978b/deploys)

# Front-end Engineer Challenge

Welcome to PushBots interview process, here you'll be presented with a fairly simple challenge where you'll get to work with our stack and get a feel of how it is to work at PushBots.

## About PushBots

Push notifications are great in keeping users engaged and reminded with the app. PushBots was created to make adding notifications to your app dead easy and then provide you with tools to help you personalize and leverage your relationship with your users.

## Our stack

-   [Vue](https://vuejs.org/) 🚀
-   [Vuex](https://vuex.vuejs.org/) 🤓
-   [Vuetify](http://vuetifyjs.com/) (Material design UI library made for Vue) 🎨
-   [Nuxt](https://nuxtjs.org/) (Vue Framework that makes your life easier) 😎
-   [Vue-i18n](https://kazupon.github.io/vue-i18n/) (Multi-language support) ✨
-   Some goodies 🎁

## The challenge

You'll need to fork this repo and start implementing the features below based on it.
Please stick to the style rules and make sure your code is readable and pretty ✨

### Requirements

-   [ ] Implement a login form that consumes this endpoint through a POST request `https://pushbots-fend-challenge.herokuapp.com/login` with the following credentials – email: `frontend@ninja.com` and password: `12345` as JSON data, the response should look like: 

```js
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMmVkMjBkOWMwNmRmZDQ5ZTAwMDAwMCIsImlhdCI6MTU3NDI0MzI2NywiZXhwIjoxNTc0MjU0MDY3fQ.kcaHD6m2seyKo27LeDHI-WpBAHl-c4awSIY3mEg2vQE",
  "user": {
    "id": "602ed20d9c06dfd49e000000",
    "email": "frontend@ninja.com",
    "name": "Frontend Ninja",
    "avatar": "https://i.pravatar.cc/100",
    "plan": "premium",
    "totalApps": 100,
    "totalDevices": 3920
  }
}
```

-   [ ] Make sure to handle the errors and show them to the user.
-   [ ] Redirect the user to the main dashboard after login and make sure to display the user data you got from the login request.  
-   [ ] User should see a top app bar that shows those info name, avatar and plan.
-   [ ] The following endpoints are secured with JWT, to get access to the data you'll need to set the `Authorization` header in your requests to `Bearer {{token}}`, you'll replace `{{token}}` with the actual token you got from login request.
-   [ ] Store the Authorization token as a cookie or in local storage and use it re-authenticate the user instead of re-logging in. To authenticate a token you can use this endpoint `https://pushbots-fend-challenge.herokuapp.com/api/me` with a GET request and set the token in the `Authorization` header as said above. you'll get the user object as a response from this endpoint like so:

```js
{
  "id": "602ed20d9c06dfd49e000000",
  "email": "frontend@ninja.com",
  "name": "Frontend Ninja",
  "avatar": "https://i.pravatar.cc/100",
  "plan": "premium",
  "totalApps": 100,
  "totalDevices": 3920
}
```

-   [ ] User should see a list of Apps that you'll get via this endpoint GET `https://pushbots-fend-challenge.herokuapp.com/apps?take=5&skip=5&sortBy=name&direction=desc`. The response should include list of apps, each app should look like this: 

```js
{
      "id": "ca95da5f-21f1-487d-8971-c6b2a10a1e44",
      "title": "sincere late structure",
      "icon": "https://picsum.photos/50/50",
      "totalUsers": 5329,
      "platforms": {
        "ios": true,
        "android": true,
        "chrome": true,
        "firefox": true,
        "opera": true,
        "safari": true
      },
      "chartData": [
        {
          "label": "2019-11-13",
          "value": 249
        },
        {
          "label": "2019-11-14",
          "value": 351
        },
        {
          "label": "2019-11-15",
          "value": 973
        },
        {
          "label": "2019-11-16",
          "value": 180
        },
        {
          "label": "2019-11-17",
          "value": 666
        },
        {
          "label": "2019-11-18",
          "value": 845
        },
        {
          "label": "2019-11-19",
          "value": 455
        },
        {
          "label": "2019-11-20",
          "value": 717
        }
      ]
    },
```

-   [ ] User should be able to paginate this list via the provided endpoint.
-   [ ] Each app card should have a chart that shows engagement data for that app, found in the chart object in the previous response.
-   [ ] Each app should have some action buttons like the screen below but just make them dummy, only ui, not real actions.
-   [ ] Generally the dashboard design should look some what like the screen below.

### Notes

-   README file should have clear instructions of how to run your project and any special instructions.
-   Don't violate any of ESlint rules.
-   Make sure your code is formatted with Prettier.
-   Make sure you're using Vuex for state management.
-   Make sure you consume the provided endpoints and not any internal JSON files.
-   You can use [Insomnia App](https://insomnia.rest/) to test out requests to the endpoints and you'll find an Insomnia json file in the repo that has all the endpoints

### Screens

You can find them here [Imgur](https://imgur.com/a/QggfTA7)

### Assets

**These are not required but are provided in case you wanted to use them**

-   Font: [Roboto](https://fonts.google.com/specimen/Roboto)
-   Icons: [FontAwesome](https://fontawesome.com/icons) OR [Material Design Icons](https://materialdesignicons.com/)
-   Colors: `#009688` as a primary color and you can just use any other color you see fit.

### Nice to have

-   Great attention to accessibility and its rules following WCAG 2.1
-   Unit testing with Jest (Kudos if you integrate it in your pipeline with Netlify).
-   [Netlify](https://netlify.com/) integration for your project and add its badge to the README.
-   Code quality checks like [Codacy](https://www.codacy.com/) and add its badge to the README.

### What we're looking for

-   **Simple, clear, readable code** - How well structured it is? Clear separation of concerns? Can anyone just look at it and get the idea to what is being done? Does it follow any standards?
-   **Correctness** - Does the application do what it promises? Can we find bugs or trivial flaws?
-   **No errors in the console screen** 

### Questions & submissions

-   If you have any questions regarding this challenge, please reach out to us and we'll get back to you ASAP.
-   Please submit your code as a link to a public GitHub repository.
-   If you didn't meet all requirements listed above, don't worry about it and just submit what you have done so far.

### Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
