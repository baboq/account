<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.project" placeholder="项目"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="filters.service" placeholder="服务"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getService">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<template>
			<el-table :data="services" border v-loading="loading" style="width: 100%;">
				<el-table-column type="index">
				</el-table-column>
				<el-table-column prop="project" label="项目名" sortable>
				</el-table-column>
				<el-table-column prop="service" label="服务名" sortable>
				</el-table-column>
			</el-table>
		</template>
	</section>
</template>
<script>
	import { getHostServices } from '../../api/paas';
	//import NProgress from 'nprogress'
	export default {
		data() {
			return {
				filters: {
					project: '',
					service: '',
				},
				loading: false,
				services: [
				]
			}
		},
		methods: {
			//获取机器服务列表
			getService: function () {
				let para = {
					project: this.filters.project,
					service: this.filters.service,
				};
				this.loading = true;
				//NProgress.start();
				getHostServices(para).then((res) => {
					this.services = res.data.services;
					this.loading = false;
					//NProgress.done();
				});
			}
		},
		mounted() {
			this.getService();
		}
	};

</script>

<style scoped>

</style>
