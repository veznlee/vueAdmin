<template>
    <div id="parent">
        <div class="h-border">
            <h1>Vue 中父子组件、兄弟组件通信</h1>
            <p>不使用vuex，使用new Vue()实例的事件派发（$emit）和监听（on）实现</p>
        </div>
        <p>来自组件1的数据：{{c1}}</p>
        <p>来自组件2的数据：{{c2}}</p>
        <child-f :child1-content="content1" :child1-name="name1" @on-clicks-child1="onClickF"></child-f>
        <child-s :child2-content="content2" :child2-name="name2" @on-clicks-child2="onClickS"></child-s>
    </div>
</template>
<script type="text/ecmascript-6">
    import childF from '../../components/Bus1.vue'
    import childS from '../../components/Bus2.vue'
    export default {    
        components: {
            childF,
            childS
        },
        data () {      
            return {        
                content1: 'this is child1 content',        
                content2: 'this is child2 content',        
                name1: 'my name is child1',        
                name2: 'my name is child2',
                c1:'',
                c2:''
            }
        },    
        methods: {
            onClickF (params) {        
                //console.log('这是child1Click触发的事件，child1传给父组件参数==', params)
                this.c1 = params.content;
            },
            onClickS (params) {        
                //console.log('这是child2Click触发的事件，child2传给父组件参数==', params)
                this.c2 = params.content;
            }
        }
    }
</script>
<style>
    #parent {    
        padding: 30px;    
        line-height: 30px;   
        padding-top: 50px;    
        text-align: center;
    }  
    .h-border {    
        border-bottom: 2px solid black;
    }
</style>