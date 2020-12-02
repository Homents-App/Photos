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
