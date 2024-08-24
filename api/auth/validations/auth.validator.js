const { body, validationResult } = require('express-validator')
const authModel = require('../model/auth.model')
const response = require('../../../response')

exports.signup = [
  body('firstName')
    .trim()
    .notEmpty()
    .withMessage('required')
    .isLength({ min: 1 })
    .withMessage('must be at least 1'),

    body('lastName')
    .trim()
    .notEmpty()
    .withMessage('required')
    .isLength({ min: 1 })
    .withMessage('must be at least 1'),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Required')
    .isLength({ min: 6 })
    .withMessage('must be at least 6 characters long')
    .custom((value, { req }) => {
      
      const re = new RegExp(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'
      )
      if (re.test(value)) {
        return true
      } else {
        return Promise.reject(
          'must contain 1 upper case, 1 lower case, 1 special character, and 1 number'
        )
      }
    }),

  body('email')
    .trim()
    .isEmail()
    .withMessage('is invalid')
    .isLength({ max: 64 })
    .withMessage('must not exceed 64 characters')
    .custom(value => {
      return authModel.findOne({ email: value }).then(user => {
        if (user) {
          return Promise.reject('email already exists')
        }
      })
    }),

  async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      var error_message = ''
      errors.array().forEach(function (errorsList) {
        error_message += errorsList.param + ' ' + errorsList.msg + ', '
      })
      error_message = error_message.replace(/,\s*$/, '')
      data = {
        message: error_message
      }
      response.validation_error_message(data, res)
    } else {
      next()
    }
  }
]

exports.login = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('required')
    .isEmail()
    .withMessage('is invalid'),

  body('password').trim().notEmpty().withMessage('required'),
  // .isLength({ min: 6 }).withMessage('must be at least 6 characters long'),
  
  
  
  async (req, res, next) => {
    
    const errors = validationResult(req)
  
    if (!errors.isEmpty()) {
      let error_message = ''
      errors.array().forEach(function (errorsList) {
        error_message += errorsList.param + ' ' + errorsList.msg + ', '
      })
      error_message = error_message.replace(/,\s*$/, '')
      data = {
        message: error_message
      }
      response.validation_error_message(data, res)
    } else {
      next()
    }
  }
]


