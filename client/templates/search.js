var SEARCH_RESULTS = "search_results"
Session.setDefault(SEARCH_RESULTS, "");

Template.search.helpers({
  investors:function(){
    var query = {"profile.role": 'investor'}
    Meteor.call("getUsers",query,function(e,r){
      Session.set(SEARCH_RESULTS,r)
    })
    return Session.get(SEARCH_RESULTS)
  },
  students:function(){
    var query = {"profile.role": 'student'}
    Meteor.call("getUsers",query,function(e,r){
      Session.set(SEARCH_RESULTS,r)
    })
    return Session.get(SEARCH_RESULTS)

  },
  isStudent:function(){ return isStudent()},
  isInvestor:function(){ return isInvestor()},
  ofInterest:function(){ return ofInterest()}

})

Template.student.helpers({
  username:function(){
    console.log(this.emails[0].address);
    return this.emails[0].address;
  }
})

Template.investor.helpers({
  username:function(){
    console.log(this.emails[0].address);
    return this.emails[0].address;
  }
})

//Meteor.users.find({"profile.field": valueOfinterest.});
