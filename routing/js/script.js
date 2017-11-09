const Home = { template: '<div>You are Home!</div>' }
const About = { template: '<div>Learn About Us!</div>' }
const Contact = { template: '<div>Contact Us!</div>' }

new Vue({
  el: '#app',
  router: new VueRouter({
    routes: [
      { 
        path: '/', 
        component: Home 
      },
      { 
        path: '/About', 
        component: About 
      },
      { 
        path: '/Contact',
        component: Contact 
      }
    ]
  })
});