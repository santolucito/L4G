Router.configure({
  // we use the  appBody template to define the layout for the entire app
  layoutTemplate: 'appBody',

  // the appNotFound template is used for unknown routes and missing lists
  notFoundTemplate: 'appNotFound',

  // show the appLoading template whilst the subscriptions below load their data
  loadingTemplate: 'appLoading',

});


if (Meteor.isClient) {
  // Keep showing the launch screen on mobile devices until we have loaded
  // the app's data

  // Show the loading screen on desktop
  Router.onBeforeAction('loading', {except: ['join', 'signin']});
  Router.onBeforeAction('dataNotFound', {except: ['join', 'signin']});
}

Router.route('/join');
Router.route('/signin');

Router.route('/profile/:name',{
  name:"profile",
  data:function(){

    return Meteor.users.findOne({"profile.firstName":this.params.name})
  }
});


Router.route('/about');

Router.route('/', {
  template: 'search'
});
