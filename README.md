# Time Prediction Algorithm Based on Distance and Real-World Conditions

## Project Information
This project consists of several project files, with each project file being part of an individual system. These systems are not connected to each other therefore it is possible to run them individually. Each system communicates as needed via HTTP requests. The project consists of: 

- Mobile Application built with React Native
- Location Request API Function hosted on AWS Lambda and built with JavaScript / Node.js
- Location Request API Function hosted on AWS Lambda and built with JavaScript / Node.js
- AWS Lambda function that calls the Amazon Sagemaker endpoint (Directly hosted on console.)
- Travel time prediction model trained and deployed with Amazon Sagemaker / Google Colab notebooks

This repository is only on the React Native mobile application. Please contact me at www.jasonkhoo.me if you would like the other remaining files. 

## Project Installation
As this is mainly a JavaScript based project, [Node](https://nodejs.org/en/) should be installed before building any of the projects. The LTS version of node should suffice. [Serverless](https://www.serverless.com/) is used to deploy the backend functions to the AWS Platform. Follow the configuration steps in the website before deploying any functions. The private API keys are ommitted in this project for security purposes. **Accounts with Google Maps Platform and Tom Tom Routing API are needed to obtain the API keys to run the external requests.**

### Mobile Application
Visual Studio Code is the preferred code editor to build the project. XCode and CocoaPods are required to run the app on the iOS simulator while Android Studio and the Android SDK is required to run the app on Android. Watchman should also be installed on the computer.

**Running the project for the first time**

Install all the required packages and dependencies. 
```
npm install
```

To run the project on iOS
```
npx react-native run-ios
```

To run the project on Android
```
npx react-native run-android
```
