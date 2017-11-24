Vue.component('alert', {
  template: '<div class="alert">Oh snap! Change a few things up and try submitting again.</div>'
})
Vue.component('warning', {
  template: '<div class="warning">Warning! Better check yourself, you are not looking too good.</div>'
})
Vue.component('success', {
  template: '<div class="success">Well done! You successfully read this important alert message.</div>'
})
new Vue({
  el: '#app'
})
