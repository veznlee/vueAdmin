<template>
    <div id="child1" style="display:inline-block;font-size:0;">
        <div class="block">
            子组件1-1<br/>
            <button @click="toparent">传递数据到父组件</button>
        </div>
        <div class="block">
            子组件1-2<br/>
            <button @click="tobrother">传递数据到兄弟组件2</button>
        </div>
    </div>
</template>
<script>
    // 借助于一个公共的Vue的实例对象，不同的组件可以通过该对象完成事件的绑定和触发
    import bus from '../vuebus/bus.js'
    export default {    
        props: {      
            child1Content: String, // 这里指定了字符串类型，如果类型不一致会警告的哦
            child1Name: {
                type: String,        
                default: 'my name is child'// 这里指定了一个默认值
            }
        },
        data () {
            return {// prop 作为初始值传入后，子组件想把它当作局部数据来用
                content: this.child1Content
            }
        },    
        computed: {        // prop 作为初始值传入，由子组件处理成其它数据输出。
            name: function () {        
                return this.child1Name.toLocaleUpperCase()// 所有的字母字符都被转换为大写
            }
        },    
        methods: {
            toparent () {        
                console.log('this is toparent==')
                let params = {          
                    name: 'child1',          
                    content: 'child1 mesage'
                }        
                this.$emit('on-clicks-child1', params)// 触发on-clicks方法，params为向父组件传递的数据
            },
            tobrother () {        
                console.log('this is tobrother==')        
                let params = {          
                    name: 'child1',          
                    content: 'child1 mesage to child2'
                }
                // 触发clickstochild2方法，params为向兄弟组件child2组件传递的数据
                bus.$emit('clickstochild2', params)
            }
        },
        created () {
            // console.log('这是父组件传个child1的参数child1Name==', this.child1Name)
            // console.log('这是父组件传个child1的参数child1Content==', this.child1Content)
            // console.log('这是父组件传个child1的参数child1Content赋值给content后 this.content==', this.content)
            // console.log('这是父组件传个child1的参数child1Name改变后的值  this.name==', this.name)
        }
    }
</script>
<style scoped>
    .block{
        display:inline-block;width: 150px;background-color: #efefef;padding: 20px;margin: 20px;font-size:14px;
    }
</style>