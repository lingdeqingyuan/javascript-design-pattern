/**
 * 1.实现一个 Storage，使得该对象为单例，基于 localStorage 封装。
 *   实现方法 getItem和 setItem。
 */

// class版
class Storage {
  static getInstance () {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }
    
    return Storage.instance;
  }

  getItem (key) {
    return localStorage.getItem(key);
  }

  setItem (key, value) {
    return localStorage.setItem(key, value);
  }
}

const myStorage = Storage.getInstance();
myStorage.setItem('name', 'lilei'); //
myStorage.getItem('name') // 'lilei'

// 2. 闭包版
const Storage = (function () {
  let instance = null;
  return function () {
    if (!instance) {
      instance = new Storage();
    }
    return instance;
  } 
})();

function BaseStorage () {};
BaseStorage.prototype.getItem = function (key) {
  return localStorage.getItem(key);
}
BaseStorage.prototype.setItem = function (key, value) {
  return localStorage.setItem(key, value);
}