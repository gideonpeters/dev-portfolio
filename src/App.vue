<template>
	<div id="app">
		<div class="body-view">
			<div class="d-flex">
				<div class="sidebar mr-5">
					<div id="nav" class=" d-flex flex-column  text-center">
						<div class="logo-icon mb-5"></div>
						<router-link to="/">Home</router-link> |
						<router-link to="/about">About</router-link> |
						<router-link to="/skills">Skills</router-link> |
						<router-link to="/projects">Projects</router-link> |
						<router-link to="/contact">Contact</router-link> |
					</div>
				</div>
				<div>
					<div style=" padding-top: 150px ">
						<router-view />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: left;
	color: white;
	background-color: #27272b;
	// height: 100vh;
}

.body-view {
	// margin-top: 100px;
	background-image: url("./assets/logo.png");
	background-size: 40%;
	background-repeat: no-repeat;
	background-position: 85% center;
	height: 100vh;
	background-color: #27272b;
	overflow: hidden;
}

.sidebar {
	min-width: 70px;
	background-color: #202020;
	height: 100vh;
}

#nav {
	// padding: 30px;
	// position: absolute;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}

.logo-icon {
	background-color: #1d1c1c;
	background-image: url("./assets/logo.png");
	background-size: 80%;
	background-repeat: no-repeat;
	background-position: center center;
	height: 70px;
	width: 70px;
}
</style>
