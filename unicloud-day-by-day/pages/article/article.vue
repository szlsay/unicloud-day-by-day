<template>
	<view>
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
				articles: []
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

<style>

</style>
