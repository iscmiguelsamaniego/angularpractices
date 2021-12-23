# Project Structure 
**src (source) and app folders**
Contains

Index.html -> Main HTML page

inside index.html the tag <app-root></app-root> refers to the app folder  
within this the file app.component.ts the property selector app-root refers to the component like as :

**favicon.ico File**
icon associated with the application
and visible in bookmarks browser

**styles.css File**
Project global style sheet

**main.ts File**
Main entry point for Angular app, in this this refers to AppModule

**polyfills.ts File**
Polyfill scripts for browser support.

**test.ts File**
Main entrance for your unit tests

**assets folder**
In this you can store resources such as images, documents, etc.

**environments folder**
They specify all variables, constants, functions, classes, modules etc. that should be included when we are in development or production mode in the following files.

environment.ts

environment.prod.ts 

**e2e folder**
Starting Angular 12, the e2e folder is not created.
Allows integration tests, they allow us to ensure that our application works correctly as a whole.

**dist folder**

The cli command 

ng build 

Will generate the dist folder, inside this they locate all the files and folder 'assets' that must be uploaded to the web server.

**nodemodules folder**
Packages using npm are downloaded into this, the file 'package.json' found in the root folder of our project is the one that has the information of all the required packages.

