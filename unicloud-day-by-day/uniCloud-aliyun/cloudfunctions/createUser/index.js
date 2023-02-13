'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	// 单条插入数据
	const collection = db.collection('st_user');
	let res = await collection.add({
		username: event.username,
		gender: event.gender,
		age: parseInt(event.age),
		nickname: event.nickname,
		password: event.password
	})
	//返回数据给客户端
	return res
};
