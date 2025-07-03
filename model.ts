import { model, Schema } from 'mongoose'

export interface Product {
  id?: string
  title: string
  price: number
  image: string
  description: string
  category: string
  rating: number
  stock: number
}

const ProductSchema = new Schema<Product>({
  title: String,
  price: Number,
  image: String,
  description: String,
  category: String,
  rating: Number,
  stock: Number,
})

export const ProductModel = model<Product>('Product', ProductSchema)
