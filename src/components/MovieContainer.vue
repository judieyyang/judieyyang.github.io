<template>
	<div class="movie__container">
		<img
			:src="movieDetails.img"
			class="movie__img">
		<div class="m-v-4">
			<span class="movie__title m-r-2">
				{{ movieDetails.title }}
			</span>
			<span class="m-r-2">
				({{ movieDetails.status }})
			</span>
			<a
				v-if="movieDetails.link"
				:href="movieDetails.link"
				target="_blank">
				預告 Preview Link
			</a>
		</div>
		<div class="p-v-2">
			{{ movieDetails.engDescription }}
		</div>
		<div class="p-v-2">
			{{ movieDetails.zhDescription }}
		</div>
		<div
			v-if="movieDetails.filmFestivals"
			class="movie__specials p-v-2">
			<span class="text__underline">影展:</span>
			<div
				v-for="(item, index) in movieDetails.filmFestivals"
				:key="index">
				{{ item }}
			</div>
		</div>
		<div
			v-if="movieDetails.funds"
			class="movie__specials p-v-2">
			<span class="text__underline">補助:</span>
			<div
				v-for="(item, index) in movieDetails.funds"
				:key="index">
				{{ item }}
			</div>
		</div>
		<div
			v-if="movieDetails.externalLinks"
			class="movie__specials p-v-2">
			<span class="text__underline">Press 相關報導:</span>
			<div
				v-for="(item, index) in movieDetails.externalLinks"
				:key="index">
				<a
					:key="index"
					:href="item.link"
					class="m-v-4"
					target="_blank">
					{{ item.display }}
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MovieContainer',
	props: {
		movieDetails: {
			type: Object,
			default: () => {},
		},
	},
};
</script>

<style>
.movie__container {
	width: 600px;
	min-height: 200px;
	padding: 20px;
	margin: 20px;
	border-radius: 20px;
	box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);

	display: flex;
	flex-direction: column;
}

.movie__title {
	font-weight: 700;
}

.movie__img {
	margin: 0 auto;
	width: 500px;
}

.movie__specials {
	display: flex;
	flex-direction: column;
}
</style>
