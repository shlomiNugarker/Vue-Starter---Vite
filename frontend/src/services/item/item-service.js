import { utilService } from '../util.service'
// import { httpService } from '../http.service'
import { storageService } from '../async-storage.service'

const KEY = 'item_db'

const ENDPOINT = 'item'
// const BASE_URL =
//   process.env.NODE_ENV !== 'development' ? '/api/item' : '//localhost:3030/api/item/'

export const itemService = {
  query,
  getById,
  remove,
  save,
  getEmptyItem,
}

const gItems = _createItems()

async function query(filterBy = {}) {
  // return await httpService.get(ENDPOINT, filterBy)
  return storageService.query(KEY)
}

async function getById(id) {
  // return await httpService.get(`${ENDPOINT}/${id}`)
  return storageService.getById(KEY, id)
}

async function remove(id) {
  // return await httpService.delete(`${ENDPOINT}/${id}`)
  return storageService.remove(KEY, id)
}

async function save(item) {
  // return item._id
  //   ? await httpService.put(`${ENDPOINT}/${item._id}`, item)
  //   : await httpService.post(ENDPOINT, item)
  return item._id
    ? storageService.put(KEY, item)
    : storageService.post(KEY, item)
}

function getEmptyItem() {
  return Promise.resolve({
    name: 'Empty-item',
    createdAt: new Date(),
    description: utilService.getLoremIpsum(),
  })
}

function _createItems() {
  let items = utilService.loadFromStorage(KEY)
  if (!items || !items.length) {
    items = [
      _createItem('Item-1'),
      _createItem('Item-2'),
      _createItem('Item-4'),
      _createItem('Item-5'),
      _createItem('Item-6'),
      _createItem('Item-7'),
      _createItem('Item-8'),
      _createItem('Item-9'),
      _createItem('Item-10'),
      _createItem('Item-11'),
    ]
    utilService.saveToStorage(KEY, items)
  }
  return items
}

function _createItem(name) {
  return {
    _id: utilService.makeId(),
    name,
    description: utilService.getLoremIpsum(),
    createdAt: new Date(),
  }
}
