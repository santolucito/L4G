// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  Meteor.users.remove({})


  var profile =
    {role:"student"
    ,firstName:"Mark"
    ,lastName:"Santolucito"}

  Accounts.createUser({
    email: "mark@yale.edu",
    password: "mark",
    profile: profile,
  })

  var profile2 =
    {role:"investor"
    ,firstName:"Fred"
    ,lastName:"Shepard"}

  Accounts.createUser({
    email: "fred@amherst.edu",
    password: "fred",
    profile: profile2,
  })
}
);
