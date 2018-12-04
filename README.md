# To start

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli)

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8081
npm run dev

# build for production with minification
npm run build

```

# Folder structure
* build - webpack config files
* config - webpack config files
* dist - build
* src -your app
    * api
    * assets
    * common
    * components - your vue components
    * mock
    * styles
    * views - your pages
    * vuex
    * App.vue
    * main.js - main file
    * routes.js
* static - static assets

# Theme
You can change theme by 
1. Generate theme packages by [https://elementui.github.io/theme-preview/#/](https://elementui.github.io/theme-preview/#/)
2. Put theme packages in src/assets/theme/
3. Edit src/main.js 
``` bash
   import 'element-ui/lib/theme-default/index.css'
   to
   import './assets/theme/your-theme/index.css'
```
4. Edit src/styles/vars.scss

# use scss
[https://www.jb51.net/article/126937.htm](https://www.jb51.net/article/126937.htm)

本来执行如下命令即可，但是没效果

```
"scripts": {
    "dev": "sass --watch src/styles/main.scss:src/styles/main.css && node build/dev-server.js",
    "build": "sass src/styles/main.scss src/styles/main.css && node build/build.js"
},
```

所以在根目录多了两个 bat 文件 sass-watch.bat 和 sass-compile.bat，然后

```
"scripts": {
    "dev": "start /b sass-watch.bat && node build/dev-server.js",
    "build": "call sass-compile.bat && node build/build.js"
},
```

# Browser support
Modern browsers and IE 10+.


# License
[MIT](http://opensource.org/licenses/MIT)
