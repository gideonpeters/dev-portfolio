<template>
	<div id="app1">
		<div class="logo-over" :style="{ backgroundImage: `url(${bgImg})` }"></div>
		<div class="overlay" v-if="overlay">
			<div
				class="d-flex flex-column text-center p-5"
				style="position: relative"
			>
				<div class="text-right" @click="toggleOverlay">
					<i class="mdi mdi-36px mdi-close"></i>
				</div>
				<div
					class="fs-5 py-3"
					@click="goToPage(route.route)"
					v-for="route in routes"
					:key="route.id"
				>
					{{ route.name }}
				</div>
			</div>
		</div>
		<div class="d-lg-none">
			<div class="icon-menu p-2" @click="toggleOverlay">
				<i class="mdi mdi-36px mdi-view-dashboard"></i>
			</div>
		</div>
		<div class="row">
			<div class="col-1 d-none d-lg-flex">
				<div
					id="nav"
					class="d-flex flex-column text-center justify-content-between"
				>
					<div class="logo-icon"></div>
					<router-link exact active-class="nav-active" to="/">
						<i class="mdi mdi-24px mdi-view-dashboard"></i>
					</router-link>
					<router-link exact active-class="nav-active" to="/about">
						<i class="mdi mdi-24px mdi-account"></i>
					</router-link>
					<router-link exact active-class="nav-active" to="/skills">
						<i class="mdi mdi-24px mdi-settings"></i>
					</router-link>
					<router-link exact active-class="nav-active" to="/projects">
						<i class="mdi mdi-24px mdi-folder"></i>
					</router-link>
					<router-link exact active-class="nav-active" to="/contact">
						<i class="mdi mdi-24px mdi-email"></i>
					</router-link>
					<div class="social d-flex flex-column mb-3 text-center">
						<div>
							<a href="https://github.com/gideonpeters">
								<img color="primary" src="@/assets/svg/github.svg" />
							</a>
						</div>
						<div>
							<a href="https://www.linkedin.com/in/gideon-peters-8b813089/">
								<img color="primary" src="@/assets/svg/linkedin.svg" />
							</a>
						</div>
						<div>
							<a href="https://medium.com/@gideonpeters85">
								<img color="primary" src="@/assets/svg/medium.svg" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="b-view ">
					<router-view />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				overlay: false,
				routes: [
					{ id: 1, name: "Home", route: "home" },
					{ id: 2, name: "About Me", route: "about" },
					{ id: 3, name: "My Skills", route: "skills" },
					{ id: 4, name: "My Projects", route: "projects" },
					{ id: 5, name: "Contact Me", route: "contact" },
				],
			};
		},
		computed: {
			bgImg() {
				let url;
				if (this.$route.name == "skills") {
					url = require("./assets/second-logo.png");
				} else {
					url = require("./assets/logo.png");
				}

				return url;
			},
		},
		methods: {
			toggleOverlay() {
				this.overlay = !this.overlay;
			},
			goToPage(name) {
				this.toggleOverlay();
				this.$router.push({ name });
			},
		},
	};
</script>

<style lang="scss">
	#app1 {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: left;
		color: white;
		background-color: #27272b;
		overflow-x: hidden;
		height: 100vh;
	}

	.overlay {
		height: 100vh;
		width: 100vw;
		position: absolute;
		background: #64e6ab;
		z-index: 9999999;
		// opacity: 0.9;

		.fs-5 {
			font-size: 1.8rem;
		}
	}

	.icon-menu {
		display: flex;
		justify-content: flex-end;
		color: #64e6ab;
	}
	.nav-active {
		color: white;
	}

	.logo-over {
		position: absolute;
		background-image: url("./assets/logo.png");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 85% center;
		height: 400px;
		width: 450px;
		top: 200px;
		right: 200px;
	}

	.b-view {
		display: flex;
		height: 100vh;
		width: 100%;
		overflow-x: hidden;
		padding-top: 180px;
		// overflow-y: scroll;
		@media screen and(max-width: 700px) {
			padding-top: 50px;
		}
	}

	.sidebar {
		min-width: 70px;
		height: 100vh;
		overflow: hidden;
	}

	#nav {
		background-color: #202020;
		// padding: 30px;
		// position: absolute;
		height: 100vh;
		display: flex;
		justify-content: space-between;
		position: fixed;
		// margin-bottom: auto;

		a {
			font-weight: bold;
			color: #363636;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}

	.social {
		display: flex;
		justify-content: space-between;
		height: 20%;
		// margin-top: auto;
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
