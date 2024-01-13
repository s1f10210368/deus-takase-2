/* eslint-disable */
export type Post = {
  id: string
  title: string
  content?: string | null | undefined
  published: boolean
  authorId: string
  categories?: Category[] | undefined
}

export type PostCreate = {
  title: string
  content?: string | null | undefined
  published: boolean
  authorId: string
  categories?: string[] | undefined
}

export type PostUpdate = {
  title: string
  content?: string | null | undefined
  published: boolean
  categories?: string[] | undefined
}

export type Comment = {
  id: string
  content: string
  postId: string
  authorId: string
}

export type CommentCreate = {
  content: string
  postId: string
  authorId: string
}

export type Category = {
  id: string
  name: string
}
