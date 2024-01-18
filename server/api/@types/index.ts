/* eslint-disable */
export type Game = {
  id: number
  title: string
  genre: string
  developer: string
  gameInformation?: GameInformation | undefined
}

export type GameInformation = {
  id: number
  description: string
  releaseDate: string
  rating?: number | null | undefined
  platform: string
}

export type GameCreateInput = {
  title: string
  genre: string
  developer: string
}

export type GameUpdateInput = {
  title?: string | undefined
  genre?: string | undefined
  developer?: string | undefined
}
