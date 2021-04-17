<template>
	<div class="films__container">
		<MovieContainer
			v-for="(movie, index) in movies"
			:key="index"
			:movieDetails="movie"
			:class="{ 'container__right': (index%2) }" />
	</div>
</template>

<script>
import MovieContainer from '@/components/MovieContainer.vue';
import c13Img from '../images/c13.png';
import runImg from '../images/run.png';
import twchachachaImg from '../images/twchachacha.jpg';
import detectiveImg from '../images/detective.png';

export default {
	name: 'Films',
	components: {
		MovieContainer,
	},
	data() {
		return {
			movies: [
				{
					title: 'C大13',
					status: 'In post-production',
					links: [
						{
							link: 'https://vimeo.com/501683604',
							linkTitle: '預告 Preview Link',
						},
					],
					img: c13Img,
					engDescription: 'A young man in Taiwan devotes all his time, money, and curating talents to a Kpop girl that just disbanded, hoping to bring their popularity back.',
					zhDescription: '一個台灣的年輕高材生自掏腰費、曠日費時，就是希望能替一個不續約的韓國女團重振人氣。',
				},
				{
					title: '好膽麥走',
					status: '2020',
					links: [
						{
							link: 'https://vimeo.com/501685301',
							linkTitle: '正片 Link',
						},
					],
					img: runImg,
					engDescription: 'Police got a call that the Pied Piper is out wronging again. Who is the target this time?',
					zhDescription: '小女警出任務，要阻止神秘人士出來搗亂。誰是這次的受害者？',
				},
				{
					title: '孫女偵探',
					status: '2019',
					links: [
						{
							link: 'https://www.youtube.com/watch?v=_nRDG6OfrNA',
							linkTitle: '正片 Link',
						},
					],
					img: detectiveImg,
					engDescription: 'Judie’s visit to her grandmother sparks a conversation about language barriers, generational gaps, and the resilience of familial love.',
					zhDescription: '擅長多國語言的孫女從小在世界各個城市奔走，卻因為台語太爛而不敢回溪口找阿嬤。27歲第一次自己一個人搭火車回家，卻讓阿嬤驚慌的四處打電話尋人，搞得孫女也很不好意思。但是這一次不一樣，孫女要用拍電影當藉口，拿著攝影機回鄉記錄阿嬤的生活，以偵探的姿態、抽絲剝繭的精神，一步一步向阿嬤靠近。阿嬤是不是也願意敞開心胸接納她呢？',
					filmFestivals: [
						'入圍2020 San Diego Asian Film Festival',
					],
					funds: [
						'補助：嘉義縣嘉好徵件佳作',
					],
				},
				{
					title: '台語恰恰恰',
					status: '2019',
					links: [
						{
							link: 'https://vimeo.com/494289510',
							linkTitle: '正片 Link (歡迎來信索取密碼/To view the film, please feel free to email me for the password)',
						},
					],
					img: twchachachaImg,
					engDescription: 'Two young girls set out for a secret journey against their parents’ will in order to reconnect back with their grandparents. Their encounter encourages each other, turning the ridiculed and doubted journey into a meaningful and unexpected adventure.',
					zhDescription: '十六歲的女高中生珮珮活在令人窒息的升學壓力之下。高材生筱琪忍受眾人的嘲笑只為了開啟自己的台語翻譯事業。一個星期六，因不會說台語而不能獨自回鄉下找阿公的珮珮，遇見了在大雨中奮力宣傳的筱琪，兩人順勢展開了一場小叛逆的冒險。',
					filmFestivals: [
						'Best Entertainment Narrative Film/ J:COM Award of Kadoma International Film Festival',
						'Winner of Druk International Film Festival Best Student Film',
						'Honorable Mention of 2020 Austin Asian American Film Festival',
						'First Time Director Award 2020 San Francisco Frozen Film Festival',
						'Finalist of International Amity Short Film Festival',
						'Official Selection of CAAMfest 2020',
						'Official Selection of 43rd Asian American International Film Festival',
						'Official Selection of the 20th San Diego Asian Film Festival',
						'Official Selection of the 16th Dam Short Film Festival',
						'Official Selection of Taiwanese American Film Festival',
						'Official Selection of All Asian Independent Film Festival',
						'Official Selection of 11th Inter-University International Film Festival',
						'Official Selection of Short Film Festival on Cultural Diversity and Peace',
						'Official Selection of 16th IAWRT Asian Women\'s Film Festival',
						'Official Selection of Flicks International Student Short Film Festival',
					],
					funds: [
						'Taiwanese United Fund',
					],
					externalLinks: [
						{
							display: 'Filmmaker Q&A @ San Francisco Frozen Film Festival',
							link: 'https://vimeo.com/436653353',
						},
						{
							display: 'Taiwanese Cha Cha Cha: Judie Yang on Language, Culture, & Family',
							link: 'http://www.taiwaneseamerican.org/2020/06/taiwanese-cha-cha-cha-film-festival/',
						},
						{
							display: '一個名不見經傳的獨立影展，為何成為獨立電影工作者的夢想',
							link: 'https://taronews.tw/2019/08/04/421241/',
						},
						{
							display: 'Taiwanese Short Film “Taiwanese Cha Cha Cha” is Selected for 2020 Dam Short Film Festival in the U.S.',
							link: 'https://la.us.taiwan.culture.tw/information_134_108658.html',
						},
						{
							display: '10/17遠東科大影像推廣（一）少年阿公的追婚路-導演的話',
							link: 'http://as.chionyuan.org.tw/Entrance/Corner/Education_Class.aspx?id=74',
						},
						{
							display: '台灣短片台語恰恰恰入選2020舊金山亞美電影節',
							link: 'http://www.bayvoice.net/b5/news/us/2020/10/06/984910.htm%E5%8F%B0%E7%81%A3%E7%9F%AD%E7%89%87%E3%80%8A%E5%8F%B0%E8%AA%9E%E6%81%B0%E6%81%B0%E6%81%B0%E3%80%8B%E5%85%A5%E9%81%B82020%E8%88%8A%E9%87%91%E5%B1%B1%E5%9C%8B%E9%9A%9B%E4%BA%9E%E7%BE%8E%E9%9B%BB.html',
						},
						{
							display: '西班牙哈恩大學交換經驗分享',
							link: 'https://ioh.tw/talks/%E5%93%88%E6%81%A9%E5%A4%A7%E5%AD%B8-university-of-jaen-%E6%A5%8A%E6%B8%9D%E6%83%A0-judie-young-ov-study-nde-es',
						},
						{
							display: 'Taiwanese Cha Cha Cha 跟著台灣的導演跳一支屬於這片土地的恰恰吧！',
							link: 'https://vocus.cc/article/5fe76052fd8978000193ef9e',
						},
						{
							display: 'Short Film Review: Taiwanese Cha Cha Cha (2019) by Yang Yu-hui',
							link: 'https://asianmoviepulse.com/2020/10/short-film-review-taiwanese-cha-cha-cha-2019-by-yang-yu-hui/',
						},
					],
				},
			],
		};
	},
};
</script>

<style>
.films__container {
	display: flex;
	flex-direction: column;
}

.container__right {
	align-self: flex-end;
}

@media screen and (max-width: 400px) {
	.container__right {
		align-self: unset;
	}
}
</style>
