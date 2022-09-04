/*
 * @Author: Salt
 * @Date: 2022-07-23 15:09:40
 * @LastEditors: Salt
 * @LastEditTime: 2022-09-04 16:31:21
 * @Description: 这个文件的功能
 * @FilePath: \salt-babel-generator\src\App.tsx
 */
import React from 'react'
import { parseArt } from './utils/handleArt'

export default () => {
  const { entires, generator } = parseArt(`邻居老是喜欢蹭我家的Wifi
这让我很烦恼
于是我把用户名改成:{{用户名|世界上和我最般配的人是谁？}}
密码是:{{密码|妖精Fairy~}}
我心中暗暗窃喜:这回还想蹭网?
1分钟后，整个小区全连上了我家的WiFi`)
  console.log(entires, generator({ 密码: '妖精可爱~' }))
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        盐的小作文
        <ruby>
          生<rt>抄</rt>成<rt>袭</rt>
        </ruby>
        器
      </h1>
      <div>
        <h2></h2>
        <textarea />
      </div>
      <div>
        <h2></h2>
      </div>
      <div>
        <h2></h2>
        <textarea />
      </div>
    </div>
  )
}
