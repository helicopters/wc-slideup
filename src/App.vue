<style>
	
</style>
<template>
	<div class="container">
		<button @click="fn">点击显示</button>

		<wc-slideup ref="slideup">
			<h1 v-for="i in 5">大家好, 我是 slideup </h1>
		</wc-slideup>
	</div>
</template>
<script>
	export default {
		name: 'App',
		methods: {
			fn () {
				this.$refs.slideup.show();
			}
		}
	}
</script>