<template>
    <div >
        <el-row :gutter="20">
            <el-col :xs="12" :sm="12" :md="12" :lg="6">
                <el-card class="box-card">
                   <el-row :gutter="6">
                    <el-col :xs="24" :sm="8" :md="8" :lg="8">
                        <el-progress type="circle" :percentage="100" :width="80"></el-progress>
                    </el-col>
                    <el-col :xs="24" :sm="11" :md="12" :lg="12">
                        <div class="cart-string">
                        <span>Zyagent总量</span>
                        <span><h2>182</h2></span>
                        </div>
                    </el-col>
                   </el-row>
                </el-card>
            </el-col>

            <el-col :xs="12" :sm="12" :md="12" :lg="6">
                <el-card class="box-card">
                   <el-row :gutter="6">
                    <el-col :xs="24" :sm="8" :md="8" :lg="8">
                        <div> <el-progress type="circle" :percentage="100" :width="80"></el-progress></div>
                    </el-col>
                    <el-col :xs="24" :sm="11" :md="12" :lg="12">
                        <div class="cart-string">
                        <span>Qconf总量</span>
                        <span><h2>160</h2></span>
                        </div>
                    </el-col>
                   </el-row>
                </el-card>
            </el-col>

            <el-col :xs="12" :sm="12" :md="12" :lg="6">
                <el-card class="box-card">
                   <el-row :gutter="6">
                    <el-col :xs="24" :sm="8" :md="8" :lg="8">
                        <div> <el-progress type="circle" :percentage="30" :width="80"></el-progress></div>
                    </el-col>
                    <el-col :xs="24" :sm="11" :md="12" :lg="12">
                        <div class="cart-string">
                        <span>Active Zyagent</span>
                        <span><h2>60</h2></span>
                        </div>
                    </el-col>
                   </el-row>
                </el-card>
            </el-col>

            <el-col :xs="12" :sm="12" :md="12" :lg="6">
                <el-card class="box-card">
                   <el-row :gutter="6">
                    <el-col :xs="24" :sm="8" :md="8" :lg="8">
                        <div> <el-progress type="circle" :percentage="88" :width="80"></el-progress></div>
                    </el-col>
                    <el-col :xs="24" :sm="11" :md="12" :lg="12">
                        <div class="cart-string">
                        <span>Active Qconf</span>
                        <span><h2>132</h2></span>
                        </div>
                    </el-col>
                   </el-row>
                </el-card>
            </el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="12">
                <el-card class="box-chart">
                        zyagent监控
                    <pieChart></pieChart>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="10">
                <el-card class="box-list">
                     部门信息
                   <hr>
                   <borderTable></borderTable>
                </el-card>
            </el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="6">
                <el-card class="box-list">
                     留言板
                   <hr>
                   <MessageList></MessageList>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="6">
                <el-card class="box-list">
                     留言板-01
                   <hr>
                   <MessageList></MessageList>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="6">
                <el-card class="box-list">
                     留言板-02
                   <hr>
                   <MessageList></MessageList>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="6">
                <el-card class="box-list">
                     留言板-03
                   <hr>
                   <MessageList></MessageList>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import pieChart from './pieChart.vue';
    import MessageList from './MessageList.vue';
    import borderTable from './borderTable.vue';
    export default {
        data(){
           return{
              //percentage:10
           }
        },
        components:{
            pieChart,MessageList,borderTable
        }
    }
</script>

<style scoped>
    .el-col{
        margin-bottom:16px;
        text-align:center;
    }
    .material-icons{
        font-size:80px;
        color:#ddd;
    }
    .box-card{
        height:110px;
    }
    .cart-string{
        height:100px;
        padding-top:10px;
        font-size:1.1rem;

    }
    .box-chart{
        height:420px;
    }
    .box-list{
        height:auto;
        text-align:left;
    }
    .box-list hr{
        height:1px;
        border:none;
        border-top:1px  dashed #ccc;
        margin-bottom:5px;
        margin-top:6px;

    }
</style>
