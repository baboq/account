<template>
 <div id="archuser">
  <!--工具条-->
  <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
    <el-form :inline="true" :model="filters">

    <el-form-item>
    <el-input v-model="filters.account" placeholder="账户"></el-input>
    </el-form-item>

    <el-form-item>
    <el-input v-model="filters.username" placeholder="姓名"></el-input>
    </el-form-item>

    <el-form-item>
    <el-button type="primary" v-on:click="getUsers">查询</el-button>
    </el-form-item>

    </el-form>
  </el-col>

  <!--表格-->
  <el-table
    :data="users"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="id"
      width="90">
    </el-table-column>
    <el-table-column
      prop="account"
      label="账户"
      width="90">
    </el-table-column>
    <el-table-column
      prop="username"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱">
    </el-table-column>
  </el-table>

 </div>
</template>

<script>
	import { getUserList } from '../../api/archapi';
	export default {
        name: 'ArchUser',
		data() {
		    return {
                filters: {
                   account: '',
                   username: '',
                },
                loading: false,
		 		users: [],
			}
		},
		methods: {
            getUsers: function() {
                this.loading = true
                let param = {
                    account: this.filters.account,
                    name: this.filters.username
                };
                getUserList(param).then(res => {
                   this.users = res.data.users;
                   this.loading = false;
                });
            } }, mounted() {
		    this.getUsers();
		}
	};
</script>

<style scoped>
</style>
