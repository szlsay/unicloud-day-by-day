<template>
	<view>
		<u-icon name="order" color="#2979ff" size="28"></u-icon>
		<u--image :showLoading="true" :src="src" width="80px" height="80px" @click="click"></u--image>
<!-- 		<button @click="getArticle">getArticle</button>
		<form @submit="addArticle">
			<input name="title" type="text" style="border: 1rpx solid red;height: 80rpx;" placeholder="title" />
			<input name="content" type="text" style="border: 1rpx solid red;height: 80rpx;" placeholder="content" />
			<button form-type="submit">addArticle</button>
		</form> -->
		<u-button type="primary" :plain="true" text="镂空"></u-button>
		<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
		<u--form class="article-form" labelPosition="left" :model="articleModel" :rules="rules" ref="articleForm">
			<u-form-item label="标题" prop="title" borderBottom labelWidth="80rpx;">
				<u--input v-model="articleModel.title" border="none"></u--input>
			</u-form-item>
			<u-form-item label="内容" prop="content" borderBottom labelWidth="80rpx;">
				<u--textarea class="article-textarea" v-model="articleModel.content" placeholder="请输入内容" count autoHeight maxlength='100' style="border: 1rpx solid black;"></u--textarea>
			</u-form-item>
		</u--form>
		<u-button class='article-submitBtn' type="primary" text="确定" @click="onSubmit"></u-button>
	</view>
</template>

<script>
	const articleObj = uniCloud.importObject("articleObj")
	export default {
		data() {
			return {
				articles: [],
				src: 'https://cdn.uviewui.com/uview/album/1.jpg',
				articleModel: {
					title: '',
					content: '',
				},
				rules: {
					'title': {
						type: 'string',
						required: true,
						message: '请填写标题',
						trigger: ['blur', 'change']
					},
					'content': {
						type: 'string',
						required: true,
						max: 100,
						message: '请填写内容',
						trigger: ['blur', 'change']
					},
				},
			}
		},
		methods: {
			async onSubmit() {
				console.log(this.articleModel);
				// const res = await articleObj.add(this.articleModel.title, this.articleModel.content)
				// console.log(res);
				// try {
				// 	const res = await articleObj.add(this.articleModel.title, this.articleModel.content)
				// 	uni.showToast({
				// 		title: '创建成功'
				// 	})
				// } catch (e) {
				// 	uni.showModal({
				// 		title: '创建失败',
				// 		content: e.errMsg,
				// 		showCancel: false
				// 	})
				// }
				articleObj.add(this.articleModel.title, this.articleModel.content).then(res => {
					uni.showToast({
						title: '创建成功'
					})
				}).catch(e => {
					console.log(e);
					uni.showModal({
						title: '创建失败',
						content: e.errMsg,
						showCancel: false
					})
				})
			},
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
		},
		onReady() {
			this.$refs.articleForm.setRules(this.rules)
		},
	}
</script>

<style lang="scss">
.article-form{
	margin-left: 16rpx;
	margin-right: 16rpx;
	padding-left: 16rpx;
	padding-right: 16rpx;
}
.article-textarea{
	height: 200rpx;
}
.article-submitBtn{
	margin: 20rpx auto;
	width: 120rpx;
}
</style>
