const a = { xd: '小滴课堂' };
const list = [];
const obj = {};
const set = new Set();
const map = new Map();

//增加
list.push(a);
obj['xd'] = '小滴课堂';
set.add(a);
map.set('xd', '小滴课堂');
console.log(list, obj, set, map);

// 查询
const resList = list.includes(a);
const resobj = 'xd' in obj;
const resSet = set.has(a);
const resMap = map.has('xd');
console.log(resList, resobj, resSet, resMap);

//修改
list.forEach(function (i) {
  i.xd = i.xd ? 'xdclass.net' : '';
});
obj.xd = 'xdclass.net';
set.forEach(function (i) {
  i.xd = i.xd ? 'xdclass.net' : '';
});
map.set('xd', 'xdclass.net');
console.log(list, obj, set, map);

//删除
const index = list.findIndex(function (i) {
  return i.xd === '小滴课堂';
});
list.splice(index, 1);
delete obj.xd;
set.delete(a);
map.delete('xd');
console.log(list, obj, set, map);

// 对象转map
const obj = { xd: '小滴课堂', website: 'xdclass.net' };
const map = new Map(Object.entries(obj));
console.log(map);
// map转对象
const obj1 = Object.fromEntries(map);
console.log(obj1);

// 数组转set
const list = [1, 2, 3];
const set = new Set(list);
console.log(set);

// set转数组
const list1 = Array.from(set);
console.log(list1);