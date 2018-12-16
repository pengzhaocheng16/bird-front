const { config } = require('./common')

const { apiPrefix } = config;
let database = [
  {
    "icon": "setting",
    "id": "1",
    "name": "系统管理",
    "parentId": "0",
    "url": ""
  },
  {
    "icon": "solution",
    "id": "2",
    "name": "权限管理",
    "parentId": "1",
    "url": ""
  },
  {
    "icon": "user",
    "id": "3",
    "name": "用户管理",
    "parentId": "2",
    "permissionName":"sys:authorize:user",
    "url": "/sys/authorize/user"
  },
  {
    "icon": "share-alt",
    "id": "4",
    "name": "示例",
    "parentId": "0",
    "url": ""
  },
  {
    "icon": "share-alt",
    "id": "5",
    "name": "bird-grid示例",
    "parentId": "4",
    "permissionName":"",
    "url": "/demo/bird-grid"
  },
  {
    "icon": "share-alt",
    "id": "6",
    "name": "bird-selector示例",
    "parentId": "4",
    "permissionName":"",
    "url": "/demo/bird-selector"
  },
  {
    "icon": "share-alt",
    "id": "7",
    "name": "bird-multi示例",
    "parentId": "4",
    "permissionName":"",
    "url": "/demo/bird-multi"
  },
  {
    "icon": "share-alt",
    "id": "8",
    "name": "bird-cascader示例",
    "parentId": "4",
    "permissionName":"",
    "url": "/demo/bird-cascader"
  },
  {
    "icon": "share-alt",
    "id": "9",
    "name": "bird-form示例",
    "parentId": "4",
    "permissionName":"",
    "url": "/demo/bird-form"
  },
  {
    "icon": "share-alt",
    "id": "10",
    "name": "bird-tree示例",
    "parentId": "4",
    "permissionName":"",
    "url": "/demo/bird-tree"
  },
  {
    "icon": "share-alt",
    "id": "11",
    "name": "bird-button示例",
    "parentId": "4",
    "permissionName":"",
    "url": "/demo/bird-button"
  },
  {
    "icon": "share-alt",
    "id": "11",
    "name": "bird-treegrid示例",
    "parentId": "4",
    "permissionName":"",
    "url": "/demo/bird-treegrid"
  }
]

export default  {

    [`GET ${apiPrefix}/menus`] (req, res) {
        res.status(200).json(database)
    },
}
