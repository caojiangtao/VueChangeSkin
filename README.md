### 基于Vue优雅的网站换肤功能
---
#### 网站换肤功能，本功能与GitHub昼夜模式实现方式一致，支持Chrome49.0,IE浏览器15.0,FireFox31.0，Safari9.1 Oracle36.及以上版本
---
#### 换肤功能使用方式说明

 1.在skin中定义皮肤，所有更换皮肤需要的颜色，及图片都可以定义在，css文件中格式如下,并在 APP.vue中全局引入：
``` 
    [data-color-mode=dark] {
        --color-suyan-bg: rgb(255, 73, 73);
    }
    [data-color-mode=light] {
        --color-suyan-bg: rgb(19, 206, 102);
    }
```
2.在App.vue的'beforeMount'钩子函数中初始化皮肤。

```
    beforeMount(){
        skin.initSkin('light')
    },

```

3.在.vue或者.styl文件中涉及到换肤的颜色及图片都使用公用颜色
```
<style lang="stylus" scoped>
    import account  from './account.vue';
    .el-menu-item{
        background-color :var(--color-suyan-bg);
    }
</style>
```
4.调用skin/index.js 使用skin.changeSkin方法无刷新动态切换皮肤,使用案例如下：
```
<template>
  <div>
    <el-switch
        v-model="skinValue"
        :active-color="#13ce66"
        :inactive-color="#ff4949">
    </el-switch>
  </div>
</template>
<script>
    import skin from '../../../../skin/index.js'
    export default {
        data () {
            return {
             skinValue:true
            }
        },
        watch:{
            skinValue:{
                handler:function(newval){
                let targetMode
                if(newval) {
                    targetMode = 'light'
                } else {
                    targetMode = 'dark'
                }
                this.skinImg.mode = targetMode
                skin.changeSkin(targetMode)//必须调用
                },
                deep:true
            }
        }    
    } 
</script>
```
5.若换肤的过程中若需要根据皮肤切换图片，可以根据html 中的 data-color-mode 属性值来判断需要显示的图片。（可调用skin.getSkinMode()方法获取当前皮肤状态）。
