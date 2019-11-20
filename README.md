# Front-end Engineer Challenge

Welcome to PushBots interview process, here you'll be presented with a fairly simple challenge where you'll get to work with our stack and get a feel of how it is to work at PushBots.

## About PushBots
Push notifications are great in keeping users engaged and reminded with the app. PushBots was created to make adding notifications to your app dead easy and then provide you with tools to help you personalize and leverage your relationship with your users.

## Our stack
- [Vue](https://vuejs.org/) 🚀
- [Vuex](https://vuex.vuejs.org/) 🤓
- [Vuetify](http://vuetifyjs.com/) (Material design UI library made for Vue) 🎨
- [Nuxt](https://nuxtjs.org/) (Vue Framework that makes your life easier) 😎
- [Vue-i18n](https://kazupon.github.io/vue-i18n/) (Multi-language support) ✨
- Some goodies 🎁

## The challenge

You'll need to fork this repo and start implementing the features below based on it.
Please stick to the style rules and make sure your code is readable and pretty ✨

### Requirements

- [ ] Implement a login form that consumes this endpoint `https://pushbots-fend-challenge.herokuapp.com/login`.
- [ ] Make sure to handle the errors and show them to the user.
- [ ] Redirect the user to the main dashboard after login and make sure to display the user data you got from above.
- [ ] User should see a top app bar that shows his info like name, avatar, etc...
- [ ] User should see a list of Apps that you'll get via this endpoint `https://pushbots-fend-challenge.herokuapp.com/api/apps` but you'll need pagination params set before it works.
- [ ] User should be able to paginate this list via the provided endpoint.
- [ ] Each app card should have a chart that shows engagement data for that app.
- [ ] You can find the chart data in the App object.
- [ ] Each app should have some action buttons like the screen below but just make them dummy, only ui, not real actions.
- [ ] Generally the dashboard design should look some what like the screen below.
- Use email: `frontend@ninja.com` and password: `12345` for the login request.
- You can paginate via query params `https://pushbots-fend-challenge.herokuapp.com/apps?take=5&skip=5&sortBy=name&direction=desc`.
- README file should have clear instructions of how to run your project and any special instructions.
- Don't violate any of ESlint rules.
- Make sure your code is formatted with Prettier.
- Make sure you're using Vuex for state management.
- Make sure you consume the provided endpoints and not any internal JSON files.
- You can use [Insomnia App](https://insomnia.rest/) to test out requests to the endpoints and you'll find an Insomnia json file in the repo that has all the endpoints

### Screens

You can find them here [Imgur](https://imgur.com/a/QggfTA7)

### Nice to have

- Great attention to accessibility and its rules following WCAG 2.1
- Unit testing with Jest (Kudos if you integrate it in your pipeline with Netlify).
- [Netlify](https://netlify.com/) integration for your project and add its badge to the README.
- Code quality checks like [Codacy](https://www.codacy.com/) and add its badge to the README.

### What we're looking for

- **Simple, clear, readable code** - How well structured it is? Clear separation of concerns? Can anyone just look at it and get the idea to what is being done? Does it follow any standards?
- **Correctness** - Does the application do what it promises? Can we find bugs or trivial flaws?
- **No errors in the console screen** 

### Questions & submissions

- If you have any questions regarding this challenge, please reach out to us and we'll get back to you ASAP.
- Please submit your code as a link to a public GitHub repository.
- If you didn't meet all requirements listed above, don't worry about it and just submit what you have done so far.

### Build Setup

``` bash
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
