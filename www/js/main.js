var Vue = require('vue');
var VueResource = require('vue-resource');
var RecordComponent = require('./components/voice-record.vue');

Vue.use(VueResource);

var vm = new Vue({
  components: {
    'voice-record': RecordComponent
  }
}).$mount('#app');