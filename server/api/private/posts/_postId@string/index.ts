/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  put: {
    status: 200
    /** Post updated */
    resBody: Types.Post
    /** Post data to update */
    reqBody: Types.PostUpdate
  }

  delete: {
    status: 204
  }
}
