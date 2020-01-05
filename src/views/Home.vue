<template>
	<div class="home">
		<div class="d-flex justify-around">
			<div class="flex-fill text-left">
				<div class="fs-1 css-typing">
					Hey! <br />
					I'm
					<div class="gideon-name" style="display: inline-block">
						Gideon
					</div>
				</div>
				<div class="body-font fs-2 mb-2">Web/Mobile App Developer</div>
				<div class="body-font fs-3">//Vue, Laravel, Flutter</div>
			</div>
			<div class=" p-5 ">
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
			speed: 50,
			waitUntilVisible: true,
			loop: 40
		}).go();
	}
};
</script>

<style lang="scss" scoped>
.gideon-name {
	color: #e24444;
}

.css-typing {
	height: 193px;
}
</style>
