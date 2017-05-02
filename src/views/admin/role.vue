<template>
  <el-table
    :data="roleData"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="role"
      label="角色"
      width="180">
    </el-table-column>
    <el-table-column
      prop="desc"
      label="描述">
    </el-table-column>
  </el-table>
</template>

<script>
	export default {
		data() {
			return {
		 		roleData: [{
		   			id: '1',
		   			role: 'admin',
		   			desc: '超级管理员'
		 		}],
			}
		}
	};
</script>

<style scoped>
</style>
