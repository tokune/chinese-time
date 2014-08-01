chinese-time
============

nodejs获取中文时间，无依赖。

例子:

var CTime = require('chinese-time');

var ct = new CTime();

console.log(ct.toDateString());//二零一四年八月一日

console.log(ct.toTimeString());//十五时三十三分五十零秒

console.log(ct.toString());//二零一四年八月一日 十五时三十三分五十零秒


new CTime()可以带参数，如果不带就是当前时间。

参数与new Date()一致，可以是'2014-08-01'，也可以是时间戳(1406874247876)等。

详情参考new Date()相关文档。


