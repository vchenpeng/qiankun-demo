import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export async function bootstrap () {

}
export async function mount (props) {
  
  new Vue({
    render: h => h(App),
  }).$mount(props.container.querySelector('#app'))
}
export async function unmount () {

}