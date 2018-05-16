//引入mockjs
const Mock = require('mockjs')
// import Mock from 'mockjs'
//使用mockjs模拟数据
var template={
  'data|1-4':[{
    'title':'@title',
    'article':'@article'
  }]
}
Mock.mock('/api/data',template);

// export default  data
