<template>
	<view class="u-content">
		<!-- <u-parse :content="content"></u-parse> -->
		<jinEdit class='st_edit' placeholder="请输入内容" @editOk="editOk" uploadFileUrl="/#" :height="'calc(100vh - 88rpx)'"></jinEdit> 
	</view>
</template>

<script>
	import jinEdit from '@/components/jin-edit/jin-edit.vue';
	export default {
		components: {
			jinEdit
		},
		data() {
			return {
				content: `<p>露从今夜白，月是故乡明</p>
				<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
				`
			};
		},
		methods: {
			// 点击发布
			editOk(res) {
				console.log(res);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-content {
		// padding: 24rpx;
		// height: calc(100vh - 50rpx);
	}
	
</style>
