import Taro from "@tarojs/taro";

class utilStore {
  removeItem(key) {
    return Taro.removeStorageSync(key);
  }
  getItem(key) {
    return Taro.getStorageSync(key);
  }
  setItem(key, value) {
    return Taro.setStorageSync(key, value);
  }
  clear() {
    return Taro.clearStorageSync();
  }
}

export default  new utilStore();