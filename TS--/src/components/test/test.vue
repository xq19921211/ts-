<template>
	<div class="test-wrap">
		<el-input
		placeholder="请输入账号"
		v-model="input"
		clearable>
		</el-input>
		<el-input placeholder="请输入密码" v-model="psd" show-password>
		</el-input>
		<el-input placeholder="请输入验证码">
		</el-input>
		<el-button type="primary" plain style="width:100%" @click="home()">登录</el-button>
	</div>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from "vue-property-decorator"
	import { Getter, Action } from 'vuex-class'
	import { TestData } from '@/types/components/test.interface'
	// import {  } from "@/components" // 组件

	@Component({})
	export default class About extends Vue {
		// prop
		@Prop({
			required: false,
			default: ''
		}) name!: string

		// data
		data() {
		return {
			input: '',
			psd: ""
		}
		}

		home(){
		this.$router.push('system')
		}

		created() {
			//
		}

		activated() {
			//
		}

		mounted() {
			//
		}

	}
</script>

<style lang="scss">
	@import "@/assets/scss/variables.scss";
	.test-wrap {
		width: 25%;
		height: 25%;
		position: absolute;
		top:40%;
		left:38%
	}
</style>

