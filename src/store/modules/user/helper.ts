import { ss } from '@/utils/storage'
import { t } from '@/locales'
const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://vip.123pan.cn/1813317888/%E7%9B%B4%E9%93%BE/b_3465c78a27fde9040f7cbcf41df7df40.jpg',
      name:  t('VFX GPT AI'),//'AI绘图',
      description: '添加Q群 <a href="https://qm.qq.com/cgi-bin/qm/qr?k=cBb9_5xXjKYEbjtTnxKQlOklpIiUa0-J&jump_from=webapi&authKey=WncxVTw23XYYPuU/yzPXgFme5zOn9KVofXzq0hqV6h3WLbRovSLaWyKW8C1Qc+R6" class="text-blue-500" target="_blank" >GitHub</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
