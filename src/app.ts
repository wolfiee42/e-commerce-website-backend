import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { ProductModel } from './model'

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
    console.error(error)
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
    console.error(error)
  }
})

export default app

module.exports = app
