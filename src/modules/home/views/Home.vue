<template>
	<div class="home__container">
		<router-link
			:to="{ name: 'About' }">
			<img
				:src="titlePic"
				class="title__image cursor-pointer" >
		</router-link>
		<img
			:src="profilePic"
			class="home__profile__image" >
	</div>
</template>

<script>
import profilePic from '../images/judie.png';
import titlePic from '../images/title.png';

export default {
	name: 'Home',
	beforeCreate() {
		this.profilePic = profilePic;
		this.titlePic = titlePic;
	},
};
</script>

<style>
.home__container {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 100px;
}

@media screen and (max-width: 450px) {
	.home__container {
		margin: 0;
		flex-direction: column;
	}
}

.title__image {
	width: 300px;
	padding: 20px;
}

.home__profile__image {
	width: 333px;
	height: 400px;
	border-radius: 20px;
}
</style>
