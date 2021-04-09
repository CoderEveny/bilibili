import {request} from '../request'

export function postRegister(config) {
  return request({
    url: '/register',
    method: 'post',
    data: {
      name: config.name,
      username: config.username,
      password: config.password,
    }
  })
}