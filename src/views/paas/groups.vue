<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.group_name" placeholder="组名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getGroup">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<template>
			<el-table :data="groups" border v-loading="loading" style="width: 100%;">
				<el-table-column type="index">
				</el-table-column>
				<el-table-column prop="group_name" label="组名">
				</el-table-column>
				<el-table-column prop="host_count" label="服务器数量" sortable>
				</el-table-column>
				<el-table-column label="操作">
				  <template scope="scope">
				    <el-button @click="goHostList" type="text" size="small">服务器列表</el-button>
				    <el-button @click="goProjectList" type="text" size="small">服务列表</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</template>

	</section>
</template>
<script>
	import { getDockerGroups } from '../../api/paas';
	export default {
		data() {
			return {
				filters: {
					group_name: ''
				},
				loading: false,
				groups: [
				]
			}
		},
		methods: {
			//获取用户列表
			getGroup: function () {
				let para = {
					group_name: this.filters.group_name
				};
				this.loading = true;
				getDockerGroups(para).then((res) => {
					this.groups = res.data.groups;
					this.loading = false;
				});
			},
			goHostList: function () {
				this.$router.push('/paas/hosts');
			},
			goProjectList: function () {
				this.$router.push('/paas/host/services');
			}
		},
		mounted() {
			this.getGroup();
		}
	};
</script>
<style scoped>
</style>
