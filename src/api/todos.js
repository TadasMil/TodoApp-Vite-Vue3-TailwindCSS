import { mainInstance } from '../axios/axios'

export const todos = {
  get: async () => {
    return await mainInstance
      .get('?_limit=20')
      .then((res) => res.data)
      .catch((err) => err.response)
  },
  insert: async (body) => {
    return await mainInstance
      .post('', body)
      .then((res) => res.data)
      .catch((err) => err.response)
  },
  update: async (id, body) => {
    return await mainInstance
      .put(`/${id}`, body)
      .then((res) => res.data)
      .catch((err) => err.response)
  },
  delete: async (id) => {
    return await mainInstance
      .put(`/${id}`)
      .then((res) => res.data)
      .catch((err) => err.response)
  }
}
