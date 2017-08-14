// style
require('style/main');

const $ = require('jquery');
const api = require('api/users');
const welcomeUser = require('welcomeUser');
const reactApp = require('./react/ReactApp');
const typeChallenge = require('ts/appConfig');

const users = api.getUsers();

console.log(welcomeUser('Jones'));
