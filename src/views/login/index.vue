<template>
  <div>
    <el-form ref="loginForm" label-position="left">
      <el-form-item prop="account">
        <el-input v-model="form.account" type="text" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item prop="sms_code">
        <el-input v-model="form.sms_code" type="text" placeholder="请输入验证码" />
      </el-form-item>
      <el-button @click="handleLogin()">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { getCode } from '@/api/login'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        account: '13200000001',
        sms_code: '000000'
      }
    }
  },
  methods: {
    handleLogin() {
      getCode(this.form).then((res) => {
        console.log(res, '4444')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
