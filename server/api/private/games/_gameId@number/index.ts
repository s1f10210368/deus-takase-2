/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200
    /** Game object */
    resBody: Types.Game
  }

  put: {
    status: 200
    /** Game updated */
    resBody: Types.Game
    /** Game data to update */
    reqBody: Types.GameUpdateInput
  }

  delete: {
    status: 204
  }
}
