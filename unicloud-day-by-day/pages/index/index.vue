<template>
	<view class="content">
<!-- 		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view> -->
		
		<form @submit="onSubmit">
			<input name="username" type="text" style="border: solid 1px #999999;height: 40rpx;"/>
			<input name="gender" type="text" style="border: solid 1px #999999;height: 40rpx;"/>
			<input name="age" type="number" style="border: solid 1px #999999;height: 40rpx;"/>
			<input name="nickname" type="text" style="border: solid 1px #999999;height: 40rpx;"/>
			<input name="password" type="text" style="border: solid 1px #999999;height: 40rpx;"/>
		    <button form-type="submit">Submit</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			// this.getUser();
		},
		methods: {
			onSubmit(e) {
				console.log(e.detail.value);
				this.createUser(e.detail.value)
			},
			createUser(data) {
				uniCloud.callFunction({
					name:"createUser",
					data: data
				}).then( res => {
					console.log(res.result);
				})
			},
			getUser() {
				uniCloud.callFunction({
					name:"getUser"
				}).then( res => {
					console.log(res.result);
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
