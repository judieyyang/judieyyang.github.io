<template>
	<div class="contact__container">
		<div>
			<div>{{ p1 }}</div>
			<div>
				{{ p2 }}
				<a href="maito:taiwaneseguaranteed@gmail.com">
					{{ emailLink }}
				</a>
				{{ p3 }}
			</div>
		</div>
		<div class="m-t-10">
			<div>{{ c1 }}</div>
			<div>
				{{ c2 }}
				<a href="maito:taiwaneseguaranteed@gmail.com">
					{{ emailLink }}
				</a>
				{{ c3 }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Contact',
	data() {
		return {
			p1: 'Judie is enjoying the best of the both worlds as a writer/translator and a filmmaker. She is currently open to any film-related gigs, as well as English-Mandarin/ Mandarin-English/ Spanish-Mandarin translation projects.',
			p2: 'Please feel free to email at',
			emailLink: 'taiwaneseguaranteed@gmail.com',
			p3: 'for further discussions.',
			c1: '能做文字和影像工作是最幸福的事！',
			c2: '任何影像製作、中翻英、英翻中、及西翻中的邀約，請email至',
			c3: '會盡快與您聯繫！',
		};
	},
};
</script>

<style>
.contact__container {
	padding: 20px;
}
</style>
