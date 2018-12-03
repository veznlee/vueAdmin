<template>
    <section class="chart-container">
        <el-row>
            <el-col :span="12">
                <div id="chartColumn" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <chart-component id="chartPie2" :option="option" style="width:100%; height:400px;" v-on:chartReady="saveChart"></chart-component>
            </el-col>
            <el-col :span="24">
                <el-button type="primary" v-on:click="changeOption">修改参数</el-button>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import echarts from 'echarts'
    import chartComponent from '../../common/ChartComponent.vue'

    export default {
        data() {
            return {
                chartColumn: null,
                columnChart:null,
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
        components:{
            chartComponent
        },
        methods: {
            changeOption(){
                var r = Math.floor(Math.random()*12);
                //splice会改变原来的数组
                //var data = this.data.splice(r,6);
                var d = this.data.slice(r,r+6);
                this.option.series[0].data = d;
                //this.columnChart.setOption(this.option);
            },
            saveChart(chart){
                //接收返回的echart
                this.columnChart  = chart;
            },
            drawColumnChart() {
                this.chartColumn = echarts.init(document.getElementById('chartColumn'));
                this.chartColumn.setOption({
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
                });
            }
        },

        mounted: function () {
            this.drawColumnChart()
        },
        updated: function () {
            this.drawColumnChart()
        }
    }
</script>

<style scoped>
    .chart-container {
        width: 100%;
        float: left;
    }
    /*.chart div {
        height: 400px;
        float: left;
    }*/

    .el-col {
        padding: 30px 20px;
    }
</style>
