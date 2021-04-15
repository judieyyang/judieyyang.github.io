<template>
	<div>
		<transition
			name="fade"
			mode="out-in">
			<Header
				v-if="$route.name !== 'Home'" />
		</transition>
		<div id="content">
			<router-view v-slot="{ Component }">
				<transition
					name="fade"
					mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
		</div>
		<Footer />
		<div class="circle-orange"></div>
		<div class="circle-green"></div>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
	name: 'WebLayout',
	components: {
		Header,
		Footer,
	},
};
</script>

<style lang="scss">
	@import '../styles/styleguide.scss';
</style>
