<template>
	<div>
		<h1>过滤器测试</h1>
		<div>{{testNum | add5}}</div>
		<h1>指令测试</h1>
		<input v-focus type="text">
	</div>
</template>

<script>
	export default {
		data(){
			return {
				testNum: 5
			}
		}
	}
</script>
