<template>
	<div id="app">
		<img alt="Vue logo" :src="skinImg.imgUrl[skinImg.mode]" width="200" height="200" />
		<el-switch style="border:2px solid #000;border-radius:15px;" v-model="skinValue" :active-color="skinColor.red" :inactive-color="skinColor.blue"></el-switch>
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import skin from './skin/index.js';
export default {
	name: 'App',
	data() {
		return {
			skinImg: {
				mode: null,
				imgUrl: {
					light: require('@/assets/logo.png'),
					dark: require('@/assets/logo2.png')
				}
			},
			skinColor: {
				red: '#13ce66',
				blue: '#ff4949'
			},
			skinValue: localStorage.getItem('mode') === 'light' ? true : false
		};
	},
	watch: {
		skinValue: {
			handler: function(newval) {
				let targetMode;
				if (newval) {
					targetMode = 'light';
				} else {
					targetMode = 'dark';
				}
				this.skinImg.mode = targetMode;
				skin.changeSkin(targetMode);
			},
			deep: true //对象内部的属性监听，也叫深度监听
		}
	},
	components: {
		HelloWorld
	},
	beforeMount() {
		skin.initSkin('dark');
		this.skinImg.mode = 'dark'
	}
};
</script>

<style>
@import url('./skin/index.css');
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: var(--color-suyan-bg);
	margin-top: 60px;
}
</style>
