This is a simple API built on NodeJS designed to perform Ceation, Reading, Updating, and Deletion of car registrations.

The project was made using a Virtual Machine running Ubuntu.
This project utilized a postgresql database which is set up separately from the NodeJS project itself.

# Prerequisites:
 - Linux System (preferably Ubuntu)
 - Bash
 - NodeJS and other packages
 - Postgresql database
 - (Not properly implemented) Docker and Docker Compose
 - Environment variables setup

# Setting up environmen
 - To install necessary packages, there is a bash script setup.sh which will install and prompt the user to fill in some information.
 - To run this script bash needs to be installed. Install bash using
```sudo apt install bash```

 - To ease installation make sure you are in the project directory
 - Next, run setup.sh from a terminal by running ```bash setup.sh```

 - When prompted, copy and paste the following lines:
```psql```

```CREATE DATABASE car_registration;```
```CREATE USER Reynaldo WITH ENCRYPTED PASSWORD 'Dirksen';```
```GRANT ALL PRIVILEGES ON DATABASE car_registration TO Reynaldo;```

```\c car_registration```
```
CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    registration_date DATE NOT NULL,
    model VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,
    registration_number VARCHAR(50) UNIQUE NOT NULL,
    color VARCHAR(50) NOT NULL,
    build_year INT NOT NULL,
    brand VARCHAR(50) NOT NULL,
    registered_by VARCHAR(50) NOT NULL
);
```

 - When finished with creating the database, exit postgres


 - This project makes use of environment variables. For ease of use, they are included for demo as .env

 - WIP: It is not in the desired finished state, but an attempt was made to use makefile and docker.

 - To run this project, run app.js by executing ```node src/app.js```

For testing purposes there is a bash script included (curl.sh) for demonstration purposes.
This project uses JWT tokens generation and validation, therefore there is a file included ```generateToken.js```, which contains the necessary information to generate a valid JWT token.
Before running curl.sh, generate a token by running ```node src/generateToken.js``` and copying the output to curl.sh.
Then you can run ```bash curl.sh``` when app.js is running to test this for now.

As of now, there is a problem with the connection to the database from NodeJS.
From terminal connection and execution of queries is possible, but from the project, the queries get stuck in Limbo.
JWT token generation and validation is implemented, and connection to the database is successful.

Note: There is some problem with the up-to-date versions of this JWT package and nodejs, therefore it could be possible that you need to downgrade to version 8.5.2 (learned this the hard way). 
