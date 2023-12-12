export interface ServerResponse<T> {
  data: T[]
}

export type AuthType = 'login' | 'signup'

export interface UserResponse {
  id: number
  email: string
  password: string
  name: string
  role: string
  avatar: string
  creationAt: string
  updatedAt: string
}

export interface UserCart {
  id: number
  title: string
  price: number
  description: string
  category: Category
  images: string[]
  quantity: number
}

export interface Category {
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

export interface defaultParamsProps {
  categoryId: string | undefined
  limit: number
  offset: number
  title: string
  price_min: number
  price_max: number
}

export interface Size {
  width: number | undefined
  // height: number | undefined
  SCREEN_SM: boolean
  SCREEN_LG: boolean
  countsProducts: number | undefined
}

export interface createUserProps {
  name: string
  email: string
  password: string
  avatar: string
}

export interface ProductRes {
  title: string
  price: number
  description: string
  images: string[]
  category: CategoryRes
  id: number
  creationAt: string
  updatedAt: string
}

export interface CategoryRes {
  id: number
  name: string
  image: string
  creationAt: string
  updatedAt: string
}

export interface tokenJWT {
  access_token: string
  refresh_token: string
}
