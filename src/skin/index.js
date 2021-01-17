export default {
    //修改皮肤
    changeSkin:(type)=> {
        const ele = document.getElementsByTagName('html')[0];
        let targetMode = type
        ele.setAttribute('data-color-mode', targetMode);
        localStorage.setItem("skinMode", targetMode);
    },
    // 获取当前皮肤
    getSkinMode:() => {
        const ele = document.getElementsByTagName('html')[0];
        let mode = ele.getAttribute('data-color-mode');
        return mode
    },
    // 初始化皮肤
    initSkin:(type) => {
        const mode = localStorage.getItem('skinMode')
        const ele = document.getElementsByTagName('html')[0];
        if(mode){
            ele.setAttribute('data-color-mode', mode);
        } else {
            ele.setAttribute('data-color-mode', type);
        }    
    }
}