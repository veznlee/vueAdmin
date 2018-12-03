<template>
  <div>
    <h1>vuex 测试，再次打开该页面，操作后的状态会保留</h1>
    Clicked: {{ getCount }} times
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <h1>scss测试</h1>
    
    <div class="scss-box">
      111111111
      <div class="scss-container">
        <article role="main">3333333333</article>
        <aside role="complementary">444444444444</aside>
      </div>
      <div class="scss-message">5555555555</div>
      <div class="scss-message scss-success">5555555555</div>
      <div class="scss-message scss-error">5555555555</div>
      <div class="scss-demo">666666666666666666</div>
      <div id="scss-main">
        <a href="">777777777777777777777</a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    computed: {
      // 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters([
        'getCount'
        // ...
      ])
    },
    methods: {
      ...mapActions([
        'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
        'decrement'
      ])
      //...mapActions({
      //  add: 'increment' // 映射 this.add() 为 this.$store.dispatch('increment')
      //})
    }
  }

</script>

<style scoped lang="scss">
//混合
@mixin border-radius($radius) {
          border-radius: $radius;
      -ms-border-radius: $radius;
     -moz-border-radius: $radius;
  -webkit-border-radius: $radius;
}
.scss-box {
  @include border-radius(10px);
}
// .scss-box {
//   border-radius: 10px;
//   -ms-border-radius: 10px;
//   -moz-border-radius: 10px;
//   -webkit-border-radius: 10px; 
// }


//继承。
%message-common {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}
.scss-message {
  @extend %message-common;
}
.scss-success {
  @extend %message-common;
  border-color: green;
}
.scss-error {
  @extend %message-common;
  border-color: red;
}

// .scss-message, .scss-success, .scss-error {
//   border: 1px solid #ccc;
//   padding: 10px;
//   color: #333; 
// }
// .scss-success {
//   border-color: green; 
// }
// .scss-error {
//   border-color: red; 
// }


//算术运算符，例如+、-、*、/、%
.scss-container { 
  width: 100%;
  &::after{
    content:'';
    display:block;
    width:0;
    height:0;
    overflow: hidden;
    clear:both
  }
}
article[role="main"] {
  float: left;
  width: 600 / 960 * 100%;
}
aside[role="complementary"] {
  float: right;
  width: 300 / 960 * 100%;
}


//引用父级选择器"&"
#scss-main {
  color: black;
  a {
    font-weight: bold;
    &:hover { color: red; }
  }
}
// #scss-main {
//   color: black; 
// }
// #scss-main a {
//   font-weight: bold; 
// }
// #scss-main a:hover {//&总是最近的父级
//   color: red; 
// }

//命名空间
.scss-demo {
  // 命令空间后带有冒号:
  font: {
    family: fantasy;
    size: 2em;
    weight: bold;
  }
}
// .scss-demo {
//   font-family: fantasy;
//   font-size: 30em;
//   font-weight: bold; 
// }
</style>
