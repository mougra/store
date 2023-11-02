export interface ServerResponse<T> {
  data: T[]
}

export interface ICategories {
  id: number
  name: string
  image: string
}
export interface IProducts {
  id: number
  title: string
  price: number
  description: string
  category: Category
  images: string[]
}

export interface Category {
  id: number
  name: string
  image: string
}
