<template>
    <div class="block">
        子组件2<br/>
        <button @click="toparent">传递数据到父组件</button>
        <p>接收兄弟组件1-2的数据</p>
        <p>{{dataFromChild}}</p>
    </div>
</template>
<script>
    // 借助于一个公共的Vue的实例对象，不同的组件可以通过该对象完成事件的绑定和触发
    import bus from '../vuebus/bus.js'
    export default {
        props: {
            child2Content: String, // 这里指定了字符串类型，如果类型不一致会警告的哦
            child2Name: {
                type: String,
                default: 'my name is child'// 这里指定了一个默认值
            }
        },
        data () {
            return {
                dataFromChild: 'hehehe'
            }
        },    
        methods: {
            toparent () {
                console.log('this is toparent==')
                let pam = {
                    name: 'child2',
                    content: 'child2 mesage'
                };
                this.$emit('on-clicks-child2', pam) //触发onClick方法，params为向父组件传递的数据
            }
        },
        created () {
            bus.$on('clickstochild2', (params) => {        
                //console.log('这是监听兄弟组件child1传入的参数==', params)
                this.dataFromChild = params.content
            })
        }
    }
</script>

<style scoped>
    .block{
        display:inline-block;width: 150px;background-color: #efefef;padding: 20px;margin: 20px;font-size:14px;
    }
</style>