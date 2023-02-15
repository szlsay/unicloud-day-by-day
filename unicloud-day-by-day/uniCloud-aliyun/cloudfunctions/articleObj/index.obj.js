// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const db = uniCloud.database();
module.exports = {
	_before: function () { // 通用预处理器

	},
	async get(num) {
		return await db.collection('article').limit(num).get();
	},
	async add(title, content) {
		title = title.trim()
		content = content.trim()
		if(!title || !content) {
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
	}
}
