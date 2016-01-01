// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  Meteor.users.remove({})


  var profile =
    {role:STUDENT
    ,firstName:"Mark"
    ,lastName:"Santolucito"
    ,education:"Amherst College"
    ,major:"Computer Science"}

  Accounts.createUser({
    email: "mark@yale.edu",
    password: "mark",
    profile: profile,
  })

  var profile2 =
    {role:INVESTOR
    ,firstName:"Fred"
    ,lastName:"Shepard"
    ,education:"Amherst College"
    ,major:"Economics"}

  Accounts.createUser({
    email: "fred@amherst.edu",
    password: "fred",
    profile: profile2,
  })

  console.log("DEBUG MODE: ADDED USERS");
  console.log(profile);
  console.log(profile2);
}
);
