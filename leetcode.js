
/**
 * leetcode刷题记录
 * 2019.11.7
 * by fengmu
 */



/**
 * 000 字谜分组
 * 
 * 思路：字符串操作，拆分排序后合并，再进行对象的values方法获取
 * 
 */

// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"]
// let map = {}
// let result = []
// function set(arr){
//     arr.forEach((item)=>{
//         let str = item.split('').sort().join('')
//         if(!map[str]){
//             map[str] = []  
//         }
//         map[str].push(item)
//     })
//     console.log(Object.values(map))
// }
// set(arr)

/**
 * 001 两数之和
 * 思路：与冒泡排序类似，双层循环，进行求和
 */

//let nums = [11, 15, 2, 7]
//let target = 9

/**
 * 方法一：双层循环实现
 */

// function sum(num,target){
//     for(let i=0;i<num.length;i++){
//         for(let j=i+1;j<num.length;j++){
//             if(num[i]+num[j] == target){
//                 console.log(i,j)
//             }
//         }
//     }
// }

/**
 * 方法二：利用indexOf()实现，不过要注意排除本身，以及对最后结果进行排序
 */

// function sum(num,target){
//     num.forEach((item,index)=>{
//         if(num.indexOf(target - item)!=-1 && num.indexOf(target - item) !== index ){
//             console.log([index,num.indexOf(target-item)].sort())
//         }
//     })
// }
// sum(nums,target)


/**
 * 007 整数反转
 * 
 */

// let num = 1233
// let arr = [-Math.pow(2,31),Math.pow(2,31)-1]

// function reverse(num,arr){
//     let rNum = 0
//     let n
//     if(num >= 0){
//         n = parseInt(((''+num).split('').reverse().join('')))
//          rNum = n > arr[1] ? '溢出' : n
//     } else {
//         n = parseInt('-'+((''+num).split('-')[1].split('').reverse().join('')))
//         rNum = n < arr[0]? '溢出' : n
//     }

//     console.log(rNum)
// }

// reverse(num,arr)

/**
 * 009 回文数
 */

//  let num = 123321

//  function isHw(num){
//      let str = ''+num
//      let rStr = (''+num).split('').reverse().join('')
//      console.log(str === rStr) 
//  }

//  isHw(num)

/**
 * 014 最长公共前缀
 */

//  let arr = ["flrlowerrr","flrlowrr","flrloighrrr"]

//  function findPrix(arr){
//      //先找到最短字符串
//      let shortStr = arr[0]
//      let result = []
//      arr.forEach((item,index)=>{
//         if(shortStr.length > item.length){
//             shortStr = item
//         }
//      })

//     let shortStrArr = shortStr.split('')
//     arr.splice(arr.indexOf(shortStr),1)
//      for(let i=0;i<shortStrArr.length;i++){
//          if(arr.every((item,index)=>{
//             // return item.indexOf(shortStrArr[i]) == i //indexOf永远只会返回发现第一个的下标
//              return item.split('')[i] == shortStrArr[i]
//          })){
//              result[i] = shortStrArr[i]
//          } else {
//              return result.join('') 
//          }
//      }

//  }
//  console.log(findPrix(arr))


/**
 * 020 有效的括号
 * 
 */

 let str = '(){}['

 function isValid(s){
     let judge = {
         '[':']',
         '{':'}',
         '(':')'
     }

     let arr = s.split('')
     let stack = []

     for(let i=0;i<arr.length;i++){
         if(arr[i] === judge[stack[stack.length - 1]]){
            stack.pop()
         } else {
             stack.push(arr[i])
         }
     }

     if(stack.length){
         return false
     }

     return true
 }

 console.log(isValid(str))