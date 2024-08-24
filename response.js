const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const program = "Blog-Server";
const version = "1.0.0";
const release = "01";
const date = new Date();
const timestamp = date.getTime();

module.exports.success_message = function (data, res, totalRecords = 0) {
  res.status(200).send({
    program: program,
    version: version,
    release: release,
    datetime: date,
    timestamp: timestamp,
    status: "Success",
    code: 200,
    message: "OK",
    totalRecords: totalRecords,
    data: data,
  });
};

module.exports.error_message = function (data, res) {
  res.status(500).send({
    program: program,
    version: version,
    release: release,
    datetime: date,
    timestamp: timestamp,
    status: "Failure",
    code: 500,
    message: "Internal Server Error",
    data: data,
  });
};

module.exports.validation_error_message = function (data, res) {
  res.status(403).send({
    program: program,
    version: version,
    release: release,
    datetime: date,
    timestamp: timestamp,
    status: "Ok",
    code: 403,
    message: "Validation Error",
    data: data,
  });
};

module.exports.data_error_message = function (data, res) {
  res.status(403).send({
    program: program,
    version: version,
    release: release,
    datetime: date,
    timestamp: timestamp,
    status: "OK",
    code: 403,
    message: "No Data Found",
    data: data,
  });
};

module.exports.unauthorized_error_message = function (data, res) {
  res.status(401).send({
    program: program,
    version: version,
    release: release,
    datetime: date,
    timestamp: timestamp,
    status: "Ok",
    code: 401,
    message: "Unauthorized Information",
    data: data,
  });
};


