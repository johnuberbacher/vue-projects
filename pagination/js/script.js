var VuePaginator = require('VuePaginator');
 new Vue({
  
  el: '#sample',
  data: {
    animals: [],
      // Here you define the url of your paginated API
      resource_url: 'http://hootlex.github.io/vuejs-paginator/samples/animals1.json'
    }
  },
  components: {
    VPaginator: VuePaginator
  },
  methods: {
    updateResource(data){
      this.animals = data
    }
  }
})