<template>
    <h1>
        <a :href="'#' + title">{{ title }}</a>
        <span>{{ message }}</span>
        <button @click="changeMsg()">change</button>
    </h1>
</template>
<script>
    
    export default {
        props: {
            title: {
                type: String
            }
        },
        //在Vue实例创建后，添加新的属性到实例上，
        //是不会触发视图更新的,所以对于data来说，所有需要用到的的数据都要先初始化
        data: function(){
            return {
                message : "xuxiao is boy",
                doc: 'https://blog.csdn.net/qq20004604/article/details/52303754'
            }
        },
        methods:{
            changeMsg:function(){
                this.message = '+' + this.message;
            }
        },
        beforeCreate: function () {//只执行一次
            console.group('beforeCreate 创建前状态===============》');
            console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
            console.log("%c%s", "color:red","data   : " + this.$data); //undefined 
            console.log("%c%s", "color:red","message: " + this.message) //undefined
        },
        created: function () {//只执行一次，能访问data，不能访问el,对于一般的数据初始化可以在这里操作，比如，http请求
            console.group('created 创建完毕状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el); //undefined
            console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化

            console.log("%c%s", "color:red","message: " + this.message); //已被初始化
        },
        beforeMount: function () {//只执行一次,能访问el
            console.group('beforeMount 挂载前状态===============》');
            console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
            console.log(this.$el);
            console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化  
            console.log("%c%s", "color:red","message: " + this.message); //已被初始化  
        },
        mounted: function () {//只执行一次
            console.group('mounted 挂载结束状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
            console.log(this.$el);    
            console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
            console.log("%c%s", "color:red","message: " + this.message); //已被初始化 
        },
        beforeUpdate: function () {
            console.group('beforeUpdate 更新前状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);   
            console.log("%c%s", "color:red","data   : " + this.$data); 
            console.log("%c%s", "color:red","message: " + this.message); 
        },
        updated: function () {
            console.group('updated 更新完成状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el); 
            console.log("%c%s", "color:red","data   : " + this.$data); 
            console.log("%c%s", "color:red","message: " + this.message); 
        },
        beforeDestroy: function () {
            console.group('beforeDestroy 销毁前状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);    
            console.log("%c%s", "color:red","data   : " + this.$data); 
            console.log("%c%s", "color:red","message: " + this.message); 
        },
        destroyed: function () {
            console.group('destroyed 销毁完成状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);  
            console.log("%c%s", "color:red","data   : " + this.$data); 
            console.log("%c%s", "color:red","message: " + this.message)
        }
    }

    //https://blog.csdn.net/qq20004604/article/details/52303754
</script>
<style scoped>
    h1 a{
        color: #3399ff;
        font-size: 24px;
    }
</style>