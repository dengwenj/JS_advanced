class DWJCache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage
  }

  setItem(key, value) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getItem(key) {
    let value = this.storage.getItem(key)
    if (value) {
      value = JSON.parse(value)
      return value
    }
  }

  removeItem(key) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }

  key(index) {
    return this.storage.key(index) // 是获取的 key 值，传的是索引，可以和 length， for循环使用
  }

  length() {
    return this.storage.length // 这个长度就是有多少个
  }
}

const localStorage = new DWJCache()
const sessionStorage = new DWJCache(false)

export {
  localStorage,
  sessionStorage
}