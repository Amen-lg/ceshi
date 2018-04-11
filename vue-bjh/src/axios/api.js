/**
 * @author:cloud.wong.
 * @date:2018.3.26
 * @description:这里主要包含后台接口的定义
 */
import { get,post } from './fetch'

export const test = () => get('/api/UserShop/GetCityList');
