import Mock from 'mockjs'

export const getData = function () {
  return Mock.mock({ // 生成数据规则
    'list|1-10': [{ //
      'id|+1': 1
    }]
  })
}
