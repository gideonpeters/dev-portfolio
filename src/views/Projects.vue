<template>
	<div class="projects">
		<h1>Projects</h1>

		<div class="project-list">
			<div class="project-card" v-for="i in 8" :key="i"></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.project-list {
	width: 70vw;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 20px;

	.project-card {
		width: 230px;
		height: 200px;
		background-color: azure;
		cursor: pointer;
	}
}
</style>