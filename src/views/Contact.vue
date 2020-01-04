<template>
	<div class="contact">
		<h1 class="title">Contact me.</h1>

		<div class="body-font body-box">
			I am available to work on your freelance projects and for consulting
			purposes; do reach out!
		</div>

		<div class="row mt-4">
			<div class="col-4">
				<form>
					<div class="form-group">
						<label for="exampleInputEmail1">Email address</label>
						<input
							type="email"
							class="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
						<small id="emailHelp" class="form-text text-muted"
							>I'll never share your email with anyone
							else.</small
						>
					</div>
					<div class="form-group">
						<label for="exampleInputPassword1">Full Name</label>
						<input
							type="text"
							class="form-control"
							id="exampleInputPassword1"
						/>
					</div>
					<div class="form-group">
						<label for="exampleTextArea"
							>What do you have to say?</label
						>
						<textarea
							type="text"
							rows="4"
							class="form-control"
							id="exampleInputPassword1"
						/>
					</div>

					<button type="submit" class="btn btn-primary">
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
	}
};
</script>
