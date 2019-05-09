/**
 * 给定一个英语字典，找出其中所有变位词集合。
 * 例如：“posts”, "stop", "tops" 互为变位词
 */
const getAnagram = (data) => {
  let map = new Map()
  for (let item of data) {
    let newItem = []
    let temp = item.split('')
    temp.sort((a, b) => a > b)
    temp = temp.join('')
    if (map.get(temp) == undefined) {
      newItem.push(item)
    } else {
      let newTemp = map.get(temp)
      newItem = newTemp
      newItem.push(item)
    }
    map.set(temp, newItem)
  }
  return map
}

const data = ['post', 'tops', 'sopt', 'asdv', 'sdva', 'sdw', 'dws', 'sow']

console.log(getAnagram(data))