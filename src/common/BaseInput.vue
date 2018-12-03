<template>
    <label>
        {{ label }}
        <input :value="value"
                v-bind="$attrs"
                v-on="listeners"/>
    </label>
</template>
<script>
var BaseInput = {
    name:'BaseInput',
    /**
     * 需要注意的是，由于我们input并不是BaseInput这个组件的根节点，而默认情况下父作用域的不被认作 props 的特性绑定
     * 将会“回退”且作为普通的 HTML 特性应用在子组件的根元素上。所以我们需要设置 inheritAttrs: false，
     * 这些默认行为将会被去掉，上面优化才能成功。 */
    inheritAttrs: false,//不继承多余的属性
    props:{
        value:[String,Number],
        label:String
    },
    computed:{
        listeners() {
            return {
                ...this.$listeners,
                //$listeners包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。
                //它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。
                input: event => this.$emit('input', event.target.value)
            }
        }
    }
}
BaseInput.install = function(Vue) {
    //Vue.component里面的name决定了组件叫什么名字
    Vue.component(BaseInput.name, BaseInput);
};
export default BaseInput;
</script>

