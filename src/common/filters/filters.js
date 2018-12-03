let dateServer = value => value.replace(/(d{4})(d{2})(d{2})/g, '$1-$2-$3');



// var f = v => v;
// // 等同于
// var f = function (v) {
//   return v;
// };

// var sum = (num1, num2) => num1 + num2;
// // 等同于
// var sum = function(num1, num2) {
//   return num1 + num2;
// };

let add5 = value => value + 5;


let padding = (str) => {
    return str<10?'0'+str:str
}


export { dateServer,add5,padding}
//export default {dateServer,add5,padding}

//注意，export 和 export default的区别
//在导入的时候，也要注意，import focus，import {focus} from focus等的区别