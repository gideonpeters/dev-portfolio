<template>
	<div class="skills px-4">
		<h1 class="title">Skills</h1>
		<div class="row">
			<div class="col-lg-6 col-12">
				<div class="body-box body-font">
					Most of my experience lies in frontend developement using
					Javascript frameworks like Vue and React. I’m also
					proficient in CSS3/SASS/SCSS, TailwindCSS ES6, TypeScript,
					Axios <br />
					For the backend I’ve worked a lot with Laravel for RESTful
					APIs. <br />
					I also have some experience using Flutter for mobile
					applications development for both iOS and Android <br />
					I dabble in a lot of other technologies like Nuxt, Laravel
					Nova; I really love to code, just for the fun of it and I
					like challenging myself with problems.
				</div>
			</div>
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
