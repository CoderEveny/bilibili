import {request} from '../request'

export function getContent(id,page,pagesize) {
  return request({
    url: '/detail/' + id,
    params: {
      page: page,
      pagesize: pagesize
    }
  })
}