//find 找到第一个就会返回整个元素，后面的不执行。
const list = [
    { hobby: '吃饭', id: 1 },
    { hobby: '睡觉', id: 1 },
    { hobby: '敲代码', id: 1 },
    { hobby: '吃饭', id: 2 },
    { hobby: '睡觉', id: 3 },
    { hobby: '睡觉', id: 3 },
    { hobby: '睡觉', id:  2},
  ];

const result=list.find((item)=>{
    return item.hobby ==='吃饭'
})

//返回下标
const result1=list.findIndex((item)=>{
    return item.hobby ==="睡觉"
})

console.log(result,result1)

//filter  过滤，返回所有符合条件的一个数组
const result2=list.filter((item)=>{
    return item.hobby==='睡觉'
})

console.log(result2)


//map 
const list1=list.map((i)=>{
    return {
        action:i.hobby,
        state:i.id >2?'喜欢':'不喜欢'
    }
})
console.log(list1)


//reduce
const arr=[1,2,3,4]
const sum=arr.reduce((x,y)=>{return x+y})
const mul=arr.reduce((x,y)=>{return x*y})
console.log(sum,mul)

//计算出现次数
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let nameNum = names.reduce((pre,cur)=>{
  if(cur in pre){
    pre[cur]++
  }else{
    pre[cur] = 1 
  }
  return pre
},{})
console.log(nameNum);

//数组去重
let arr1 = [1,2,3,4,4,1]
let newArr = arr1.reduce((pre,cur)=>{
    if(!pre.includes(cur)){
      return pre.concat(cur)
    }else{
      return pre
    }
},[])
console.log(newArr)

/* let arr = [1,2,2,3,4,4,4];
let s = new Set(arr);
let newArr = Array.from(s); */


//mpa
let m = new Map()
m.set([1,2],'张三')
console.log(m)


//object.is
let a = { aa: 1, bb: 2 };
let b = { aa: '1' };
let c = Object.assign(b, a);
console.log(c);