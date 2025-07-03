import { Server } from 'http'
import app from './app'
import mongoose from 'mongoose'

let server: Server

async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string)
    server = app.listen(process.env.PORT, () => {
      console.log(`Application is listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.log('Server is not running', error)
  }
}

main()

process.on('unhandledRejection', () => {
  console.log(`Unhandled Rejection. Shutting down...`)
  if (server) {
    server.close(() => {
      process.exit(1)
    })
  }
  process.exit(1)
})

process.on('uncaughtException', () => {
  console.log(`Uncaught Exception. Shutting down...`)
  process.exit(1)
})
