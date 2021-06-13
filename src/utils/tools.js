export default {
    formatJSON(array, key) {
        return array.filter((item) => {
            if (item[key]) {
                item[key] = item[key].split(",")
            }

            return item;
        })
    },
    strToArr(str) {
        return str.split(",")
    },
    jsonToArr(str) {
        return JSON.parse(str)
    },
    replaceToSpace(str) {
        return str.replace(/,/g, " ")
    },
    trimSpace(str) {
        return str.replace(/\s+/g, '')
    },
    // 节流函数
    throttle(fn, delay) {
        var t = null,
            begin = new Date().getTime();

        return function() {
            var _self = this,
                args = arguments,
                cur = new Date().getTime();

            clearTimeout(t);

            if (cur - begin >= delay) {
                fn.apply(_self, args);
                begin = cur;
            } else {
                t = setTimeout(function() {
                    fn.apply(_self, args);
                }, delay)
            }
        }
    }
}
