import apiSourceInfo from './api-source-info'

import api_mobi_kw from './kw/api-mobi'
import api_ikun_tx from './tx/api-ikun'
import api_ikun_kg from './kg/api-ikun'
import api_ikun_kw from './kw/api-ikun'
import api_ikun_mg from './mg/api-ikun'
import api_ikun_wy from './wy/api-ikun'

import settingState from '@/store/setting/state'


const apiList = {
  mobi_api_kw: api_mobi_kw,
  ikun_api_tx: api_ikun_tx,
  ikun_api_kg: api_ikun_kg,
  ikun_api_kw: api_ikun_kw,
  ikun_api_mg: api_ikun_mg,
  ikun_api_wy: api_ikun_wy,
}
const supportQuality = {}

for (const api of apiSourceInfo) {
  supportQuality[api.id] = api.supportQualitys
}

const getAPI = source => apiList[`${settingState.setting['common.apiSource']}_api_${source}`]

const apis = source => {
  if (/^user_api/.test(settingState.setting['common.apiSource'])) return global.lx.apis[source]
  const api = getAPI(source)
  if (api) return api
  throw new Error('Api is not found')
}

export { apis, supportQuality }
