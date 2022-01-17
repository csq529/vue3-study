/**
 * [html2Text description]
 * @param  {[String]} val [html]
 * @return {[String]}     [返回的text]
 */
export function html2Text(val) {
  const div = document.createElement("div");
  div.innerHTML = val;
  return div.textContent || div.innerText;
}

/**
 * [objectMerge description] 合并两个对象
 * @param  {[Object]} target [目标对象]
 * @param  {[Object]} source [另一个对象]
 * @return {[Object]}        [合并后的对象]
 */
export function objectMerge(target, source) {
  /* Merges two  objects,
     giving the last one precedence */

  if (typeof target !== "object") {
    target = {};
  }
  if (Array.isArray(source)) {
    return source.slice();
  }
  Object.keys(source).forEach((property) => {
    const sourceProperty = source[property];
    if (typeof sourceProperty === "object") {
      target[property] = objectMerge(target[property], sourceProperty);
    } else {
      target[property] = sourceProperty;
    }
  });
  return target;
}

/**
 * [toggleClass description] 切换样式
 * @param  {[Node]} element   [元素]
 * @param  {[String]} className [类名]
 * @return {[type]}           [description]
 */
export function toggleClass(element, className) {
  if (!element || !className) {
    return;
  }
  let classString = element.className;
  const nameIndex = classString.indexOf(className);
  if (nameIndex === -1) {
    classString += "" + className;
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length);
  }
  element.className = classString;
}

/**
 * [uniqueArr description] 数组去重
 * @param  {[Array]} arr [原数组]
 * @return {[Array]}     [去重后的新数组]
 */
export function uniqueArr(arr) {
  return Array.from(new Set(arr));
}

/**
 * [parseTime description] 格式化时间
 * @param  {[String]} time    [时间] 时间戳 || 已经格式化好的日期
 * @param  {[String]} cFormat [要格式化的类型] 如{y}-{m}-{d} {h}:{i}:{s} ||  {y}-{m}-{d}
 * @return {[type]}         [description]
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (("" + time).length === 10) time = parseInt(time) * 1000;
    if (("" + time).length === 13) time = parseInt(time);
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  return time_str;
}

/**
 * [getUrlParams description] 获取url上的参数
 * @param  {[String]} url [description] 要截取的url上的参数
 * @return {[Array]}     [description] 截取后的数组
 */
export function getUrlParams(url) {
  url = url == null ? window.location.href : url;
  let paramsArr = [];
  if (url.indexOf("?") !== -1) {
    let params = url.split("?")[1];
    let strs = params.split("&");
    for (let i = 0; i < strs.length; i++) {
      paramsArr[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
    return paramsArr;
  }
}

/**
 * [getQueryObject description] 获取url上的参数
 * @param  {[String]} url [description] 要截取的url上的参数
 * @return {[Object]}     [description] 截取后返回的对象
 */
export function getQueryObject(url) {
  url = url == null ? window.location.href : url;
  const search = url.substring(url.lastIndexOf("?") + 1);
  const obj = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1);
    let val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}

// 设置、获取、删除localStorage
export const Storage = {
  setStore(name, content) {
    if (!name) return;
    if (typeof content !== "string") {
      content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
  },

  getStore(name) {
    if (!name) return;
    return window.localStorage.getItem(name);
  },

  removeStore(name) {
    if (!name) return;
    return window.localStorage.removeItem(name);
  },
};

// 判断有没有、设置、删除样式
export const ssDom = {
  // 判断时候是否有该class
  hasClass(el, className) {
    let reg = new RegExp("(^|\\s)" + className + "(\\s|$)");
    return reg.test(el.className);
  },

  addClass(el, className) {
    if (this.hasClass(el, className)) {
      return;
    }
    let newClass = el.className.split(" ");
    newClass.push(className);
    el.className = newClass.join(" ");
  },

  removeClass(el, className) {
    if (this.hasClass(el, className)) {
      let newClass = el.className.split(" ");
      for (let i = 0; i < newClass.length; i++) {
        if (newClass[i] === className) {
          newClass.splice(i, 1);
        }
      }
      el.className = newClass.join(" ");
    }
  },
};

/**
 * [getTime description] 获取当前时间
 * @param  {[String]} type [description]
 * @return {[type]}      [description]
 */
export function getTime(type) {
  if (type === "start") {
    return new Date().getTime() - 3600 * 1000 * 24 * 90;
  } else {
    return new Date(new Date().toDateString());
  }
}

/**
 * [cleanArray description] 清除非空数组
 * @param  {[Array]} actual []
 * @return {[type]}        [description]
 */
export function cleanArray(actual) {
  const newArray = [];
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

/**
 * Remove an item from an array.
 * 从数组中删除一项
 */
export function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
export function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}

/**
 * Convert a value to a string that is actually rendered.
 */
export function toString(val) {
  return val == null
    ? ""
    : typeof val === "object"
    ? JSON.stringify(val, null, 2)
    : String(val);
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
export function isPlainObject(obj) {
  return _toString.call(obj) === "[object Object]";
}

export function isRegExp(v) {
  return _toString.call(v) === "[object RegExp]";
}

/**
 * 数组求和
 */

export function sum(arr) {
  return arr.reduce((a, b) => a + b);
}

/**
 *
 * @param {*} obj 要检测的数据
 * @return {[String]} 检测的数据类型结果
 */
export function type(obj) {
  let class2type = {};
  "Array Date RegExp Object Error"
    .split(" ")
    .forEach((e) => (class2type["[object " + e + "]"] = e.toLowerCase()));
  if (obj == null) return String(obj);
  return typeof obj === "object"
    ? class2type[Object.prototype.toString.call(obj)] || "object"
    : typeof obj;
}

/**
 * [shallowClone description] 浅克隆
 * @param  {[type]} target [要克隆的对象]
 * @return {[type]}        [description]
 */
export function shallowClone(target) {
  const obj = {};
  for (let i in target) {
    obj[i] = target[i];
  }

  return obj;
}

// 深克隆
// 1.JSON.parse方法 序列/反序列
// 缺点：1.他无法实现对函数 、RegExp等特殊对象的克隆
//       2.会抛弃对象的constructor,所有的构造函数会指向Object
//       3.对象有循环引用,会报错
export function deepParse(target) {
  return JSON.parse(JSON.stringify(target));
}

// 2.构造一个深克隆函数
export function isArray(arr) {
  return Object.prototype.toString.call(arr) === "[object Array]";
}

export function deepClone(obj) {
  if (typeof obj !== "object" && typeof obj !== "function") {
    return obj;
  }

  let o = isArray(obj) ? [] : {};
  for (let i in obj) {
    if (obj.hasOwnproperty(i)) {
      o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }

  return o;
}

/**
 * 时间戳显示为多少分钟前，多少天前的JS处理
 * 方法名为dateDiff，支持一个参数timestamp,必须参数，本方法会自动补全为和JS侧支持的13位数值（因为后端返回时间戳可能只精确到秒）。
 */
/*
 ** 时间戳显示为多少分钟前，多少天前的处理
 ** eg.
 ** console.log(dateDiff(1411111111111));  // 2014年09月19日
 ** console.log(dateDiff(1481111111111));  // 9月前
 ** console.log(dateDiff(1499911111111));  // 2月前
 ** console.log(dateDiff(1503211111111));  // 3周前
 ** console.log(dateDiff(1505283100802));  // 1分钟前
 */

export function dateDiff(timestamp) {
  // 补全为13位
  let arrTimestamp = (timestamp + "").split("");
  for (let start = 0; start < 13; start++) {
    if (!arrTimestamp[start]) {
      arrTimestamp[start] = "0";
    }
  }

  timestamp = arrTimestamp.join("") * 1;

  let minute = 1000 * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let halfamonth = day * 15;
  let month = day * 30;

  let now = new Date().getTime();
  let diffValue = now - timestamp;

  // 如果本地时间反而小于变量时间
  if (diffValue < 0) {
    return "不久前";
  }

  // 计算差异时间的量级
  let monthC = diffValue / month;
  let weekC = diffValue / (day * 7);
  let dayC = diffValue / day;
  let hourC = diffValue / hour;
  let minC = diffValue / minute;

  // 数值补0方法
  let zero = function (value) {
    if (value < 10) {
      return "0" + value;
    }

    return value;
  };

  // 使用
  if (monthC > 12) {
    // 超过1年， 直接显示年月日
    return (function () {
      let date = new Date(timestamp);
      return (
        date.getFullYear() +
        "年" +
        zero(date.getMonth() + 1) +
        "月" +
        zero(date.getDate()) +
        "日"
      );
    })();
  } else if (monthC >= 1) {
    return parseInt(monthC) + "月前";
  } else if (weekC >= 1) {
    return parseInt(weekC) + "周前";
  } else if (dayC >= 1) {
    return parseInt(dayC) + "天前";
  } else if (hourC >= 1) {
    return parseInt(hourC) + "小时前";
  } else if (minC >= 1) {
    return parseInt(minC) + "分钟前";
  }

  return "刚刚";
}

/**
 * [isYesterday description] 判断是否是昨天
 * @param  {[type]}  time [description] 时间戳
 * @return {Boolean}      [description]
 */
export function isYesterday(time) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const today = `${year}/${month}/${day}`;
  const todayTime = new Date(today).getTime(); // 当天凌晨的时间
  const yesterdayTime = new Date(todayTime - 24 * 60 * 60 * 1000).getTime(); // 昨天凌晨的时间
  return time < todayTime && yesterdayTime <= time;
}

/**
 * [isLastYesterday description] 判断是否是前天
 * @param  {[type]}  time [description] 时间戳
 * @return {Boolean}      [description]
 */
export function isLastYesterday(time) {
  const twentyFourHours = 24 * 60 * 60 * 1000;
  const fortyEightHours = 24 * 60 * 60 * 1000 * 2;
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const today = `${year}/${month}/${day}`;
  const todayTime = new Date(today).getTime(); // 当天凌晨的时间
  const yesterdayTime = new Date(todayTime - twentyFourHours).getTime(); // 昨天凌晨的时间
  const lastYesterdayTime = new Date(todayTime - fortyEightHours).getTime(); // 昨天凌晨的时间
  return time < yesterdayTime && lastYesterdayTime <= time;
}
