/* eslint-disable */
export type Game = {
  id: number
  title: string
  description?: string | null | undefined
}

export type Review = {
  id: number
  content: string
  rating: number
  gameId: number
  userId: string
}

export type Post = {
  id: number
  title: string
  content: string
  gameId?: number | null | undefined
  userId: string
}

export type NewsArticle = {
  id: number
  title: string
  content: string
  createdAt: string
  updatedAt: string
}
