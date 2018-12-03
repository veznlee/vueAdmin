<template>
	<section>
		<h1>组件测试-局部</h1>
		<my-alert :title="title" description="https://segmentfault.com/a/1190000009682735"></my-alert>
		<h1>组件测试-全局</h1>
		<el-button type="primary" v-on:click="changeOption">修改参数</el-button>
		<chart-block id="chartblock" :option="option" style="width:100%; height:400px;"></chart-block>
		<h1>组件测试-递归对象</h1>
		<ul>
			<item class="item" :model="treeData"></item>
		</ul>
		<h1>组件测试-递归数组</h1>
		<ul>
			<item class="item" v-for="(model,index) in items" :key="index" :model="model"></item>
		</ul>
		<h1>组件测试-简单的输入框</h1>
		<base-input v-model="value" label="测试输入框" placeholder="请输入内容" v-on:input="input"></base-input>
	</section>
</template>




<script>
import Vue from 'vue'

import MyAlert from '../../common/Alert.vue'
Vue.use(MyAlert);

import Menu from '../../common/Menu.vue'
Vue.use(Menu);

import BaseInput from '../../common/BaseInput.vue'
Vue.use(BaseInput);
export default {
	data() {
		return {
			visible:false,
			title:'测试',
			option:{
				tooltip: {},
				xAxis: {
					data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
				},
				yAxis: {},
				series: [{
					name: '销量',
					type: 'bar',
					data: [5, 20, 36, 10, 10, 20]
				}]
			},
			data:[5, 20, 36, 10, 10, 20,5, 20, 36, 10, 20, 36, 10, 10, 20,5, 20, 36, 10],
			treeData:{
				name: 'My Tree',
				children: [
					{ name: 'hello' },
					{ name: 'wat' },
					{
						name: 'child folder',
						children: [
							{
								name: 'child folder',
								children: [
									{ name: 'hello' },
									{ name: 'wat' }
								]
							},
							{ name: 'hello' },
							{ name: 'wat' },
							{
								name: 'child folder',
								children: [
									{ name: 'hello' },
									{ name: 'wat' }
								]
							}
						]
					}
				]
			},
			items:[
				{ name: 'hello' },
				{ name: 'wat' },
				{
					name: 'child folder',
					children: [
						{
							name: 'child folder',
							children: [
								{ name: 'hello' },
								{ name: 'wat' }
							]
						},
						{ name: 'hello' },
						{ name: 'wat' },
						{
							name: 'child folder',
							children: [
								{ name: 'hello' },
								{ name: 'wat' }
							]
						}
					]
				}
			],
			value:''
		}
	},
	methods:{
		changeOption(){
			var r = Math.floor(Math.random()*12);
			var d = this.data.slice(r,r+6);
			this.option.series[0].data = d;
		},
		input(value){
			console.log(value)
		}
	}
}
</script>

<style scoped>
	h1{
		font-weight:bold;
	}
</style>

