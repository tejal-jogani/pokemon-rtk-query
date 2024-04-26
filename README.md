# Pokemon
 
This is the application to display pokemon list and it's details from 3rd party API [https://pokeapi.co/api/v2](https://pokeapi.co/api/v2)
 
##### Dependency

Node v18.19.0

If [https://pokeapi.co/api/v2](https://pokeapi.co/api/v2) is up then only we would be able to run the application.
 
##### Local development setup
 
Copy/create an .env file from .env.example file or run below command
 
```bash

cp .env.example .env

```

After that open .env file and set API url to ```https://pokeapi.co/api/v2```

Then run below command to setup project

```bash

npm i
npm run dev

```

Project will run on [http://localhost:5173](http://localhost:5173) URL. Click on link to open it in browser.
 
##### To run unit test

To unit test cases for run below command.

```npm run test```


To create coverage report, You have to run below command and report will be generated in **coverage** directory.
To check report, you have to open **index.html** file in the browser.

```npm run coverage```
 

##### Application moved to production steps

First needs to create build by using below command, and that will create a **dist** directory. Upload this generated directory to production server and you are good to go!!!

```npm run build```
