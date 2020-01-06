<template>
	<div id="app">
		<div class="body-view">
			<div class="d-flex">
				<div class="sidebar d-flex flex-column justify-content-between mr-5">
					<div id="nav" class="d-flex flex-column text-center">
						<div class="logo-icon mb-1"></div>
						<router-link exact active-class="nav-active" to="/">
							<HomeIcon />
						</router-link>
						<router-link exact active-class="nav-active" to="/about">
							<img color="primary" src="@/assets/svg/about.svg" />
						</router-link>
						<router-link exact active-class="nav-active" to="/skills">
							<img color="primary" src="@/assets/svg/skills.svg" />
						</router-link>
						<router-link exact active-class="nav-active" to="/projects">
							<img color="primary" src="@/assets/svg/projects.svg" />
						</router-link>
						<router-link exact active-class="nav-active" to="/contact">
							<img color="primary" src="@/assets/svg/contact.svg" />
						</router-link>
					</div>
					<div class="social d-flex flex-column mb-2 text-center">
						<div>
							<GithubIcon />
						</div>
						<div>
							<LinkedinIcon />
						</div>
						<div>
							<MediumIcon />
						</div>
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

<script>
import HomeIcon from "@/components/icons/HomeIcon";
// import AboutIcon from "@/components/icons/AboutIcon";
// import SkillsIcon from "@/components/icons/SkillsIcon";
// import ProjectIcon from "@/components/icons/ProjectIcon";
// import ContactIcon from "@/components/icons/ContactIcon";

import GithubIcon from "@/components/icons/GithubIcon";
import MediumIcon from "@/components/icons/MediumIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export default {
	components: {
		HomeIcon,
		// AboutIcon,
		// SkillsIcon,
		// ProjectIcon,
		// ContactIcon,
		GithubIcon,
		MediumIcon,
		LinkedinIcon
	}
};
</script>

<style lang="scss">
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: left;
	color: white;
	background-color: #27272b;
	// height: 100vh;
}

.nav-active {
	color: white;
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
	height: 60%;
	display: flex;
	justify-content: space-between;
	// margin-bottom: auto;

	a {
		font-weight: bold;
		color: #2c3e50;

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
