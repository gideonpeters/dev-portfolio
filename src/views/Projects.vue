<template>
	<div class="projects">
		<h1>Projects</h1>

		<div
			class="row wrap justify-content-center align-items-center project-list"
		>
			<div
				class="project-card m-3"
				v-for="(img, i) in images"
				:style="{ backgroundImage: `url(${img})` }"
				:key="i"
				@click="onClick(i)"
			></div>
			<vue-gallery-slideshow
				:images="images"
				:index="index"
				@close="index = null"
			></vue-gallery-slideshow>
		</div>
	</div>
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";

export default {
	components: {
		VueGallerySlideshow
	},
	data: () => ({
		images: [
			require("./../assets/images/img1.png"),
			require("./../assets/images/img2.png"),
			require("./../assets/images/img3.png"),
			require("./../assets/images/img4.png"),
			require("./../assets/images/img5.png"),
			require("./../assets/images/img6.png"),
			require("./../assets/images/img7.png"),
			require("./../assets/images/img8.png")
		],
		index: 0
	}),
	methods: {
		onClick(i) {
			this.index = i;
		}
	}
};
</script>

<style lang="scss" scoped>
.project-list {
	width: calc(100vw - 150px);

	.project-card {
		width: 230px;
		height: 200px;
		background-color: azure;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}
}
</style>
