<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.host_ip" placeholder="主机IP"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getHost">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<template>
			<el-table :data="hosts" border v-loading="loading" style="width: 100%;">
				<el-table-column type="index">
				</el-table-column>
				<el-table-column prop="host_ip" label="主机IP" sortable>
				</el-table-column>
				<el-table-column prop="host_status" label="状态" sortable :formatter="formatStatus">
				</el-table-column>
				<el-table-column label="操作">
				  <template scope="scope">
				    <el-button @click="goGroupServices" type="text" size="small">服务列表</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</template>

	</section>
</template>
<script>
	import { getGroupHosts } from '../../api/paas';
	//import NProgress from 'nprogress'
	export default {
		data() {
			return {
				filters: {
					host_ip: ''
				},
				loading: false,
				hosts: [
				]
			}
		},
		methods: {
			formatStatus: function (row, column) {
				return row.host_status == 0 ? '正常' : row.host_status == 1 ? '已下线' : '未知';
			},
			//获取分组机器列表
			getHost: function () {
				let para = {
					host_ip: this.filters.host_ip
				};
				this.loading = true;
				//NProgress.start();
				getGroupHosts(para).then((res) => {
					this.hosts = res.data.hosts;
					this.loading = false;
					//NProgress.done();
				});
			},
			goGroupServices: function () {
				   this.$router.push("/paas/host/services")
			}
		},
		mounted() {
			this.getHost();
		}
	};

</script>

<style scoped>

</style>
