<template>
	<el-button @click=handleClick>
		默认按钮</el-button>
</template>


<script>
export default {
	methods: {
		handleClick() {
			this.$router.push("/online_service/test")
		}
	}
}
</script>

<style>

</style>