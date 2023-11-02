export interface ICategories {
  id: number
  name: string
  image: string
}
export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}
export interface IComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}
export interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface ServerResponse<T> {
  data: T[]
}

export interface Size {
  width: number | undefined
  // height: number | undefined
  SCREEN_SM: boolean
  SCREEN_LG: boolean
  countsPosts: number | undefined
}
