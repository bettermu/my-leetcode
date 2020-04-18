
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

//  let str = '(){}['

//  function isValid(s){
//      let judge = {
//          '[':']',
//          '{':'}',
//          '(':')'
//      }

//      let arr = s.split('')
//      let stack = []

//      for(let i=0;i<arr.length;i++){
//          if(arr[i] === judge[stack[stack.length - 1]]){
//             stack.pop()
//          } else {
//              stack.push(arr[i])
//          }
//      }

//      if(stack.length){
//          return false
//      }

//      return true
//  }

//  console.log(isValid(str))



/**
 * 696 计算二进制子串
 * 
 */


//  var arr = [1,1,2,2,2,2]
//  var min = 10
//  var result =[]

   

//    for(var i=0 ,len = arr.length,tmp = [];i<len;i++){
//      tmp.push(arr[i])
//      for(var j=i+1;j<len - 1;j++){
//        //如果相同
//         if(arr[i]===arr[j]){
//           tmp.push(arr[j])
//           console.log(tmp)
//         } else {
//           if(min > tmp.length){
//             min = tmp.length
//             console.log(min)
//           }
//           result.push(tmp.slice())
//           tmp = []
//           i = j
//           break;
//         }
//        //如果不相同
//      }
//    }

//    console.log(result)

/**
 * 605 种花问题
 * 
 */

//  var arr = [0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1]

//  var n = 4

//  function can(arr,n){
//    var m =0
//    for(var i =0;i<arr.length-1;i++){
//      if(arr[i]===0){
//        if( i===0 && arr[1]===0){
//          m++
//          i+=1
//        }else if(arr[i-1]===0 && arr[i+1]===0) {
//         m++
//         i+=1
      
//       }

//      }
//    }
//    console.log(m)
//    if(m >= n){
//           console.log("可以种下啦")
//         } else {
//           console.log("ohh,种不下这么多")
//         }
//  }

//  can(arr,n)

// function can(arr,n) {
//   var m = 0
//   for(var i=0;i<arr.length;i++){
//     if(i === 0){
//       if(arr[i]===0 && arr[i+1]===0){
//         arr[i] = 1
//         m = m+1
//       }
//     }else if(i===arr.length -1){
//       if(arr[i-1]===0 && arr[i]===0){
//         arr[i] = 1
//         m = m+1
//       }
//     } else {
//       if(arr[i]===0 && arr[i-1]===0 && arr[i+1]===0 ){
//         arr[i] = 1
//         m = m+1
//       }
//     }
//   }
//    if(m >= n){
//      console.log("可以种下啦")
//    } else {
//      console.log("ohh,种不下这么多")
//    }
// }

// can(arr,n)


/** 
 * 026 删除排序数组中的重复项,并返回新数组的长度
*/
 
// var arr = [0,0,0,1,1,1,2,2,2]

// var delRepeat = function(arr){
//   for(var i=0;i<arr.length;i++){
//     if(arr[i]===arr[i+1]){
//       arr.splice(i,1)
//       i--
//     }
//   }
//   return arr.length
// }

// console.log(delRepeat(arr))


/**
 * 027 移除数组中的元素
 */

// var nums = [0,1,2,2,3,0,4,2]
// var val = 2

// function removeRepeat(arr,val){
//   for(var i=0;i<arr.length;i++){
//     if(arr[i]==val){
//       arr.splice(i,1)
//       i--
//     }
//   }
//   return arr
// }

// console.log(removeRepeat(nums,2))


/**
 * 028 实现strStr  字符串有substring的方法用来截取
 */


//  var haystack = "hello"
//  var needle = "ll"

//  function strStr(source,target){

//   if(!source &&!target){
//     return 0
//   }

//    for(var i=0;i<source.length;i++){
//      if(source.substring(i,i+target.length)===target){
//        return i
//      }
//    }

//    return -1
//  }

//  console.log(strStr(haystack,needle))

/**
 * 029 搜索插入位置  循环  二分法
 */

//  var arr = [1,3,5,6]
//  var target = 2

 // 1  循环破解

//  function researchArr(arr,target){
//   for(var i=0;i<arr.length;i++){
//     if(arr[i]>=target){
//       return i
//     }
//   }
//   return arr.length
//  }

//  console.log(researchArr(arr,target))

//2 二分法破解

// function researchArr(arr,target){
//   var left = 0
//   var right = arr.length

//   while(left<right){
//     var middle = Math.floor((left + right)/2)
//     if(arr[middle] === target){
//       return middle
//     }else if(arr[middle]<target){
//       left = middle + 1
//     }else {
//       right = middle - 1
//     }
//   }
//   return left
  
// }

// console.log(researchArr(arr,target))

 
//递归数组求和

// var arr = [1,2,3,4]
// var result = 0

// function sum(arr){
//   var len = arr.length

//   if(arr.length === 0){
//     return 0
//   } else if(arr.length === 1){
//     return arr[0]
//   }else {
//     return arr[0] + sum(arr.slice(1))
//   }
  
// }
// console.log(sum(arr))

//递归求数组元素个数
// var arr = [1,2,3,4]
// var result = 0

// function sum(arr){
//   var len = arr.length

//   if(arr.length === 0){
//     return 0
//   } else if(arr.length === 1){
//     return 1
//   }else {
//     return 1 + sum(arr.slice(1))
//   }
  
// }
// console.log(sum(arr))

//归并排序  递归  分治的思想  将大数组分解成小数组  直至数组元素之间可直接比较，再比较进行数组合成  效率比冒泡  选择  要高

// var arr = [8,7,6,5,4,3,2,1]

// function mergeSort(arr){
//   if(arr.length > 1){
//     var len = arr.length
//     var mid = Math.floor(len/2)
//     var left = mergeSort(arr.slice(0,mid))
//     var right = mergeSort(arr.slice(mid,len))
//     arr = merge(left,right)
//   }
//   return arr
// }

// function merge(left,right){
//   var i = 0
//   var j = 0;
//   var result = []
//   while(i<left.length && j<right.length){
//     result.push(left[i]>right[j]?right[j++]:left[i++])
//   }
//   return result.concat(i<left.length? left.slice(i):right.slice(j))
// }

// console.log(mergeSort(arr))


//快速排序

// var arr = [8,7,6,5,4,3,2,1]

// function quickSort(arr){
  
//   if(arr.length>1){
//     var mid = arr.splice(Math.floor(arr.length/2),1)
//     var len = arr.length
//     var left = []
//     var right = []
//     for(var i=0;i<len;i++){
//       if(arr[i]<=mid){
//         left.push(arr[i])
//       }else if (arr[i]>mid){
//         right.push(arr[i])
//       }
//     }
//     return quickSort(left).concat(mid,quickSort(right))
//   }
//   return arr
// }

// console.log(quickSort(arr))


/** 
 * 058 最后一个单词的长度
 * 
 * */ 

// var str = 'Hello World'
// function lastWordLen(s){
//   var str = s.replace(/(\s*$)/g,"")
//   var arr = str.split(' ')
//   return arr[arr.length - 1].length
// }
// console.log(lastWordLen(str))


/**
 * 066 加一算法
 */

//  var arr = [9,9,9,9]

//  function addDigit(arr){
//    for(var i=arr.length-1;i>=0;i--){
//       arr[i]++
//       arr[i] = arr[i] % 10 
//       if(arr[i]>0){  //如果不需要进位 直接return  否则，取前一位继续+1
//         return arr
//       }

//    }

//    return [1].concat(arr)  //当所有位数上都是 0 时  则往前补1  比如  999 => 1000
//  }

//  console.log(addDigit(arr))


/**
 * 070 爬楼梯  不用递归 递归有性能损耗
 * 思路 利用数组进行缓存  每一项的值都等于前两项的和
 */

//  function manyChairs(n){
//    if(n ===1 || n===2){
//      return n
//    }
//    var memory = [1,2]
//    for(var i=2;i<=n;i++){
//      memory[i] = memory[i-1] + memory[i-2]
//    }
//    return memory[n]
//  }

//  console.log(manyChairs(50))


/** 
 * 088 合并两个有序数组
 */

 //var arr1 = [2,4,6,8]
 //var arr2 = [1,3,5,7,9]

//  // sort方法
//  function mergeArr(arr1,arr2){

//    return [].concat(arr1,arr2).sort()
//  }

//  console.log(mergeArr(arr1,arr2))

// 双指针解法

// function merge(arr1,arr2){
//   var count1 = 0
//   var count2 = 0
//   var len1= arr1.length
//   var len2 = arr2.length
//   var arr= []
//   while(count1<len1 && count2<len2){
//     if(arr1[count1]<arr2[count2]){
//       arr.push(arr1[count1])
//       count1++
//     } else{
//       arr.push(arr2[count2])
//       count2++
//     }
//   }

//   if(count1 < len1){
//     arr = arr.concat(arr1.slice(count1,len1))
//   }

//   if(count2 < len2){
//     arr = arr.concat(arr2.slice(count2,len2))
//   }

//   return arr
// }

// console.log(merge(arr1,arr2))

/** 
 * 100 相同的树，深度优先遍历
 * 思路  深度优先  递归遍历  return 顺序结构的val字符串即可
 */

// var p = {
//   val: 1,
//   left: {
//     val: 2,
//     left: null,
//     right: null,
//   },
//   right: {
//     val: 1,
//     left: null,
//     right: null,
//   },
// }

// var q = {
//   val: 1,
//   left: {
//     val: 1,
//     left: null,
//     right: null,
//   },
//   right: {
//     val: 2,
//     left: null,
//     right: null,
//   },
// }

// 字符串拼接解法

// function isSameTree(p,q){
//   function serialize(root){
//     if(!root){
//       return '#'
//     }
//     return root.val + '!' + serialize(root.left) + '!' + serialize(root.right)
//   }

//   return serialize(p) === serialize(q)
// }

// 常规 比较解法

// function isSameTree(p,q){
//   if(p === null && q === null){ //当两者都是Null时  相同
//     return true
//   }
//   if(p === null || q=== null){ //一个为空  一个不为空  返回false
//     return false
//   }
//   if(p.val !== q.val){ //如果根节点val值  
//     return false   
//   }
//   return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
// }

// console.log(isSameTree(p,q))


/**
 *  101 对称二叉树判断
 * 思路：与相同的二叉树类似，不过我们需要对左右两侧节点，分别进行字符串化，
 * 不过与相同的节点不同的是，
 * 我们需要对右侧节点进行左右颠倒的遍历
 */

// let root = {
//   val: 1,
//   left: {
//     val: 2,
//     left: { val: 3, left: null, right: null, },
//     right: { val: 4, left: null, right: null, },
//   },
//   right: {
//     val: 2,
//     left: { val: 4, left: null, right: null, },
//     right: { val: 3, left: null, right: null, }
//   },
// }

// function isSymmetricTree(root){
//   if(!root){
//     return true
//   }
//   var leftTree = root.left
//   var rightTree = root.right

//   function leftSerialize(root){
//     if(!root){
//       return '!'
//     }

//     return root.val + '!' + leftSerialize(root.left) + '!' + leftSerialize(root.right)
//   }

//   function rightSerialize(root){
//     if(!root){
//       return '!'
//     }
//     // 关键的地方  需对右侧节点进行左右颠倒的遍历输出
//     return root.val + '!' + rightSerialize(root.right) + '!' + rightSerialize(root.left)
//   }

//   return leftSerialize(leftTree) === rightSerialize(rightTree)
// }

// console.log(isSymmetricTree(root))