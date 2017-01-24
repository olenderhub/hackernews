## InstallationFrontend

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

### Setup

    cd frontend
    npm install
    bower install


## Backend

### Setup

Install dependencies and create database:

    cd backend
    bundle install
    bundle exec rake db:setup


## Running the whole app

From the project root:

    rake run


## Goal

build a simple button to retrive the news from https://news.ycombinator.com/
