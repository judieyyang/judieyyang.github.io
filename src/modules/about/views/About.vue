<template>
	<div
		class="about__container">
		<div class="about__description">
			<div>{{ p1 }}</div>
			<div>{{ p2 }}</div>
			<div>{{ p3 }}</div>
			<div class="m-t-10">{{ cp1 }}</div>
		</div>
		<img
			:src="profilePic"
			class="about__profile__image" >
	</div>
</template>

<script>
import profilePic from '../images/judie.png';

export default {
	name: 'About',
	beforeCreate() {
		this.profilePic = profilePic;
	},
	data() {
		return {
			p1: 'Judie Yang (楊渝惠) is a Taiwanese director who works in Taiwan, U.S.A., and Japan. Judie graduated with a MFA Cinema degree from San Francisco State University in 2019. She explores the challenge of coming back home and the search of identity in Taiwanese diaspora in her works, in the form of dry comedy.',
			p2: 'Her thesis film Taiwanese Cha Cha Chawas official selections in the nation’s biggest Asian American film festivals, including CAAMFest, San Diego Asian Film Festival, and 43rd Asian American International Film Festival, and being awarded internationally. Her latest film, The Granddaughter Detectivewas funded by ChiaYi County in Taiwan. The film had its festival premiere in San Diego Asian American Film Festival in October 2020.',
			p3: 'Judie is now a freelance translator for films and YouTube videos, while developing her first feature film, JuJu Land.',
			cp1: '畢業於舊金山州立大學電影所、政治大學英國語文學系，楊渝惠擅於用幽默的方式，討論離鄉台灣人的身份認同及歸屬感。他的研究所畢業製作台語恰恰恰（劇情短片）入圍美國最大的亞美電影節，於舊金山、聖地牙哥、紐約等地播映。最新作品孫女偵探（紀錄短片）獲得嘉義縣政府補助、於2020年十月在聖地牙哥亞洲電影節影展首映。現為文字及影像自由工作者，專接電影、Youtube字幕翻譯、藝術及電影相關撰稿、及籌備第一部劇情長片，歡迎來到小菊島。',
		};
	},
};
</script>

<style lang="scss">
.about__container {
	display: flex;
	align-items: center;
	justify-content: center;
}

@media screen and (max-width: 400px) {
	.about__container {
		margin: 0;
		flex-direction: column;
	}
}

.about__description{
	padding: 20px;
}

.about__profile__image {
	width: 333px;
	height: 400px;
	padding: 20px;
}
</style>
