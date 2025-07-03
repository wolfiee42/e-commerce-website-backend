import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { ProductModel } from './model'
import mongoose from 'mongoose'
import { Server } from 'http'
import dotenv from 'dotenv'
dotenv.config()

const app: Application = express()

//parsers
app.use(express.json())

app.use(
  cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  }),
)
app.use(cookieParser())
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

// routes
app.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  })
})

app.get('/products', async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.find()
    res.status(200).json({
      products,
    })
  } catch (error) {
    console.log(error)
  }
})

app.get('/product/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await ProductModel.findById(id)
    res.status(200).json({
      product,
    })
  } catch (error) {
    console.log(error)
  }
})

export default app
