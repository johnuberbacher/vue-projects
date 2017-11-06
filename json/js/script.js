var dataURL = 'https://jsonplaceholder.typicode.com/users';

new Vue({
  el: '#app',
  data: {
    items: null,
	title: "Vue Json Iteration"
  },
  created: function () {
    this.fetchData();
  },
  methods: {
    fetchData: function () {
		var self = this;
		var total;
		$.get(dataURL, function( data ) {
			self.items = data;
		});
    }
  }
});