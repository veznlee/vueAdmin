<template>
    <div>
        <h2>{{title}}</h2>
        <button @click="showAlert">点我</button>
        <button @click="showAlert2">点我2</button>
        <alert ref="alert" :title="alertTitle" :sureBtn="testSure">
            <div>
                <p>我是一个确认框，点击确定按钮打印内容</p>
                <!-- <button @click="showAlert2">点我2</button> -->
            </div>
        </alert>
        <alert ref="alert2" :title="alertTitle" type="info">我是一个信息框</alert>
    </div>
</template>
<style scope>

</style>
<script>
    import alert from '../../components/diyAlert.vue'
    export default {
        components:{
            alert:alert
        },
        data:function(){
            return {
                title:'自定义弹窗',
                alertTitle:'自定义弹窗'
            }
        },
        methods: {
            handleClick (e) {
                console.log(e);
            },
            showAlert() {
                this.$refs.alert.show();
            },
            showAlert2() {
                this.$refs.alert2.show();
            },
            testSure() {
                console.log(this.title);
            }

        }
    }
</script>