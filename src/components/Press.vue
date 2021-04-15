<template>
	<div class="press__container">
		<a
			v-for="(item, index) in externalLinks"
			:key="index"
			:href="item.link"
			class="m-v-4">
			{{ item.display }}
		</a>
	</div>
</template>

<script>
export default {
	name: 'Press',
	data() {
		return {
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
		};
	},
};
</script>

<style>
.press__container {
	display: flex;
	flex-direction: column;
}
</style>
