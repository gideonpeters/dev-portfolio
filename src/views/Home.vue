<template>
	<div class="home">
		<div class="d-flex">
			<div class="flex-fill text-left">
				<div class="fs-1 css-typing">
					Hey!
					<br />I'm
					<div class="gideon-name" style="display: inline">
						Gideon
					</div>
				</div>
				<div class="body-font fs-2 mb-2">Web/Mobile App Developer</div>
				<div class="body-font fs-3">//Vue, Laravel, Flutter</div>
			</div>
			<div class="p-5">
				<!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TypeIt from "typeit";

export default {
	name: "home",
	components: {
		// HelloWorld
	},
	mounted() {
		new TypeIt(".css-typing", {
			speed: 100,
			waitUntilVisible: true,
			loop: true,
			cursor: false
		}).go();
	}
};
</script>

<style lang="scss" scoped>
.home {
	width: 100%;
	height: 100%;

	@media screen and (max-width: 700px) {
		padding-top: 30px;
		padding-left: 15px;
	}
}
.gideon-name {
	color: #42b983;
}

.css-typing {
	min-height: 183px;

	@media screen and (max-width: 700px) {
		font-size: 3.4rem;
	}
}
</style>
