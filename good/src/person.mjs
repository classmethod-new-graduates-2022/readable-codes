import * as Http from './http.mjs'

const END_POINT = 'https://example.com/v3'

export async function register(person) {
  return await Http.post(`${END_POINT}/person`, person)
}
