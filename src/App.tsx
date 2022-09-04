/*
 * @Author: Salt
 * @Date: 2022-07-23 15:09:40
 * @LastEditors: Salt
 * @LastEditTime: 2022-09-04 16:17:50
 * @Description: 这个文件的功能
 * @FilePath: \salt-babel-generator\src\App.tsx
 */
import React from 'react'
import { parseArt } from './utils/handleArt'

export default () => {
  const { entires, generator } = parseArt(`{{ 名字 | 盐酱 }}～
今天被包工头骂了说我水泥拌的太稀
包工头把我的铁锹锤烂了
问我水是不是不要钱
我不敢反驳
他不知道的是
我没有多放水
只是拌水泥时很想你
眼泪掉进了水泥里`)
  console.log(entires, generator({ 名字: 'awa' }))
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>盐的模板仓库 salt-template</h1>
        <p>
          <code>yarn serve</code>启动本地调试
        </p>
        <p>
          <code>yarn bundle</code>打包代码
        </p>
      </div>
    </>
  )
}
