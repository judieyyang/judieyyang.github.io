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
					:to="{ name: link.name }">
					<div class="nav__link">
						<div>{{ link.displayZh }}</div>
						<div>{{ link.displayEng }}</div>
					</div>
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
				{
					displayZh: 'Home',
					name: 'Home',
				},
				{
					displayZh: '關於我',
					displayEng: 'About',
					name: 'About',
				},
				{
					displayZh: '聯絡我',
					displayEng: 'Contact',
					name: 'Contact',
				},
				{
					displayZh: '影片',
					displayEng: 'Films',
					name: 'Films',
				},
				{
					displayZh: 'Juju Land',
				},
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
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 8px;
}

.nav__link {
	display: flex;
	flex-direction: row;
	align-items: center;
}

@media screen and (max-width: 450px) {
	.nav__link {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
}
</style>
