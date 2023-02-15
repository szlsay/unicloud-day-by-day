'use strict';
const db = uniCloud.database();

exports.main = async (event, context) => {
	//返回数据给客户端
	// let res = await db.collection('st_user').where({
	//   _id: event.id
	// }).remove()
	let res = await db.collection('st_user').doc(event.id).remove()
	return res
};
