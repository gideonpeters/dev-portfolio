<template>
	<div class="contact px-3">
		<h1 class="title">Contact me.</h1>

		<div class="body-font body-box">
			I am available to work on your freelance projects; do reach out!
		</div>

		<div class="row mt-4">
			<div class="col-12">
				<form action="https://formspree.io/xoqeeavj" method="POST">
					<div class="form-group">
						<label for="exampleInputEmail1">Email address</label>
						<input
							name="_replyto"
							type="email"
							class="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
						<small id="emailHelp" class="form-text text-muted">
							I'll never share your email with anyone else.
						</small>
					</div>
					<div class="form-group">
						<label for="exampleInputFullName">Full Name</label>
						<input
							name="message"
							type="text"
							class="form-control"
							id="exampleInputFullName"
						/>
					</div>
					<div class="form-group">
						<label for="exampleTextArea"
							>What do you have to say?</label
						>
						<textarea
							name="message"
							type="text"
							rows="4"
							class="form-control"
							id="exampleTextArea"
						/>
					</div>

					<button type="submit" class="btn btn-black">
						Submit
					</button>
				</form>
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
	},
	methods: {
		sendEmail() {
			window.open(
				"mailto:gideonpeters85@gmail.com?subject=heyyyy&body=yoooo"
			);
		}
	}
};
</script>

<style lang="scss" scoped>
.form-control {
	background: #5e5e68;
	border-radius: 28px;
	color: #c4c4c4;
	border: none;
}

.btn-black {
	background-color: black;
	color: white;
}
</style>
