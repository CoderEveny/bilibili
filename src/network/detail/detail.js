import {request} from 'network/request'

// 每个视频的请求
export function getArticle(id) {
  return request({
    url: '/article/' + id,
  })
}

// 推荐数据的请求
export function getCommend() {
  return request({
    url: '/commend'
  })
}

// 评论数据的请求
export function getComment(id) {
  return request({
    url: '/comment/' + id
  })
}

// 发送评论
export function postComment(id, model) {
  return request({
    url: '/comment_post/' + id,
    method: 'post',
    data: {
      comment_content: model.comment_content,
      comment_date: model.comment_date,
      parent_id: model.parent_id,
      article_id: model.article_id
    }
  })
}

// 发送收藏
export function collection(id,aId) {
  return request({
    url: '/collection/' + id,
    method: 'post',
    data: {
      article_id: aId
    }
  })
}

// 收藏初始化
export function collectionInit(id,aId) {
  return request({
    url: '/collection/' + id,
    method: 'get',
    params: {
      article_id: aId
    }
  })
}

// 发送关注
export function subScript(id, uId) {
  return request({
    url: '/sub_scription/' + id,
    method: 'post',
    data: {
      sub_id: uId
    }
  })
}

// 关注初始化
export function subScriptInit(id, uId) {
  return request({
    url: '/sub_scription/' + id,
    method: 'get',
    params: {
      sub_id: uId
    }
  })
}