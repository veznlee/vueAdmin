<template>
	<section>
		<h1>组件测试-局部</h1>
		
		<my-alert :title="title" description="https://segmentfault.com/a/1190000009682735"></my-alert>
		<h1>组件测试-全局</h1>
		<el-button type="primary" v-on:click="changeOption">修改参数</el-button>
		<chart-block id="chartblock" :option="option" style="width:100%; height:400px;"></chart-block>
	</section>
</template>

<script>
import MyAlert from '../../common/Alert.vue'
import Vue from 'vue'
Vue.use(MyAlert);
export default {
	data() {
		return {
			visible:false,
			title:'测试',
			option:{
				title: { text: 'Column Chart' },
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
			data:[5, 20, 36, 10, 10, 20,5, 20, 36, 10, 20, 36, 10, 10, 20,5, 20, 36, 10]
		}
	},
	methods:{
		changeOption(){
			var r = Math.floor(Math.random()*12);
			var d = this.data.slice(r,r+6);
			this.option.series[0].data = d;
		}
	}
}
</script>
