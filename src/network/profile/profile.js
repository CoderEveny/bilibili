import {request} from '../request'

export function getUserData(id) {
  return request({
    url: '/user/' + id,
  })
}

export function upLoadFile(fromdata) {
  return request({
    url: '/upload',
    method: 'post',
    data: fromdata
  })
}

export function userUpdate(config) {
  return request({
    url: '/update/' + localStorage.getItem('id'),
    method: 'post',
    data: config
  })
}