// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const db = uniCloud.database();
module.exports = {
	_before: function() { // 通用预处理器
		this.startTime = Date.now() // 在before内记录开始时间并在this上挂载，以供后续流程使用
		const methodName = this.getMethodName()
		if (methodName === 'add' && !this.getUniIdToken()) {
			throw new Error('token不存在'+this.startTime)
		}
	},
	async get(num) {
		return await db.collection('article').limit(num).get();
	},
	async add(title, content) {
		title = title.trim()
		content = content.trim()
		if (!title || !content) {
			return {
				errCode: 'INVALID_TODO',
				errMsg: '标题或内容不可为空'
			}
		}
		const res = await db.collection('article').add({
			title,
			content
		})
		return res
	},
	_after(error, result) {
		if(error) {
			throw error // 如果方法抛出错误，也直接抛出不处理
		}
		result.timeCost = Date.now() - this.startTime
		return result
	}
}
