var SEARCH_RESULTS = "search_results"

Template.search.helpers({
  investors:function(){

    return Meteor.users.find({"profile.role": 'investor'})
  },
  students:function(){
    Meteor.call("getUsers",function(e,r){
      Session.set(SEARCH_RESULTS,r)
    })
    console.log(Session.get(SEARCH_RESULTS));
    return Session.get(SEARCH_RESULTS)

  },
  isStudent:function(){ return isStudent()},
  isInvestor:function(){ return isInvestor()},
  ofInterest:function(){ return ofInterest()}

})

Template.student.helpers({
  username:function(){
    this.email;
  }
})

//Meteor.users.find({"profile.field": valueOfinterest.});
