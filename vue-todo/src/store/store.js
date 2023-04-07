import Vue from "vue";
import Vuex from "vuex";
import todoApp from "./modules/todoApp"

Vue.use(Vuex); //use는 vue의 플러그인 기능 뷰를 사용하는 전역에 적용하기 위해 사용 -> 모든 컴포에서 this.$store로 접근 가능


export const store = new Vuex.Store({
    modules: {todoApp}
})
