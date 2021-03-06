require('../db/index.js');
const mongoose = require('mongoose');
let locData = require("./cities");

let LocationModel = require('../models/Location.model')

LocationModel.create(locData)