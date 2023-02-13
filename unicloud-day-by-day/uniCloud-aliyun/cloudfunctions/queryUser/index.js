'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	// let expStr = `^${event.username}*$`
	let expStr = `${event.username}`
	let regExp = new RegExp(expStr, 'i')
	let res = await db.collection('st_user').where({
	  username: regExp
	}).get()
	//返回数据给客户端
	return res
};
