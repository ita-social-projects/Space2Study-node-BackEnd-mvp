const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const {
  config: { CLIENT_URL }
} = require('~/app/configs/config')
const router = require('~/app/routes')
const { createNotFoundError } = require('~/app/utils/errorsHelper')
const errorMiddleware = require('~/app/middlewares/error')

const initialization = (app) => {
  app.use(express.json({ limit: '10mb' }))
  app.use(express.urlencoded({ extended: true }))
  app.use(cookieParser())
  app.use(
    cors({
      origin: CLIENT_URL,
      credentials: true,
      methods: 'GET, POST, PATCH, DELETE',
      allowedHeaders: 'Content-Type, Authorization'
    })
  )

  app.use('/', router)

  app.use((_req, _res, next) => {
    next(createNotFoundError())
  })

  app.use(errorMiddleware)
}

module.exports = initialization
