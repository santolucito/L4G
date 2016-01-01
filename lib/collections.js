
if (Meteor.isServer) {

  Meteor.publish('allUsers', function() {
    return Meteor.users.find({});
  });  
}

if (Meteor.isClient) {

  Deps.autorun(function(){
    Meteor.subscribe("allUsers");
  });
}
