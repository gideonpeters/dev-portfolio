<template>
	<div class="about">
		<div class="d-flex">
			<div class="flex-fill">
				<h1 class=" title">About me.</h1>

				<div class="body-box fs-2">
					Full stack web and mobile developer with over 3 years’
					experience with frontend and backend frameworks. <br />
					Passionate problem solver and attentive to details.
				</div>
			</div>
			<div>
				<!-- <img alt="Gideon picture" src="../assets/gidiprofile.png" /> -->
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
	background-image: url("../assets/gidiprofile.png");
	background-size: 20%;
	background-repeat: no-repeat;
	background-position: 80% center;
	height: 90vh;
}
</style>
