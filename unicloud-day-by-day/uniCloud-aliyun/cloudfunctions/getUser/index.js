'use strict';
const db = uniCloud.database();

exports.main = async (event, context) => {
	// 获取 `user` 集合的引用
	const result = db.collection('st_user').get();
	//返回数据给客户端
	return result
};
