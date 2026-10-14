                                        // 1
function getIntervalArray(start, end) {
    let res = []

    for (i = start; i <= end; ++i) {
        res.push(i)
    }
    console.log(res)
}
function getIntervalArray2(start, end) {
    let s = Array(end - start + 1).fill().map((_, index) => start + index);
    console.log(s)
}
// getIntervalArray(1, 5)
// getIntervalArray(-2,2)
// getIntervalArray(0, 100)
// getIntervalArray(3,3)
// getIntervalArray2(1, 5)
// getIntervalArray2(-2,2)
// getIntervalArray2(0, 100)
// getIntervalArray2(3,3)
                                    // 2

function sumArrays(arr1, arr2) {
    let result = [];
    let maxLength = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < maxLength; i++) {
        const num1 = arr1[i] ?? 0;
        const num2 = arr2[i] ?? 0;
        result.push(num1 + num2);
    }
    console.log(result)
}
function sumArrays2(arr1, arr2) {
    let maxLength = Math.max(arr1.length, arr2.length)
    let baseArray = Array(maxLength).fill(0)
    console.log(baseArray.map((_, i) => {
        let num1 = arr1[i] || 0
        let num2 = arr2[i] || 0
        return (num1 + num2)
    }))
}
// sumArrays([1, 2, 3], [4, 5, 6])
// sumArrays([10, 20, 30], [5, 10, 15])
// sumArrays([-1, 0, 1], [1, 2, 3, 4])
// sumArrays2([1, 2, 3], [4, 5, 6])
// sumArrays2([10, 20, 30], [5, 10, 15])
// sumArrays2([-1, 0, 1], [1, 2, 3, 4])

                                            // 3

function findElement(arr, value) {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
        return i;
    }
    }
    return -1
}
function findElement2(arr, value) {
    return arr.indexOf(value);
}

// console.log(findElement(['Ace', 10, true], 10))
// console.log(findElement(['Array', 'Number', 'string'], 'Date'))
// console.log(findElement([0, 1, 2, 3, 4, 5], 5))
// console.log(findElement2(['Ace', 10, true], 10))
// console.log(findElement2(['Array', 'Number', 'string'], 'Date'))
// console.log(findElement2([0, 1, 2, 3, 4, 5], 5))

                                            // 4
function findAllOccurrences(arr,  item) {
    let count = 0
    
    for (let element of arr) {
        if (element === item) {
            count++
        }
    }
    
    console.log(count)
}
function findAllOccurrences2(arr, item) {
    let s =  arr.filter(element => element === item).length
    console.log(s)
}
// findAllOccurrences([ 0, 0, 1, 1, 1, 2 ], 1)
// findAllOccurrences([ 1, 2, 3, 4, 5 ], 0)
// findAllOccurrences([ 'a','b','c','c' ], 'c')
// findAllOccurrences([ null, undefined, null ], null)
// findAllOccurrences([ true, 0, 1, 'true' ], true)
// findAllOccurrences2([ 0, 0, 1, 1, 1, 2 ], 1)
// findAllOccurrences2([ 1, 2, 3, 4, 5 ], 0)
// findAllOccurrences2([ 'a','b','c','c' ], 'c')
// findAllOccurrences2([ null, undefined, null ], null)
// findAllOccurrences2([ true, 0, 1, 'true' ], true)

                                            // 5
function removeFalsyValues(arr) {
    let result = [];
  
    for (let item of arr) {
        if (item) {
            result.push(item);
        }
    }
    
    console.log(result)
}
function removeFalsyValues2(arr) {
    console.log(arr.filter(Boolean))
}
// removeFalsyValues([ 0, false, 'cat', NaN, true, '' ])
// removeFalsyValues([ 1, 2, 3, 4, 5, 'false' ])
// removeFalsyValues([ false, 0, NaN, '', undefined ])
// removeFalsyValues2([ 0, false, 'cat', NaN, true, '' ])
// removeFalsyValues2([ 1, 2, 3, 4, 5, 'false' ])
// removeFalsyValues2([ false, 0, NaN, '', undefined ])

                                                    // 6
function getStringsLength(arr) {
    let lengths = []
    for (i = 0; i < arr.length; i++) {
        lengths.push(arr[i].length)
    }
    console.log(lengths)
}
function getStringsLength2(arr) {
    console.log(arr.map(str => str.length))
}
// getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ])
// getStringsLength([ 'angular', 'react', 'ember' ])
// getStringsLength2([ '', 'a', 'bc', 'def', 'ghij' ])
// getStringsLength2([ 'angular', 'react', 'ember' ])


                                                // 7
function getAverage(arr) {
    if(arr.length === 0){
        return 0 
    }
    let sum = 0
    for (i = 0; i < arr.length; ++i){
        sum += arr[i]
    }
    return (sum /  arr.length).toFixed(2)
}
function getAverage2(arr) {
    if (arr.length === 0) {
        return 0
    }
    let sum = arr.reduce((acc, val) => acc + val, 0);
    return Number((sum / arr.length).toFixed(2))
}
// console.log(getAverage([]))
// console.log(getAverage([ 1, 2, 3 ]))
// console.log(getAverage([ -1, 1, -1, 1 ]))
// console.log(getAverage([ 1, 10, 100, 1000 ]))
// console.log(getAverage([ 2, 3, 3 ]))
// console.log(getAverage2([]))
// console.log(getAverage2([ 1, 2, 3 ]))
// console.log(getAverage2([ -1, 1, -1, 1 ]))
// console.log(getAverage2([ 1, 10, 100, 1000 ]))
// console.log(getAverage2([ 2, 3, 3 ]))

                                                    // 8
function isSameLength(arr) {
    if(arr.length <= 1){
        return true
    }
    let main = arr[0].length
    for(let word of arr){
        if(word.length !== main){
            return false
        }
    }
    return true
}
function isSameLength2(arr) {
    if (arr.length <= 1) {
        return true
    }
    return arr.every((word) => word.length === arr[0].length)
}
// console.log(isSameLength(['orange', 'banana', 'cherry']))
// console.log(isSameLength(['cat', 'dog', 'elephant']))
// console.log(isSameLength2(['orange', 'banana', 'cherry']))
// console.log(isSameLength2(['cat', 'dog', 'elephant']))

                                                    // 9
function isValueEqualsIndex(arr) {
    for(i = 0; i < arr.length; ++i){
        if(arr[i] === i){
            return true
        }
    }
    return false
}
function isValueEqualsIndex2(arr) {
    return arr.some((element, i) => element === i)
}
// console.log(isValueEqualsIndex([0, 1, 2, 3, 4]))
// console.log(isValueEqualsIndex([2, 1, 0, 4, 5]))
// console.log(isValueEqualsIndex([10, 20, 30, 40, 50]))
// console.log(isValueEqualsIndex2([0, 1, 2, 3, 4]))
// console.log(isValueEqualsIndex2([2, 1, 0, 4, 5]))
// console.log(isValueEqualsIndex2([10, 20, 30, 40, 50]))

                                                        // 10

function insertItem2(arr, item , index) {
    arr.splice(index,  0, item)
    console.log(arr)
}
function insertItem(arr, item, index) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (i === index) {
            result.push(item)
        }
        result.push(arr[i])
    }
    if (index >= arr.length) {
        result.push(item)
    }
    
    console.log(result)
}
// insertItem([ 1, 3, 4, 5 ], 2, 1)
// insertItem([ 1, 'b', 'c'], 'x', 0)
// insertItem2([ 1, 3, 4, 5 ], 2, 1)
// insertItem2([ 1, 'b', 'c'], 'x', 0)

                                                // 11
function getHead(arr, number) {
    let neww  = []
    for(i = 0; i < number; ++i){
        neww.push(arr[i])
    }
    console.log(neww)
}
function getHead2(arr, number) {
    if (number <= 0){
        return []
    }
    return arr.slice(0, number)
}
// getHead([ 1, 3, 4, 5 ], 2)
// getHead([ 'a', 'b', 'c', 'd'], 3)
// getHead([ 'a', 'b', 'c', 'd'], 0)
// console.log(getHead2([ 1, 3, 4, 5 ], 2))
// console.log(getHead2([ 'a', 'b', 'c', 'd'], 3))
// console.log(getHead2([ 'a', 'b', 'c', 'd'], 0))

                                                // 12
function getTail(arr, number) {
    let  s = arr.reverse()
    let neww  = []
    for(i = 0; i < number; ++i){
        neww.push(s[i])
    }
    console.log(neww.reverse())
}
function getTail2(arr, n) {
    if (n === 0){
        return []
    } 
    return arr.slice(-n)
}

// getTail([ 1, 3, 4, 5 ], 2)
// getTail([ 'a', 'b', 'c', 'd'], 3)
// getTail([ 'a', 'b', 'c', 'd'], 0)
// console.log(getTail2([ 1, 3, 4, 5 ], 2))
// console.log(getTail2([ 'a', 'b', 'c', 'd'], 3))
// console.log(getTail2([ 'a', 'b', 'c', 'd'], 0))

                                                // 13

function doubleArray(arr) {
    let neww = []
    for(i =  0; i < arr.length; ++i){
        neww.push(arr[i])
    }
    console.log(arr.concat(neww))
}
function doubleArray2(arr) {
    let result = []
    for (i = 0; i < arr.length; i++) {
        result.push(arr[i])
    }
    for (i = 0; i < arr.length; i++) {
        result.push(arr[i])
    }
    console.log(result)
}
// doubleArray(['Ace', 10, true])
// doubleArray([0, 1, 2, 3, 4, 5])
// doubleArray([])
// doubleArray2(['Ace', 10, true])
// doubleArray2([0, 1, 2, 3, 4, 5])
// doubleArray2([])
                                                // 14

function toStringList(arr) {
    console.log(arr.toString())
}
function toStringList2(arr) {
    if (arr.length === 0) {
        return ''
    }
    let result = String(arr[0])
    for (let i = 1; i < arr.length; i++) {
        result += ',' + arr[i]
    }
    console.log(result)
}
// toStringList([0, false, 'cat', NaN, true, ''])
// toStringList([1, 2, 3, 4, 5])   
// toStringList(['rock', 'paper', 'scissors'])
// toStringList2([0, false, 'cat', NaN, true, ''])
// toStringList2([1, 2, 3, 4, 5])
// toStringList2(['rock', 'paper', 'scissors'])

                                                // 15

function distinct(arr) {
    let res = []
    for(i = 0; i < arr.length; ++i){
        let isUni = true
        for(j = 0; j < res.length; ++j){
            if(arr[i] === res[j]){
                isUni = false
                break
            }
        }
        if(isUni){
            res.push(arr[i])
        }
    }
    console.log(res)
}
function distinct2(arr) {
    console.log([...new Set(arr)])
}
// distinct([ 1, 2, 3, 3, 2, 1 ])
// distinct([ 'a', 'a', 'a', 'a' ])
// distinct([ 1, 1, 2, 2, 3, 3, 4, 4])
// distinct([])
// distinct2([ 1, 2, 3, 3, 2, 1 ])
// distinct2([ 'a', 'a', 'a', 'a' ])
// distinct2([ 1, 1, 2, 2, 3, 3, 4, 4])
// distinct2([])

                                            // 16

