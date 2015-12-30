Meteor.methods({
  getUsers:function(query){
    return Meteor.users.find(query).fetch()
  }
})
