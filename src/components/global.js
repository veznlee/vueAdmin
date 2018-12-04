//借助webpack,自动导入

import Vue from 'vue'
 
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}


/* require.context的3个参数：
要搜索的文件夹目录，
是否还应该搜索它的子目录，
以及一个匹配文件的正则表达式 
*/
const requireComponent = require.context(
  '.', false, /\.vue$/
   //找到components文件夹下以.vue命名的文件
)

//注意下面这段代码，组件定义不同，提取组件名的方式就不一样
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
 
  const componentName = capitalizeFirstLetter(
    fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
    //因为得到的filename格式是: './baseButton.vue', 所以这里我们去掉头和尾，只保留真正的文件名
  )
 
  Vue.component(componentName, componentConfig.default || componentConfig)
})

//最后我们在main.js中import 'components/global.js'，然后我们就可以随时随地使用这些基础组件，无需手动引入了。