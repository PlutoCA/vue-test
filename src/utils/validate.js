/**
 * Created by jiachenpan on 16/11/18.
 */

export function isvalidUsername(str) {
  // const valid_map = ['admin', 'editor','18721638688']
  // return valid_map.indexOf(str.trim()) >= 0
  return true;
  
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/* 价格 */
export function validatePrice(str) {
		const reg = /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/g
		return reg.test(str)
}

/* 手机号码 （只校验以1开头的11位数字）*/
export function validatPhone(str) {
		const reg = /^[1][0-9]{10}$/
		return reg.test(str)
}

export function goodsClassName (rule, value, callback){
  const reg =/^.{1,32}$/
  if(value==''){
    return callback(new Error("名称不能为空"));
  }else{
    if(!reg.test(value)) {
      return callback(new Error("名称不能有空格不能超过32个字符"));
    }else{
      callback();
    }
  } 
};

export function goodsClassOrder (rule, value, callback){
  const reg = /^[0-9]\d*$/;
  if (!reg.test(value)) {
    return callback(new Error("请输入正整数"));
  }else{
    callback();
  }
};

/* 手机号 */
export function phoneReg (rule, value, callback) {
  const reg = /^1[0-9]{10}$/
  if (value.length===0) {
    return callback(new Error('手机号不能为空'))
  }else if (!reg.test(value)){
    return callback(new Error('请输入正确的手机号'))
  }else{
    callback()
  }
}
/* 密码 */
export function pwdReg (rule, value, callback) {
  const reg = /^(\w){5,18}$/    //校验密码：只能输入5-18个字母、数字、下划线
  if (value.length===0) {
    return callback(new Error('密码不能为空'))
  }else if (!reg.test(value)){
    return callback(new Error('只能输入5-18个字母、数字、下划线'))
  }else{
    callback()
  }
}

/* 身份证号 */
export function idCardReg (rule, value, callback) {
		const reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
		if (value.length===0) {
				return callback(new Error('身份证号码不能为空'))
		}else if (!reg.test(value)){
				return callback(new Error('请输入正确的身份证号'))
		}else{
				callback()
		}
}
