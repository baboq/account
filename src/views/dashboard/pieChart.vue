<template>
    <div class="c-charts" >
        <IEcharts :option="pie"  ></IEcharts>
    </div>
</template>

<script>
    import vPageTitle from './pageTitle.vue';
    import IEcharts from 'vue-echarts-v3';
    export default {
        components:{
            vPageTitle,IEcharts
        },
        data: () => ({
            pie:{
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data:['正常','配置文件异常','端口异常','容器异常','项目异常','磁盘异常','进程异常','共享内存异常']
                },
                series: [
                    {
                        name:'zyagent信息',
                        type:'pie',
                        selectedMode: 'single',
                        radius: [0, '50%'],

                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335,name:'进程异常',selected:true,itemStyle:{normal:{color:'#4cb1a7'}}},
                            {value:679,
                             name:'端口异常',
                             itemStyle:{
                                 normal:{
                                 color:'#ec7777'
                                 }
                             }
                             },
                            {value:1548,
                             name:'配置文件异常',
                             itemStyle:{
                                 normal:{
                                 color:'#e5c649'
                                 }
                                }
                             }
                        ]
                    },
                    {
                        name:'zyagent信息',
                        type:'pie',
                        radius: ['60%', '90%'],

                        data:[
                            {value:335, name:'端口异常',itemStyle:{normal:{color:'#4cb1a7'}}},
                            {value:310, name:'容器异常',itemStyle:{normal:{color:'#ec7777'}}},
                            {value:234, name:'项目异常',itemStyle:{normal:{color:'#e5c649'}}},
                            {value:135, name:'配置文件异常',itemStyle:{normal:{color:'#a6c733'}}},
                            {value:1048, name:'正常',itemStyle:{normal:{color:'#57bcda'}}},
                            {value:251, name:'磁盘异常',itemStyle:{normal:{color:'#489e95'}}},
                            {value:147, name:'进程异常',itemStyle:{normal:{color:'#ecd77f'}}},
                            {value:102, name:'共享内存异常',itemStyle:{normal:{color:'#94b033'}}}
                        ]
                    }
                ]
            }
            }),

            methods: {


            }
    }
</script>

<style scoped>
    .el-col{
        margin-bottom:16px;
    }
    .material-icons{
        font-size:80px;
        color:#ddd;
    }

    .cart-string{
        height:100px;
        padding-top:10px;
        font-size:1.1rem;

    }
    .c-charts{
        height:400px;
        width:100%;
    }

</style>
