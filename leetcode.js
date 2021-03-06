
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



/**
 * 104 二叉树的最大深度
 * 思路：每次遍历  当前深度值与 缓存的最大深度值 比较，如果前者大于后者，则置换
 */

// let root = {
//   val: 3,
//   left: { val: 9, left: null, right: null, },
//   right: {
//     val: 20,
//     left: { val: 15, left: null, right: null },
//     right: { val: 7, left: null, right: null },
//   },
// }

// function maxDeepth(root){
//   if(!root){
//     return 0
//   }
//   var longest = 1

//   var find = function(root,depth){
//     if(!root){
//       return depth
//     }
//     if(root.left || root.right){
//       depth +=1
//       if(depth > longest){
//         longest = depth
//       }
//       find(root.left,depth)
//       find(root.right,depth)
//     }
//   }

//   find(root,1)
//   return longest

// }

// console.log(maxDeepth(root))




/**
 * 107 二叉树 层次遍历
 */

// let root = {
//   val: 3,
//   left: { val: 9, left: null, right: null, },
//   right: {
//     val: 20,
//     left: { val: 15, left: null, right: null },
//     right: { val: 7, left: null, right: null },
//   },
// };


// function traversal(root){
//   if(!root){
//     return []
//   }
//   let result = []

//   function find(root,depth){
//     if(!root){
//       return
//     }
//     if(root.val!==null){
//       if(!result[depth]){
//         result[depth] = []
//       }
//       result[depth] = [root.val,...result[depth]]
//       depth +=1
//       find(root.left,depth)
//       find(root.right,depth)
//     }
//   }

//   find(root,0)

//   return result.reverse()
// }

// console.log(traversal(root))



/**
 * 108 有序数组 转换二叉树
 * 思路：对数组二分，后序遍历
 */

// var nums = [-10, -3, 0, 1, 5, 9]

// function arrToTree(arr){

//   if(!arr.length){
//     return null
//   }

//   var mid = Math.floor(arr.length/2)

//   var root = {
//     val:arr[mid],
//     left:arrToTree(arr.slice(0,mid)),
//     right:arrToTree(arr.slice(mid+1,arr.length))
//   }
//   return root

// }

// console.log(arrToTree(nums))



/**
 * 
 * 111 二叉树的最小深度
 * 思路 递归实现  终止条件  该节点为叶节点  直接return 0 
 */

//  var root = {
//   val: 3,
//   left: { val: 9, left: null, right: null },
//   right: {
//     val: 20,
//     left: { val: 15, left: null, right: null },
//     right: { val: 7, left: null, right: null },
//   },
// }

// function minDepth(root){
//   if(!root){
//     return 0
//   }
//   if(!root.left){
//     return minDepth(root.right)+1
//   }
//   if(!root.right){
//     return minDepth(root.left)+1
//   }
//   return Math.min(minDepth(root.left),minDepth(root.right))+1
// }

// console.log(minDepth(root))


/**
 * 
 * 112 路径总和
 * 思路 ：分治法，动态规划，后面路径节点的总和 一定是等于总和减去当前节点的val
 */

// const root = {
//   val: 5,
//   left: {
//     val: 4,
//     left: {
//       val: 11,
//       left: { val: 7, left: null, right: null },
//       right: { val: 2, left: null, right: null },
//     },
//     right: null,
//   },
//   right: {
//     val: 8,
//     left: { val: 13, left: null, right: null },
//     right: {
//       val: 4,
//       left: null,
//       right: { val: 1, left: null, right: null },
//     }
//   }
// }

// function findMinPath(root,sum){
//   if(!root){
//     return false
//   }
//   sum = sum - root.val
//   if(!root.left && !root.right){
//     return sum === 0
//   }

//   return findMinPath(root.left,sum) || findMinPath(root.right,sum)  //左右只要有一条符合 便可

// }

// console.log(findMinPath(root,23))


/**
 * 118 杨辉三角
 * 思路：两边是1 固定不变，将每一步的中间数组，计算出来，进行缓存，return结果 递归实现
 * 当前数组是由前一步数组计算而来  
 */

// function create(rows){
//   if(rows === 0){
//     return 0
//   }
//   if(rows === 1){
//     return [[1]]
//   }
  
//   var fullResult = [
//     [1],
//     [1,1]
//   ]

//   function recursion(rows){
//     if(rows === 2){
//       return fullResult[1]
//     }

//     var prevArr = recursion(rows - 1)
//     var result = []
//     for(var i=0;i<prevArr.length;i++){
//       if(prevArr[i] && prevArr[i+1]){
//         result.push(prevArr[i]+prevArr[i+1])
//       }
//     }
//     result = [1,...result,1]
//     fullResult.push(result)
//     return result
//   }
//   recursion(rows)
//   return fullResult
// }

// console.log(create(20))


/**
 * 
 * 119 杨辉三角II 返回第 n 行的数组 n<=33
 * 思路: 与上例类似，不过直接返回当前行的数组，无需做全局的缓存
 */

//  function getIndex(row){
//    if(row === 1){
//      return [[1]]
//    }
//    if(row === 2){
//      return [1,1]
//    }

//    var prev = getIndex(row - 1)
//    var result =[]
//    for(var i=0;i<prev.length;i++){
//      if(prev[i] && prev[i+1]){
//        result.push(prev[i]+prev[i+1])
//      }
//    }
//    result = [1,...result,1]
//    return result
//  }

//  console.log(getIndex(5))


/**
 * 121 买卖股票最佳时机 
 */

//var days = [7,1,5,3,6,4]

//暴力破解法  双层循环，类似冒泡排序  复杂度O(n²)

// function findMax(arr){
//   var max = 0
//   for(var i=0;i<arr.length-1;i++){
//     for(var j = i+1;j<arr.length;j++){
//       var temp = arr[j] - arr[i]
//       if(temp > max){
//         max = temp
//       }
//     }
//   }
//   return max
// }

// 机遇破解法  复杂度O(n)
// function findMax(arr){
//   var min = Number.MAX_VALUE
//   var max = 0
//   for(var i=0;i<arr.length;i++){
//     if(arr[i]<min){
//       min = arr[i]  //将最小值赋值
//     }else if(arr[i] - min > max){
//       max = arr[i] - min //如果利润比当前大 则置换
//     }
//   }
//   return max
// }

// console.log(findMax(days))

/**
 * 125 验证回文字符串
 * 思路：使用正则替换掉除了数字字母以外的内容，再统一字母大小写，通过字符串数组的方法来验证
 */

 // JS api破解

//var str = 'A man, a plan, a canal: Panama'

//  function isRepeat(str){
//    str = str.replace(/[^A-Za-z0-9]/g,'').toLocaleLowerCase()
//    var rStr = str.split('').reverse().join('')
//    return str === rStr
//  }

//  console.log(isRepeat(str))

//双指针破解

// function isRepeat(str){
//   str = str.replace(/[^a-zA-Z0-9]/g,'').toLocaleLowerCase()
//   for(var i=0;i<str.length/2;i++){
//     if(str[i]!==str[str.length-1-i]){
//       return false
//     }
//   }
//   return true
// }

// console.log(isRepeat(str))


/**
 * 136 只出现一次的数字
 * 思路：双指针
 */

//  var arr = [3,4,3,4,5,6,5,6,7,9,8,9,8]

//  function findOnceNum(arr){
//    arr.sort()
//    for(var i=0;i<arr.length;i++){
//      if(arr[i] === arr[i+1]){
//        i++
//      }else {
//        return arr[i]
//      }
//    }
//  }

//  console.log(findOnceNum(arr))


/**
 * 167 两数之和II
 */
//var arr = [2,7,11,13]
//双重遍历

//  function find(arr,target){
//   for(var i=0;i<arr.length-1;i++){
//     var left = target - arr[i]
//     for(var j = i+1;j<arr.length;j++){
//       if(arr[j]===left){
//         return [i+1,j+1]
//       }
//     }
//   }
//   return []
//  }

// map解法
// function find(arr,target){
//   var map = new Map()
//   for(var i=0;i<arr.length;i++){
//     if(map.get(arr[i])!==undefined){
//       return [map.get(arr[i]),i+1]
//     }else {
//       map.set(target - arr[i],i+1)
//     }
//   }
//   return []
// }

//  console.log(find(arr,9))


/**
 * 168 excel表格名称
 */

//  let dict = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
//  'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

//  function coverTitle(n){
//    let res = ''
//    while(n!=0){
//      n--;
//      let c = n % 26
//      res += dict[c]
//      n = parseInt(n / 26)
//    }
//    return res
//  }

//  console.log(coverTitle(512))


/**
 * 169  求众数    
 * 求一个数组中，元素出现次数超过该数组长度的一半的元素
 * 思路  利用map对象进行元素次数缓存
 */

//  let arr = [1,1,2,2,2,2,1]

//  function findMore(arr){
//    var map = new Map()

//    for(var i=0;i<arr.length;i++){
//      if(map.get(arr[i]) !== undefined){
//        map.set(arr[i],map.get(arr[i])+1)
//        if(map.get(arr[i]) > arr.length / 2){
//          return arr[i]
//        }
//      } else {
//        map.set(arr[i],1)
//        if(map.get(arr[i]) > arr.length / 2){  //这里预防数组长度为1的情况
//         return arr[i]
//       }
//      }
//    }
//  }

//  console.log(findMore(arr))



/**
 * 
 * 171 excel列表序号
 * 思路  map记录 集合 递归  逆序实现  26进制算法
 */

 function findNum(s){
   var map = new Map()
   map.set('A', 1);
  map.set('B', 2);
  map.set('C', 3);
  map.set('D', 4);
  map.set('E', 5);
  map.set('F', 6);
  map.set('G', 7);
  map.set('H', 8);
  map.set('I', 9);
  map.set('J', 10);
  map.set('K', 11);
  map.set('L', 12);
  map.set('M', 13);
  map.set('N', 14);
  map.set('O', 15);
  map.set('P', 16);
  map.set('Q', 17);
  map.set('R', 18);
  map.set('S', 19);
  map.set('T', 20);
  map.set('U', 21);
  map.set('V', 22);
  map.set('W', 23);
  map.set('X', 24);
  map.set('Y', 25);
  map.set('Z', 26);

  var result = 0 //结果记录
  var time = 0 // 位数记录

  function cover(s){
    var n = s.shift()
    if(n!==undefined){
      result += map.get(n) * Math.pow(26,time)
      time ++
      cover(s)
    }
  }

  cover(s.split("").reverse())
  return result
 }

 console.log(findNum("ZZ"))

