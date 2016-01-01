ofInterest = function() {
  if (isStudent()){
    return INVESTOR
  }
  if (isInvestor()) {
    return STUDENT
  }
  return 'error'
}

isInvestor = function(){
  return (Meteor.user().profile.role == INVESTOR)
}

isStudent = function(){
  return (Meteor.user().profile.role == STUDENT)
}
