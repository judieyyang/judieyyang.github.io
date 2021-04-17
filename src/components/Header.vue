<template>
	<div class="header__container">
		<img
			v-if="$route.name !== 'Home'"
			:src="headerImg"
			class="header__image">
		<ul class="nav__container">
			<li
				v-for="(link, index) in navLinks"
				:key="index"
				class="nav__item">
				<router-link
					:to="{ name: link.name }"
					class="nav__link">
					{{ link.display }}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import headerImg from '@/assets/images/headerImg.png';

export default {
	name: 'Header',
	beforeCreate() {
		this.headerImg = headerImg;
	},
	data() {
		return {
			navLinks: [
				{ display: 'Home', name: 'Home' },
				{ display: 'About 關於我', name: 'About' },
				{ display: 'Contact 聯絡我', name: 'Contact' },
				{ display: 'Films 影片', name: 'Films' },
				{ display: 'Juju\'s Land' },
			],
		};
	},
};
</script>

<style lang="scss">
.header__container {
	display: flex;
	flex-direction: column;
}

.header__title {
	font-size: 28px;
	text-align: center;
}

.header__image {
	width: 300px;
	margin: 0 auto;
}

.nav__container {
	display: flex;
	justify-content: center;
}

.nav__item {
	padding: 8px;
}

@media screen and (max-width: 400px) {
	.nav__item {
		padding: 4px !important;
	}
}
</style>
