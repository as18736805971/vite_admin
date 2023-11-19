import Vue from 'vue'
import Element from 'element-ui'
import * as filters from '@/filters'
import { Message, MessageBox } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element, {
  size: 'medium'
})

/*
 * 引用全局过滤方法
 */
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 消息框消失时间
const messageDuration = 3000

/**
 * 全局信息提示
 * @param message 信息内容
 * @param type 类型 使用全局枚举筛选 MessageType.success
 */
Vue.prototype.$baseMessage = (message, type = 'success') => {
  return new Promise((resolve) => {
    Message({
      offset: 60,
      showClose: true,
      message: message,
      type: type,
      dangerouslyUseHTMLString: true,
      duration: messageDuration
    })
    setTimeout((_) => {
      resolve()
    }, messageDuration + 100)
  })
}

/* 全局Alert */
Vue.prototype.$baseAlert = (content, title = '温馨提示') => {
  return MessageBox.alert(content, title, {
    confirmButtonText: '确定',
    dangerouslyUseHTMLString: true
  })
}

/* 全局Confirm */
Vue.prototype.$baseConfirm = (
  content,
  title = '温馨提示',
  type = 'warning',
  confirmButtonText = '确定',
  cancelButtonText = '取消'
) => {
  return MessageBox.confirm(content, title || '温馨提示', {
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
    closeOnClickModal: false,
    distinguishCancelAndClose: true,
    type: type
  })
}
