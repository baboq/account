<template>
   <el-table :data="tableData" style="width: 100%" border stripe>
      <el-table-column prop="id"  label="ID"  width="80"></el-table-column>
      <el-table-column prop="userName" label="姓名" width="180"></el-table-column>
      <el-table-column prop="age" label="年龄" width="80"> </el-table-column>
      <el-table-column prop="ability" label="主要开发语言"> </el-table-column>
      <el-table-column prop="value" label="占比重" align="right"> </el-table-column>
    </el-table>
</template>

<script>
    export default {
      data() {
        return {
          tableData: [{
            id:1,
            userName: '王利超',
            age: '30',
            ability: 'HTML5,PHP',
            value:'80%'
          }, {
            id:2,
            userName: '戚磊',
            age: '28',
            ability: 'Web,PHP',
            value:'70%'
          }, {
            id:3,
            userName: '白江涛',
            age: '30',
            ability: 'PHP,MySql',
            value:'60%'
          }, {
            id:4,
            userName: '杨明',
            age: '30',
            ability: 'Web,PHP',
            value:'70%'
          }, {
            id:5,
            userName: '贺鹏飞',
            age: '28',
            ability: 'Web,PHP',
            value:'70%'
          }, {
            id:6,
            userName: '李达康',
            age: '48',
            ability: 'Jave',
            value:'70%'
          }]
        }
      }
    }
</script>
<style scoped>

</style>
