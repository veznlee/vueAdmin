<template>
    <div>
        <h3>父组件中slot="title"会替换子组件中name="title"的slot，父组件中slot="content"会替换子组件中name="content"的slot.</h3>
        <my-slot-tab :list="list" :selected="selected">
            <template slot="title" scope="props">
                <li :class="{active:selected==props.index, item:true}" @mouseenter="change(props.index)">{{ props.text }}</li>
            </template>
            <template slot="content" scope="props">
                <div v-html="props.content"></div>
            </template>
        </my-slot-tab>
    </div>
</template>


<script>
    import Vue from 'vue';
    Vue.component('my-slot-tab', {
        props : ['list', 'selected'],
        template : `<div class="tab">
                        <div class="hd">
                            <ul class="clearfix">
                                <slot name="title" v-for="(item, index) in list" :index="index" :text="item.title"></slot>
                            </ul>
                        </div>
                        <div class="bd">
                            <slot name="content" :content="list[selected].content"></slot>
                        </div>
                    </div>`
    });

    export default {
        data:function(){
            return {
                selected: 0,
                currentView : 'item0',//currentView属性可以让多个组件可以使用同一个挂载点，并动态切换
                list: [
                    {
                        title: '11111',
                        content:'hahaha'
                    },
                    {
                        title: '22222',
                        content:'hahaha2'
                    },
                    {
                        title: '33333',
                        content:'hahaha3'
                    }
                ]
            }
        },
        methods: {
            change(index) {
                this.selected = index;
                this.currentView = 'item'+index; // 切换currentView
            }
        }
    }
</script>


 