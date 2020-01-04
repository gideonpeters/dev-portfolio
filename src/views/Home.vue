<template>
	<div class="home">
		<div class="d-flex justify-around">
			<div class="flex-fill text-left">
				<div>
					Hey there! <br />
					I'm <span class="gideon-name">Gideon</span>
				</div>
				<div>Web/Mobile App Developer</div>
				<div>//Vue, Laravel, Flutter</div>
			</div>
			<div class=" p-5 ">
				<img alt="Vue logo" src="../assets/logo.png" />
			</div>
		</div>
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: "home",
	components: {
		// HelloWorld
	}
};
</script>

<style lang="scss" scoped>
.gideon-name {
	color: #e24444;
}
</style>
