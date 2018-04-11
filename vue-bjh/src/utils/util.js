/**
 * @author:cloud.wong.
 * @date:2017.8.21
 * @description:工具方法
 *
 */

export const setStore = (name,content) =>{
  if(!name){
    return;
  }
  if(typeof content !== 'string'){
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(`DFGX${name}`,content);
}

export const getStore = (name) =>{
  if(!name){
    return;
  }
  return window.localStorage.getItem(name);
}

export const removeStore = (name) =>{
  if(!name){
    return;
  }
  window.localStorage.removeItem(name);
}
