
if (Meteor.isServer) {

//TODO this publishes all users passwords!!
  Meteor.publish('allUsers', function() {
    return Meteor.users.find({});
  });
}

if (Meteor.isClient) {

  Deps.autorun(function(){
    Meteor.subscribe("allUsers");
  });
}
