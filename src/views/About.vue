<template>
	<div class="about px-3">
		<h1 class="title">About me.</h1>
		<div class="row justify-content-center align-items-start">
			<div class="col-lg-7">
				<div class="body-box fs-2">
					Full Stack web and mobile developer with over 3 years’
					experience with frontend and backend frameworks.
					<br />Passionate problem solver and attentive to details.
				</div>
			</div>
			<div class="col">
				<img
					alt="Gideon profile picture"
					src="../assets/gidiprofile.png"
				/>
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
