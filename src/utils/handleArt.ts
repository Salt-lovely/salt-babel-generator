/*
 * @Author: Salt
 * @Date: 2022-09-04 15:24:18
 * @LastEditors: Salt
 * @LastEditTime: 2022-09-04 16:14:38
 * @Description: 这个文件的功能
 * @FilePath: \salt-babel-generator\src\utils\handleArt.ts
 */
import { uuidV4 } from 'salt-lib'

interface Article<T extends { [key: string]: string }> {
  entires: [keyof T, string][]
  generator: (prop: Partial<T>) => string
}

const getId = (str: string | number) => '<<' + uuidV4() + '-' + str + '>>'

const getSlot = (str: string): null | [string, string, string] => {
  const matched = str.match(/\{\{\s*([^}|]+?)((:?\s*\|\s*)([^}]+?))?\s*\}\}/)
  if (!matched) return null
  const matchedStr = matched[0]
  const key = matched[1]
  const defaultValue = matched[3] || ''
  return [matchedStr, key, defaultValue]
}

export function parseArt<T extends { [key: string]: string }>(
  str: string
): Article<T> {
  let safe = 1000
  let slot: null | [string, string, string] = null
  let res = str
  const map = {} as { [key in keyof T]: { id: string; defaultValue: string } }
  while ((slot = getSlot(str)) && safe--) {
    const [ms, key, d] = slot
    if (!(key in map)) {
      // 新的槽
      map[key as keyof T] = { id: getId(key), defaultValue: d }
    } else if (d && !map[key].defaultValue) {
      // 重复的槽，但是之前没有获取到默认值
      map[key].defaultValue = d
    }
    res = res.replace(ms, map[key].id)
  }
  // 统计完毕
  const keys = Object.keys(map) as Array<keyof T>
  const entires: [keyof T, string][] = keys.map(
    (key) => [key, map[key].defaultValue] as [keyof T, string]
  )
  const generator = (prop: Partial<T>): string => {
    let out = res
    for (const [key, defaultValue] of entires) {
      const { id } = map[key]
      const replaceValue = key in prop ? prop[key] || '' : defaultValue
      out = out.split(id).join(replaceValue)
    }
    return out
  }
  console.log(res)
  return { entires, generator }
}
