var SEARCH_RESULTS = "search_results"
Session.setDefault(SEARCH_RESULTS, "");

Template.search.helpers({
  peopleOfInterest:function(){
    var query = {"profile.role": ofInterest()}
    console.log(query);
    Meteor.call("getUsers",query,function(e,r){
      Session.set(SEARCH_RESULTS,r)
    })
    return Session.get(SEARCH_RESULTS)
  },

  isStudent:function(){ return isStudent()},
  isInvestor:function(){ return isInvestor()},
  ofInterest:function(){ return ofInterest()}

})





//Meteor.users.find({"profile.field": valueOfinterest.});
