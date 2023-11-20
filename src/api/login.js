import request from '@/utils/request'

/**
 * 获取手机登录验证码
 * @data account 手机号
 */
export function getSms(data) {
  return request({
    url: 'api/login/sms',
    method: 'post',
    data: data
  })
}

/**
 * 登录获取用户信息
 * @data account 手机号
 * @data sms_code 验证码
 */
export function getCode(data) {
  return request({
    url: 'api/login/web/smsCode',
    method: 'post',
    data: data
  })
}
