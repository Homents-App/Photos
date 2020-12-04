# Photo Gallery/Carousel

## About The Project

> A recreation of the Trulia listing photo gallery/carousel Component.
1. Visit http://54.219.143.193:3001/ to take a look at the individual component!
1. Visit http://54.177.124.31:3000/ to take a look at the whole listing page with its related projects!

## Table of Contents

* [About The Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [CRUD Operations](#CRUD)
  * [PostgreSQL Setup](#PostgreSQL)
  * [Cassandra Setup](#Cassandra)

## Getting Started

### Prerequisites
* npm

### Installation
1. Clone repo
```sh
git clone https://github.com/HRR49HouseStark/Photos.git
```

2. Install Packages
```sh
npm install
```
### CRUD
3. CRUD Operations

| Type    | Endpoint           | Action            |
| ------- |--------------------| ------------------|
| POST    | '/api/addListing'  | Adds listing      |
| GET     | '/api/listings/:id'| Retrieves listing |
| PUT     | '/api/listings/:id'| Updates listing   |
| DELETE  | '/api/listings/:id'| Deletes listing   |

### PostgreSQL
4. PostgreSQL Setup
    - Install homebrew if on Mac OS (other OS you have to find out how to install it on your own)
    - To install postgres, run:
    ```sh
    brew install postgres
    ```
    - To start postgres run the command:
    ```sh
    brew services start postgresql
    ```
    - To access the shell, run:
    ```sh
    psql postgres
    ```
    - Create a database by typing the following in the shell:
    ```sh
    createdb <database>
    ```
    - I would suggest you use 'SDC' for your database unless you want to manually change the schema.sql file
    - To create the tables in your database, type the following in the postgres shell:
    ```sh
    \i schema.sql
    ```
    - To see all relations in the database, type: \dt
    - While using the SDC database (\c SDC), type the following to see the table:
    ```sh
    SELECT * FROM listings
    ```
    - To import a .sql file:
    ```sh
    > \i <path to file nam>
    ```
    - To import a .csv file type the following. Keep in mind that options can vary after the path to the file depending on what you want:
    ```sh
    > \copy <tablename> FROM <path to file> DELIMITER ',' CSV HEADER;
    ```
    - reference: https://gist.github.com/ibraheem4/ce5ccd3e4d7a65589ce84f2a3b7c23a3

### Cassandra
5. Cassandra Setup
    - Install homebrew if on Mac OS (other OS you have to find out how to install it on your own)
    - Check your python installation:
    ```sh
    python --version
    ```
    - If you don't have it, install it:
    ```sh
    brew install python
    ```
    - You will need Java as well:
    ```sh
    brew cask install homebrew/cask-versions/adoptopenjdk8
    ```
    - We'll use AdoptOpenJdk:
    ```sh
    brew tap AdoptOpenJDK/openjdk
    ```
    ```sh
    brew cask install adoptopenjdk8
    ```
    - Type the following command to find all jdk versions:
    ```sh
    /usr/libexec/java_home -V
    ```
    - Pick the version to make default with the following script:
    ```sh
    export JAVA_HOME=`/usr/libexec/java_home -v <version number>`
    ```
    - To see the jdk version:
    ```sh
    java -version
    ```
    - Now you can finally install Cassandra:
    ```sh
    brew install cassandra
    ```
    - Start Cassandra:
    ```sh
    cassandra -f
    ```
    - Open a new terminal tab and type:
    ```sh
    cqlsh
    ```
    - Great! Now you're connected to Cassandra!
    - reference: https://medium.com/@manishyadavv/how-to-install-cassandra-on-mac-os-d9338fcfcba4