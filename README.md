# AngularJS 4.0.0

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Getting Started
This project represents a photography portfolio, however the project's structure can be used for other purposes as well. 

### Prerequisites 
##### Ubuntu 16.04

#### Install node.js
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -  
sudo apt-get install -y nodejs
```

#### Install angular CLI
```
sudo npm install -g @angular/cli
```

#### Create a new app

Navigate to desired location for your project and run  
```
ng new app-name
```
#### Testing
To test the app locally, run:  
```
ng serve
```  
OR  
```
npm start
```  
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Project structure

To add new components, run  
```
ng generate component component-name
```  
or  
```
ng g c component-name
```  
The structure of this project is as follows:  
- app root  
  - header  
  - photos  
    - photos-detail  
    - photos-list
      - photos-location    
  - locations-list 
    - locations-edit   

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
