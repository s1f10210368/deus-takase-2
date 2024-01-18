/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    /** An array of games */
    resBody: Types.Game[]
  }

  post: {
    status: 201
    /** Game created */
    resBody: Types.Game
    /** Game to be created */
    reqBody: Types.GameCreateInput
  }
}
