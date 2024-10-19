# :rose: NodeJS OkCupid Matching Algorithm | LiaVinci :rose:

## :cupid: Running :cupid:

### First please make sure to install the app dependencies, to do so please follow the next steps:

- Install [npm](https://www.npmjs.com/) to make sure it's installed you can run `npm -v`
- Install [NodeJS](https://nodejs.org/en/download/package-manager/) to make sure it's installed you can run `node -v`
- Clone the repository
- Install dependencies: `npm install`

### To run the app :revolving_hearts:

* `npm run start`

### App in action :sparkling_heart:

![](resources/gif/app.gif)

## :broken_heart: A bit about the project architecture :heart:

**app.js -** the app starting point.

**The data folder -** contains the different ways to interact without our data,
                      right now as we only reading and writing to a file you will be able to find there the file module.

**The logic folder -** contains our logic for our app,
                       you will be able to find there two modules at this moment,
                       Profiles & Profile
                       Profiles - handles bulk of profiles
                       Profile - handles a single profile

**The utils folder -** contains different utilities / helper functions that are generic and can be used in different modules in our app, although right now we're only dealing with profiles, I still wanted to emphasis that we can use it in other places and this is why I created a different module for those functions.

**The resources folder -** contains different resources e.g. the file containing profiles, instructions for this assignment...

**config.js -** contains different default values used in our app.
