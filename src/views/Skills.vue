<template>
	<div class="skills">
		<h1 class="title">Skills.</h1>

		<div class=" body-box body-font">
			Most of my experience lies in frontend developement using Javascript
			and the Vue framework majorly, I have also dabbled a bit with React.
			I’m also proficient in CSS3/SASS/SCSS, ES6, TypeScript, Axios <br />
			For the backend I’ve worked a lot with Laravel for RESTful APIs and
			learnt a bit of NodeJS.
		</div>
	</div>
</template>

<script>
import TypeIt from "typeit";

export default {
	mounted() {
		new TypeIt(".title", {
			speed: 50,
			waitUntilVisible: true
		}).go();
	}
};
</script>
