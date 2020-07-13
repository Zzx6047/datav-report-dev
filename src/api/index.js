import request from '@/utils/request'

const icode = '13926EAFCAA16CC3'

function wordcloud () {
  return request({
    url: '/screen/wordcloud',
    method: 'get',
    params: {
      icode
    }
  })
}

function mapScatter () {
  return request({
    url: '/screen/map/scatter',
    method: 'get',
    params: {
      icode
    }
  })
}

function screenData () {
  return request({
    url: '/screen/data',
    method: 'get',
    params: {
      icode
    }
  })
}

export {
  wordcloud,
  mapScatter,
  screenData
}
