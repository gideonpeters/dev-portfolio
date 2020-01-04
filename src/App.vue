<template>
	<div id="app">
		<div id="nav" class="text-center">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/skills">Skills</router-link> |
			<router-link to="/projects">Projects</router-link> |
			<router-link to="/contact">Contact</router-link> |
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: left;
	color: white;
	background-color: #27272b;
	height: 100vh;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
