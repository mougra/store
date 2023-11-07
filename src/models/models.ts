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
export interface IUser {
  email: string
  password: string
  name: string
  avatar: string
  role: string
  id: number
}
export interface RegisterUser {
  email: string
  password: string
  name: string
  avatar: string
}
export interface LoginUser {
  email: string
  password: string
}
