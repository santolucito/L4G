ofInterest = function() {
  if (isStudent()){
    return 'Loan'
  }
  if (isInvestor()) {
    return 'Student'
  }
  return 'Nothing'
}

isInvestor = function(){
  return (Meteor.user().profile.role == 'investor')
}

isStudent = function(){
  return (Meteor.user().profile.role == 'student')
}
