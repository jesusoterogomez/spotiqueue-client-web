# Spotiqueue Web Client [Work In Progress]

This client will be used to control the queues in the Spotiqueue Android Application, through a Socket.io server.

## Installing dependencies

This application's dependencies are managed by [npm](https://www.npmjs.org/) and [Bower](http://bower.io/), before proceding with the cli commands below, make sure you have [node.js](http://nodejs.org/) and [npm](https://www.npmjs.org/) installed.

####Install project dependencies
npm and bower handle the installation of all the dependencies within the project. Check the list of dependencies in `package.json` and `bower.json` in the project root, Install the dependencies with the following commands.

```sh
$ npm install
$ bower install
```

## Running the application

[gulp](http://gulpjs.com/), the javascript task manager handles tasks for serving and building the application.
Use the code below to build a development version and run the application locally in port `9000`. 

```sh
# runs the application with LiveReload in http://localhost:9000
$ npm start
```
