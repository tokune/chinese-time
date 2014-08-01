(function () {
    function CTime(dateTime) {
        this.dateTime = dateTime ? new Date(dateTime) : new Date();
    }
    CTime.prototype.toDateString = function() {
        var year = this.getYear();
        var month = this.getMonth();
        var date = this.getDate();
        return year + month + date;
    }
    CTime.prototype.toTimeString = function() {
        var hours = this.getHours();
        var minutes = this.getMinutes();
        var seconds = this.getSeconds();
        return hours + minutes + seconds;
    }
    CTime.prototype.toString = function() {
        var str = this.toDateString() + ' ' + this.toTimeString();
        return str;
    }
    CTime.prototype.getHours = function() {
        return this.parse('hours');
    }
    CTime.prototype.getMinutes = function() {
        return this.parse('minutes');
    }
    CTime.prototype.getSeconds = function() {
        return this.parse('seconds');
    }
    CTime.prototype.getMonth = function() {
        return this.parse('month');
    }
    CTime.prototype.getDate = function() {
        return this.parse('date');
    }
    CTime.prototype.parse = function(type) {
        var origin, lastStr;
        switch(type){
            case 'month':
                origin = this.dateTime.getMonth() + 1;
                lastStr = '月';
                break;
            case 'date':
                origin = this.dateTime.getDate();
                lastStr = '日';
                break;
            case 'hours':
                origin = this.dateTime.getHours();
                lastStr = '时';
                break;
            case 'minutes':
                origin = this.dateTime.getMinutes();
                lastStr = '分';
                break;
            case 'seconds':
                origin = this.dateTime.getSeconds();
                lastStr = '秒';
                break;
        }
        origin = origin.toString();
        var originStr = origin.length > 1 ? this.overTen(origin) : this.intToChinese(origin);
        originStr += lastStr;
        return originStr;
    }
    CTime.prototype.getYear = function() {
        var year = this.dateTime.getFullYear();
        year = year.toString();
        var yearStr = '';
        for (var i = 0; i < year.length; i++) {
            yearStr += this.intToChinese(year[i]);
        };
        yearStr += '年';
        return yearStr;
    }
    CTime.prototype.overTen = function(num) {
        var ten = num[0] === '1' ? '' : this.intToChinese(num[0]);
        return ten + '十' + this.intToChinese(num[1]);
    }
    CTime.prototype.intToChinese = function(num) {
        num = parseInt(num);
        switch(num){
            case(1):
                return '一';
            case(2):
                return '二';
            case(3):
                return '三';
            case(4):
                return '四';
            case(5):
                return '五';
            case(6):
                return '六';
            case(7):
                return '七';
            case(8):
                return '八';
            case(9):
                return '九';
            case(0):
                return '零';
            default:
                return '無';
        }
        this.dateTime;
    }
    module.exports = CTime;
}());
