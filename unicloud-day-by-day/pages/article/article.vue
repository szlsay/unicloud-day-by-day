<template>
	<view>
		<u-icon name="order" color="#2979ff" size="28"></u-icon>
		<u--image :showLoading="true" :src="src" width="80px" height="80px" @click="click"></u--image>
		<button @click="getArticle">getArticle</button>
		<form @submit="addArticle">
			<input name="title" type="text" style="border: 1rpx solid red;height: 80rpx;" placeholder="title"/>
			<input name="content" type="text" style="border: 1rpx solid red;height: 80rpx;" placeholder="content"/>
			<button form-type="submit">addArticle</button>
		</form>
	</view>
</template>

<script>
	const articleObj = uniCloud.importObject("articleObj")
	export default {
		data() {
			return {
				articles: [],
				src: 'https://cdn.uviewui.com/uview/album/1.jpg'
			}
		},
		methods: {
			async getArticle() {
				const res = await articleObj.get(10)
				console.log(res)
			},
			async addArticle(e) {
				console.log(e);
				const data = e.detail.value
				const res = await articleObj.add(data.title, data.content)
				console.log(res);
			}
		}
	}
</script>

<style lang="scss">

</style>
