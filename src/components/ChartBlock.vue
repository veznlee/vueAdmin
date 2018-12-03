<template>
    <div :id="id"></div>
</template>
<script>
    import echarts from 'echarts';

    var ChartBlock = {
        name:'ChartBlock',
        data(){
            return {
                chart:null
            }
        },
        props:{
            option:{
                type:Object
            },
            id:{
                type:String
            }
        },
        methods:{
            returnChartToParent(){
                this.$emit('chartReady',this.chart);
            }
        },
        watch:{
            option:{
                handler(newValue, oldValue) {
                    this.chart.setOption(newValue);
                },
                // immediate: true,
                deep: true
            }
        },
        mounted(){
            this.chart = echarts.init(document.getElementById(this.id));
            this.chart.setOption(this.option);
            //节流处理
            function throttle(func, wait, options) {
                let time, context, args, result;
                let previous = 0;
                if (!options) options = {};

                let later = function() {
                    previous = options.leading === false ? 0 : new Date().getTime();
                    time = null;
                    func.apply(context, args);
                    if (!time) context = args = null;
                };

                let throttled = function() {
                    let now = new Date().getTime();
                    if (!previous && options.leading === false) previous = now;
                    let remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0 || remaining > wait) {
                    if (time) {
                        clearTimeout(time);
                        time = null;
                    }
                    previous = now;
                    func.apply(context, args);
                    if (!time) context = args = null;
                    } else if (!time && options.trailing !== false) {
                        time = setTimeout(later, remaining);
                    }
                };
                return throttled;
            };

            var chart = this.chart;
            this.chart.__resize = throttle(function(){
                chart.resize();
            },200);

            setTimeout(() => {
                window.addEventListener('resize',this.chart.__resize);
            }, 200);
        },
        created(){
            //console.log(this.id);
            //不能在这里初始化,id还没有和div关联上
        },
        destroyed() {
            window.removeEventListener('resize',this.chart.__resize);
        }
    }
    
    /* istanbul ignore next */
    ChartBlock.install = function(Vue) {
        Vue.component(ChartBlock.name, ChartBlock);
    };
    export default ChartBlock;
</script>

