<template>
	<div class="about">
		<div class="d-flex justify-content-between">
			<div class>
				<h1 class="title">About me.</h1>

				<div class="body-box fs-2">
					Full Stack web and mobile developer with over 3 years’
					experience with frontend and backend frameworks.
					<br />Passionate problem solver and attentive to details.
				</div>
			</div>
			<div class="mr-5 justify-content-center">
				<img alt="Gideon profile picture" src="../assets/gidiprofile.png" />
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
		new TypeIt(".title", {
			speed: 50,
			waitUntilVisible: true
		}).go();
	}
};
</script>

<style lang="scss" scoped>
.about {
	background-image: url("../assets/svg/skills-icon.svg");
	background-size: contain;
	background-repeat: no-repeat;
	background-position: 40% center;
	width: calc(100vw - 150px);
}
</style>
